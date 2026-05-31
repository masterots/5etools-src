import React, {useMemo, useState} from "react";
import {useForm, useFormState} from "react-final-form";
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	Chip,
	Divider,
	Grid,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

function _getSourceLabel (source) {
	if (!source) {
		return "Unknown";
	}
	if (window.Parser?.sourceJsonToAbv) {
		return window.Parser.sourceJsonToAbv(source);
	}
	return source;
}

function _getRenderedDetailHtml (entity) {
	if (!entity) {
		return "";
	}

	const rendererRace = window.Renderer?.race;
	if (rendererRace?.getCompactRenderedString) {
		return rendererRace.getCompactRenderedString(entity, {isStatic: true});
	}

	const text = entity.entries ? JSON.stringify(entity.entries).slice(0, 1400) : "No renderer available.";
	return `<div><h4>${entity.name || "Race"}</h4><p>${text}</p></div>`;
}

export function RaceSection ({allRaces, racesLoading, raceValue, onBack, onNext}) {
	const form = useForm();
	const {values} = useFormState({subscription: {values: true}});
	const [search, setSearch] = useState("");
	const [sourceFilter, setSourceFilter] = useState("all");
	const [previewKey, setPreviewKey] = useState("");
	const [isFiltersExpanded, setIsFiltersExpanded] = useState(false);

	const raceRecords = useMemo(() => {
		const byName = new Map();

		allRaces.forEach(race => {
			const baseName = race._baseName || race.name;
			if (!baseName) {
				return;
			}

			if (!byName.has(baseName)) {
				byName.set(baseName, {
					name: baseName,
					source: race.source,
					baseRace: race,
					subraces: [],
				});
			}

			if (race._subraceName) {
				byName.get(baseName).subraces.push(race);
			}
		});

		return [...byName.values()].sort((a, b) => a.name.localeCompare(b.name));
	}, [allRaces]);

	const sourceOptions = useMemo(() => {
		return [
			"all",
			...new Set(raceRecords.map(r => r.source).filter(Boolean)),
		];
	}, [raceRecords]);

	const filteredRaces = useMemo(() => {
		const searchLower = search.trim().toLowerCase();

		return raceRecords.filter(record => {
			if (sourceFilter !== "all" && record.source !== sourceFilter) {
				return false;
			}
			if (!searchLower) {
				return true;
			}
			return record.name.toLowerCase().includes(searchLower);
		});
	}, [raceRecords, search, sourceFilter]);

	const subraces = useMemo(
		() => {
			if (!raceValue) {
				return [];
			}
			return allRaces.filter(r => r._baseName === raceValue && r._subraceName);
		},
		[allRaces, raceValue],
	);

	const selectedRaceRecord = raceRecords.find(r => r.name === values.race) || null;
	const previewRaceRecord = raceRecords.find(r => r.name === previewKey) || selectedRaceRecord;

	const detailEntity = useMemo(() => {
		if (!previewRaceRecord) {
			return null;
		}
		if (values.subrace) {
			const subrace = previewRaceRecord.subraces.find(sr => sr._subraceName === values.subrace);
			if (subrace) {
				return subrace;
			}
		}
		return previewRaceRecord.baseRace;
	}, [previewRaceRecord, values.subrace]);

	const detailHtml = useMemo(() => {
		return _getRenderedDetailHtml(detailEntity);
	}, [detailEntity]);

	const handleSelectRace = (name) => {
		form.change("race", name);
		form.change("subrace", "");
		setPreviewKey(name);
	};

	const handleSelectSubrace = (subraceName) => {
		form.change("subrace", subraceName);
	};

	return (
		<Paper variant="outlined" sx={{p: 2}}>
			<Typography variant="h6" gutterBottom>Race Selection</Typography>
			<Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
				{racesLoading ? "Loading race cards..." : `${filteredRaces.length} race cards`}
			</Typography>

			<Grid container spacing={2}>
				<Grid size={{xs: 12, md: 6}}>
					<Stack spacing={2} sx={{minWidth: 0}}>
						<TextField
							label="Search races"
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
								height: "clamp(300px, 50vh, 460px)",
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
							{racesLoading && (
								<Typography variant="body2" color="text.secondary">Loading race data...</Typography>
							)}

							{filteredRaces.map(record => {
								const isSelected = values.race === record.name;
								return (
									<Card
										key={record.name}
										variant="outlined"
										sx={{
											flexShrink: 0,
											borderColor: isSelected ? "primary.main" : "divider",
											backgroundColor: isSelected ? "action.selected" : "background.paper",
										}}
									>
										<CardActionArea
											onClick={() => {
												handleSelectRace(record.name);
											}}
										>
											<CardContent sx={{pb: "8px !important"}}>
												<Stack direction="row" justifyContent="space-between" alignItems="center">
													<Typography variant="subtitle1">{record.name}</Typography>
													<Chip size="small" label={_getSourceLabel(record.source)} />
												</Stack>
												<Typography variant="body2" color="text.secondary">
													Subraces: {record.subraces.length}
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								);
							})}

							{!racesLoading && filteredRaces.length === 0 && (
								<Typography variant="body2" color="text.secondary">No races match your filters.</Typography>
							)}
						</Stack>

						{subraces.length > 0 && (
							<>
								<Divider />
								<Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
									{subraces.map(sr => {
										const isSelected = values.subrace === sr._subraceName;
										return (
											<Chip
												key={sr._subraceName}
												label={sr._subraceName}
												color={isSelected ? "primary" : "default"}
												variant={isSelected ? "filled" : "outlined"}
												onClick={() => {
													handleSelectSubrace(sr._subraceName);
												}}
											/>
										);
									})}
								</Stack>
							</>
						)}
					</Stack>
				</Grid>

				<Grid size={{xs: 12, md: 6}}>
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
						{detailEntity ? (
							<div dangerouslySetInnerHTML={{__html: detailHtml}} />
						) : (
							<Typography variant="body2" color="text.secondary">
								Pick a race card to preview detailed content.
							</Typography>
						)}
					</Paper>
				</Grid>
			</Grid>

			<Stack direction="row" justifyContent="space-between" sx={{mt: 2}}>
				<Button type="button" variant="outlined" onClick={onBack}>
					Back
				</Button>
				<Button type="button" variant="contained" onClick={onNext}>
					Next
				</Button>
			</Stack>
		</Paper>
	);
}
