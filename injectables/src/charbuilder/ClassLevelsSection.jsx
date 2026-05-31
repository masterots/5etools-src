import React, {useMemo} from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useForm, useFormState} from "react-final-form";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	Chip,
	Divider,
	FormControl,
	Grid,
	IconButton,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

const EMPTY_CLASS_ROW = () => ({className: "", level: 1});

function _getClassKey ({name, source}) {
	const safeName = name || "";
	const safeSource = source || "";
	return `${safeName}__${safeSource}`;
}

function _getSourceLabel (source) {
	if (!source) {
		return "Unknown";
	}
	if (window.Parser?.sourceJsonToAbv) {
		return window.Parser.sourceJsonToAbv(source);
	}
	return source;
}

function _getClassCardSummary (cls) {
	const parts = [];
	if (cls?.hd?.faces) {
		parts.push(`Hit Die: d${cls.hd.faces}`);
	}
	if (cls?.casterProgression) {
		parts.push(`Caster: ${cls.casterProgression}`);
	}
	return parts.join(" \\u2022 ") || "No summary available";
}

function _getRenderedClassDetailHtml (cls) {
	if (!cls) {
		return "";
	}

	const rendererClass = window.Renderer?.class;
	if (rendererClass?.getCompactRenderedString) {
		return rendererClass.getCompactRenderedString(cls, {isStatic: true});
	}

	const text = cls.entries ? JSON.stringify(cls.entries).slice(0, 1400) : "No renderer available.";
	return `<div><h4>${cls.name || "Class"}</h4><p>${text}</p></div>`;
}

function _toIntInRange ({value, min, max, fallback}) {
	const parsed = parseInt(value, 10);
	if (Number.isNaN(parsed)) {
		return fallback;
	}
	if (parsed < min) {
		return min;
	}
	if (parsed > max) {
		return max;
	}
	return parsed;
}

function LevelSelect ({
	value,
	onChange,
	maxLevel,
	menuProps,
	minWidth = 120,
	label = "Level",
}) {
	const formControlRef = React.useRef(null);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const mergedMenuProps = useMemo(() => {
		return {
			...(menuProps || {}),
			anchorEl,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "left",
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "left",
			},
		};
	}, [anchorEl, menuProps]);

	return (
		<FormControl ref={formControlRef} size="small" sx={{minWidth}}>
			<InputLabel>{label}</InputLabel>
			<Select
				value={value}
				label={label}
				MenuProps={mergedMenuProps}
				onOpen={() => {
					const nextAnchor = formControlRef.current?.querySelector("[role='combobox']") || formControlRef.current;
					setAnchorEl(nextAnchor || null);
				}}
				onClose={() => {
					setAnchorEl(null);
				}}
				onChange={(evt) => {
					onChange(evt.target.value);
				}}
			>
				{Array.from({length: maxLevel}, (_, idx) => idx + 1).map(level => (
					<MenuItem key={level} value={level}>Level {level}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

function ClassDetailPanel ({detailHtml, hasClass}) {
	return (
		<Paper
			variant="outlined"
			sx={{
				p: 1.5,
				minHeight: 420,
				maxHeight: 620,
				overflow: "auto",
				lineHeight: 1.45,
				"& a, & a:visited": {
					color: "primary.main",
					textDecorationColor: "currentColor",
				},
				"& a:hover": {
					textDecorationThickness: "2px",
				},
				"& .ve-muted": {
					color: "text.secondary",
				},
			}}
		>
			{hasClass ? (
				<div dangerouslySetInnerHTML={{__html: detailHtml}} />
			) : (
				<Typography variant="body2" color="text.secondary">
					Pick a class card to preview detailed content.
				</Typography>
			)}
		</Paper>
	);
}

export function ClassLevelsSection ({allClasses, classesLoading, overlayContainer = null, onBack, onNext, showNavigation = true}) {
	const form = useForm();
	const {values} = useFormState({subscription: {values: true}});
	const [search, setSearch] = React.useState("");
	const [sourceFilter, setSourceFilter] = React.useState("all");
	const [previewClassKey, setPreviewClassKey] = React.useState("");
	const [pendingClassLevel, setPendingClassLevel] = React.useState(1);
	const [expandedClassKey, setExpandedClassKey] = React.useState("");
	const [isFiltersExpanded, setIsFiltersExpanded] = React.useState(false);
	const levelSelectProps = useMemo(() => {
		if (showNavigation) {
			return undefined;
		}

		return {
			disablePortal: true,
		};
	}, [showNavigation]);

	const rows = values.classLevels ?? [];
	const totalLevel = rows.reduce((acc, row) => acc + (_toIntInRange({value: row.level, min: 1, max: 20, fallback: 1})), 0);
	const selectedByKey = useMemo(() => {
		const map = new Map();
		rows.forEach(row => {
			if (row.className) {
				const classKey = _getClassKey({name: row.className, source: row.classSource});
				map.set(classKey, row);
			}
		});
		return map;
	}, [rows]);

	const sourceOptions = useMemo(() => {
		return ["all", ...new Set(allClasses.map(cls => cls.source).filter(Boolean))];
	}, [allClasses]);

	const filteredClasses = useMemo(() => {
		const searchLower = search.trim().toLowerCase();
		return allClasses
			.filter(cls => {
				if (sourceFilter !== "all" && cls.source !== sourceFilter) {
					return false;
				}
				if (!searchLower) {
					return true;
				}
				return cls.name?.toLowerCase().includes(searchLower);
			})
			.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
	}, [allClasses, search, sourceFilter]);

	const updateRows = (nextRows) => {
		form.change("classLevels", nextRows);
	};

	const toggleClassSelected = (cls) => {
		if (!cls?.name) {
			return;
		}
		const classKey = _getClassKey({name: cls.name, source: cls.source});

		if (selectedByKey.has(classKey)) {
			updateRows(rows.filter(row => _getClassKey({name: row.className, source: row.classSource}) !== classKey));
			return;
		}

		if (totalLevel >= 20) {
			return;
		}

		updateRows([...rows, {className: cls.name, classSource: cls.source || "", level: 1}]);
	};

	const removeClassRow = (classKey) => {
		updateRows(rows.filter(row => _getClassKey({name: row.className, source: row.classSource}) !== classKey));
	};

	const updateClassLevel = ({classKey, levelRaw}) => {
		const row = rows.find(it => _getClassKey({name: it.className, source: it.classSource}) === classKey) ?? EMPTY_CLASS_ROW();
		const currentLevel = _toIntInRange({value: row.level, min: 1, max: 20, fallback: 1});
		const otherLevels = totalLevel - currentLevel;
		const maxForThisRow = Math.max(1, 20 - otherLevels);
		const nextLevel = _toIntInRange({
			value: levelRaw,
			min: 1,
			max: maxForThisRow,
			fallback: currentLevel,
		});

		updateRows(
			rows.map((it) => {
				if (_getClassKey({name: it.className, source: it.classSource}) === classKey) {
					return {...it, level: nextLevel};
				}
				return it;
			}),
		);
	};

	const previewClass = useMemo(() => {
		const byKey = allClasses.find(cls => _getClassKey({name: cls.name, source: cls.source}) === previewClassKey);
		if (byKey) {
			return byKey;
		}

		const selectedClass = rows[0];
		if (!selectedClass?.className) {
			return null;
		}
		const selectedClassKey = _getClassKey({name: selectedClass.className, source: selectedClass.classSource});
		return allClasses.find(cls => _getClassKey({name: cls.name, source: cls.source}) === selectedClassKey) || null;
	}, [allClasses, previewClassKey, rows]);

	const detailHtml = useMemo(() => {
		return _getRenderedClassDetailHtml(previewClass);
	}, [previewClass]);

	const maxPreviewClassLevel = useMemo(() => {
		if (!previewClass?.name) {
			return 1;
		}

		const previewKey = _getClassKey({name: previewClass.name, source: previewClass.source});
		const existing = rows.find(it => _getClassKey({name: it.className, source: it.classSource}) === previewKey);
		const existingLevel = existing ? _toIntInRange({value: existing.level, min: 1, max: 20, fallback: 1}) : 0;
		const otherLevels = totalLevel - existingLevel;
		return Math.max(1, 20 - otherLevels);
	}, [previewClass, rows, totalLevel]);

	const handleSelectPreviewClass = () => {
		if (!previewClass?.name) {
			return;
		}

		const classKey = _getClassKey({name: previewClass.name, source: previewClass.source});
		const nextLevel = _toIntInRange({
			value: pendingClassLevel,
			min: 1,
			max: maxPreviewClassLevel,
			fallback: 1,
		});

		if (selectedByKey.has(classKey)) {
			updateClassLevel({classKey, levelRaw: nextLevel});
		} else {
			updateRows([...rows, {className: previewClass.name, classSource: previewClass.source || "", level: nextLevel}]);
		}

		setExpandedClassKey(classKey);
	};

	const previewIsSelected = previewClass ? selectedByKey.has(_getClassKey({name: previewClass.name, source: previewClass.source})) : false;

	return (
		<Paper variant="outlined" sx={{p: 2}}>
			<Typography variant="h6" gutterBottom>Classes and Levels</Typography>
			<Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
				Total class levels: {totalLevel} / 20
			</Typography>
			<Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
				{classesLoading ? "Loading class cards..." : `${filteredClasses.length} class cards`}
			</Typography>

			<Grid container spacing={2}>
				<Grid size={{xs: 12, md: 6}}>
					<Stack spacing={2} sx={{minWidth: 0}}>
						<TextField
							label="Search classes"
							value={search}
							onChange={(evt) => {
								setSearch(evt.target.value);
							}}
							size="small"
							fullWidth
						/>

						<Stack spacing={1}>
							<Button
								type="button"
								variant="outlined"
								size="small"
								onClick={() => {
									setIsFiltersExpanded(!isFiltersExpanded);
								}}
								sx={{alignSelf: "flex-start"}}
							>
								{isFiltersExpanded ? "Hide Filters" : "Show Filters"}
							</Button>

							{isFiltersExpanded && (
								<Box
									sx={{
										display: "flex",
										flexWrap: "wrap",
										gap: 1,
										maxWidth: "100%",
										overflow: "hidden",
									}}
								>
									{sourceOptions.map(source => {
										const label = source === "all" ? "All Sources" : _getSourceLabel(source);
										return (
											<Chip
												key={source}
												label={label}
												color={sourceFilter === source ? "primary" : "default"}
												variant={sourceFilter === source ? "filled" : "outlined"}
												onClick={() => {
													setSourceFilter(source);
												}}
											/>
										);
									})}
								</Box>
							)}
						</Stack>

						<Stack
							spacing={1}
							sx={{
								height: "clamp(260px, 42vh, 360px)",
								overflowY: "auto",
								overflowX: "hidden",
								pr: 0.5,
								scrollbarGutter: "stable",
								overscrollBehavior: "contain",
								"& > *": {
									flexShrink: 0,
								},
							}}
						>
							{classesLoading && (
								<Typography variant="body2" color="text.secondary">Loading class data...</Typography>
							)}

							{filteredClasses.map(cls => {
								const classKey = _getClassKey({name: cls.name, source: cls.source});
								const isSelected = selectedByKey.has(classKey);
								return (
									<Card
										key={`${cls.name}__${cls.source || "src"}`}
										variant="outlined"
										sx={{
											flexShrink: 0,
											borderColor: isSelected ? "primary.main" : "divider",
											backgroundColor: isSelected ? "action.selected" : "background.paper",
										}}
									>
										<CardActionArea
											onClick={() => {
												if (showNavigation) {
													toggleClassSelected(cls);
												}
												setPreviewClassKey(classKey);
												const existingLevel = selectedByKey.get(classKey)?.level;
												setPendingClassLevel(_toIntInRange({value: existingLevel ?? 1, min: 1, max: 20, fallback: 1}));
											}}
										>
											<CardContent sx={{pb: "8px !important"}}>
												<Stack direction="row" justifyContent="space-between" alignItems="center">
													<Typography variant="subtitle1">{cls.name}</Typography>
													<Chip size="small" label={_getSourceLabel(cls.source)} />
												</Stack>
												<Typography variant="body2" color="text.secondary">
													{_getClassCardSummary(cls)}
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								);
							})}

							{!classesLoading && filteredClasses.length === 0 && (
								<Typography variant="body2" color="text.secondary">No classes match your filters.</Typography>
							)}
						</Stack>

						{showNavigation && (
							<>
								<Divider />

								<Stack spacing={1}>
									<Typography variant="subtitle2">Selected Classes</Typography>
									{rows.length === 0 && (
										<Typography variant="body2" color="text.secondary">
											Select one or more class cards above to assign levels.
										</Typography>
									)}
									{rows.map(row => {
										const classKey = _getClassKey({name: row.className, source: row.classSource});
										const currentLevel = _toIntInRange({value: row.level, min: 1, max: 20, fallback: 1});
										const maxForRow = Math.max(1, 20 - (totalLevel - currentLevel));
										return (
											<Stack key={classKey} direction="row" spacing={1} alignItems="center">
												<Typography variant="body2" sx={{minWidth: 130}}>{row.className}</Typography>
												{row.classSource ? <Chip size="small" label={_getSourceLabel(row.classSource)} /> : null}
												<TextField
													label="Level"
													type="number"
													size="small"
													value={currentLevel}
													inputProps={{min: 1, max: maxForRow}}
													onChange={(evt) => {
														updateClassLevel({classKey, levelRaw: evt.target.value});
													}}
													sx={{width: 110}}
												/>
												<IconButton
													type="button"
													onClick={() => {
														removeClassRow(classKey);
													}}
													color="error"
													title="Remove class"
												>
													<DeleteIcon fontSize="small" />
												</IconButton>
											</Stack>
										);
									})}
								</Stack>
							</>
						)}
					</Stack>
				</Grid>

				<Grid size={{xs: 12, md: 6}}>
					{showNavigation ? (
						<ClassDetailPanel detailHtml={detailHtml} hasClass={!!previewClass} />
					) : (
						<Stack spacing={1.5}>
							{rows.length === 0 && (
								<Stack direction={{xs: "column", sm: "row"}} spacing={1}>
									<LevelSelect
										value={pendingClassLevel}
										maxLevel={maxPreviewClassLevel}
										menuProps={levelSelectProps}
										onChange={(nextValue) => {
											setPendingClassLevel(_toIntInRange({value: nextValue, min: 1, max: maxPreviewClassLevel, fallback: 1}));
										}}
									/>
									<Button
										type="button"
										variant="contained"
										disabled={!previewClass || classesLoading}
										onClick={handleSelectPreviewClass}
									>
										Select Class
									</Button>
								</Stack>
							)}

							{rows.length > 0 ? (
								<Stack spacing={1}>
									{rows.map(row => {
										const classKey = _getClassKey({name: row.className, source: row.classSource});
										const selectedClassMeta = allClasses.find(cls => _getClassKey({name: cls.name, source: cls.source}) === classKey);
										const classDetailHtml = _getRenderedClassDetailHtml(selectedClassMeta);
										const currentLevel = _toIntInRange({value: row.level, min: 1, max: 20, fallback: 1});
										const maxForRow = Math.max(1, 20 - (totalLevel - currentLevel));

										return (
											<Accordion
												key={classKey}
												expanded={expandedClassKey === classKey}
												onChange={(_, isExpanded) => {
													setExpandedClassKey(isExpanded ? classKey : "");
												}}
											>
												<AccordionSummary expandIcon={<ExpandMoreIcon />}>
													<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: "100%", pr: 1}}>
														<Stack direction="row" spacing={1} alignItems="center" useFlexGap flexWrap="wrap">
															<Typography variant="subtitle1">{row.className}</Typography>
															{row.classSource ? <Chip size="small" label={_getSourceLabel(row.classSource)} /> : null}
														</Stack>
														<Chip size="small" color="primary" label={`Level ${currentLevel}`} />
													</Stack>
												</AccordionSummary>
												<AccordionDetails>
													<Stack spacing={1.5}>
														<Stack direction={{xs: "column", sm: "row"}} spacing={1}>
															<TextField
																label="Level"
																type="number"
																size="small"
																value={currentLevel}
																inputProps={{min: 1, max: maxForRow}}
																onChange={(evt) => {
																	updateClassLevel({classKey, levelRaw: evt.target.value});
																}}
																sx={{width: 120}}
															/>
															<Button
																type="button"
																variant="outlined"
																color="error"
																onClick={() => {
																	removeClassRow(classKey);
																}}
															>
																Remove Class
															</Button>
														</Stack>
														{selectedClassMeta ? (
															<Box
																sx={{
																	lineHeight: 1.45,
																	"& a, & a:visited": {
																		color: "primary.main",
																		textDecorationColor: "currentColor",
																	},
																	"& .ve-muted": {
																		color: "text.secondary",
																	},
																}}
																dangerouslySetInnerHTML={{__html: classDetailHtml}}
															/>
														) : (
															<Typography variant="body2" color="text.secondary">
																Class detail unavailable for this source.
															</Typography>
														)}
													</Stack>
												</AccordionDetails>
											</Accordion>
										);
									})}

									<Stack direction={{xs: "column", sm: "row"}} spacing={1}>
										<LevelSelect
											value={pendingClassLevel}
											maxLevel={maxPreviewClassLevel}
											menuProps={levelSelectProps}
											onChange={(nextValue) => {
												setPendingClassLevel(_toIntInRange({value: nextValue, min: 1, max: maxPreviewClassLevel, fallback: 1}));
											}}
										/>
										<Button
											type="button"
											variant="contained"
											disabled={!previewClass || classesLoading || previewIsSelected}
											onClick={handleSelectPreviewClass}
										>
											Select Another Class
										</Button>
									</Stack>
								</Stack>
							) : <ClassDetailPanel detailHtml={detailHtml} hasClass={!!previewClass} />}
						</Stack>
					)}
				</Grid>
			</Grid>

			{showNavigation && (
				<Stack direction="row" justifyContent="space-between" sx={{mt: 2}}>
					<Button type="button" variant="outlined" onClick={onBack}>
						Back
					</Button>
					<Stack direction="row" spacing={1}>
						<Button type="button" variant="outlined" startIcon={<AddIcon />} disabled>
							Tap Class Cards to Add
						</Button>
						<Button type="button" variant="contained" onClick={onNext}>
							Next
						</Button>
					</Stack>
				</Stack>
			)}
		</Paper>
	);
}
