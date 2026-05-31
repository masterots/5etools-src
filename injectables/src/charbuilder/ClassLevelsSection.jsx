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
const DEMO_BATTLE_MASTER_MANEUVERS = [
	"Disarming Attack",
	"Menacing Attack",
	"Precision Attack",
	"Riposte",
	"Trip Attack",
];
const DEMO_KNOWLEDGE_CLERIC_SKILLS = [
	"Arcana",
	"History",
	"Nature",
	"Religion",
];
const ABILITY_SCORE_KEYS = ["str", "dex", "con", "int", "wis", "cha"];
const ABILITY_SCORE_LABELS = {
	str: "STR",
	dex: "DEX",
	con: "CON",
	int: "INT",
	wis: "WIS",
	cha: "CHA",
};

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
	return parts.join(" | ") || "No summary available";
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

function _getClassFeatureUid (featureRef) {
	if (!featureRef) return "";
	if (typeof featureRef === "string") return featureRef;
	if (featureRef.classFeature) return featureRef.classFeature;
	return "";
}

function _getParsedClassFeatureRef ({featureRef, fallbackClassName = "", fallbackClassSource = "", fallbackLevel = 1}) {
	if (!featureRef) return null;

	const uid = _getClassFeatureUid(featureRef);
	if (uid) {
		return _parseClassFeatureUid(uid, fallbackClassSource, fallbackLevel);
	}

	if (typeof featureRef !== "object") {
		return null;
	}

	const name = featureRef._displayName || featureRef.name || "";
	const className = featureRef.className || fallbackClassName || "";
	const classSource = featureRef.classSource || fallbackClassSource || "";
	const level = _toIntInRange({value: featureRef.level, min: 1, max: 20, fallback: fallbackLevel});

	if (!name || !className) {
		return null;
	}

	return {
		uid: `${name}|${className}|${classSource}|${level}`,
		name,
		className,
		classSource,
		level,
	};
}

function _parseClassFeatureUid (uid, fallbackClassSource = "", fallbackLevel = 1) {
	const [name = "", className = "", classSourceRaw = "", levelRaw = ""] = uid.split("|");
	const level = _toIntInRange({value: levelRaw, min: 1, max: 20, fallback: fallbackLevel});
	return {
		uid,
		name,
		className,
		classSource: classSourceRaw || fallbackClassSource || "",
		level,
	};
}

function _flattenClassFeatureRefs (classFeatures) {
	if (!Array.isArray(classFeatures)) return [];

	const out = [];
	classFeatures.forEach((entryAtLevel, ix) => {
		const fallbackLevel = ix + 1;
		const entries = Array.isArray(entryAtLevel) ? entryAtLevel : [entryAtLevel];
		entries.forEach(entry => {
			out.push({entry, fallbackLevel});
		});
	});

	return out;
}

function _getFeatureDefinition ({parsedUid, allClassFeatures}) {
	return allClassFeatures.find(it => (
		it.name === parsedUid.name
		&& it.className === parsedUid.className
		&& (it.classSource || "") === (parsedUid.classSource || "")
		&& _toIntInRange({value: it.level, min: 1, max: 20, fallback: 1}) === parsedUid.level
	)) || null;
}

function _toChoiceId ({classKey, featureUid, key}) {
	return `${classKey}__${featureUid}__${key}`;
}

function _getFeatureChoicesFromEntries ({classKey, featureUid, featureDef}) {
	const entries = featureDef?.entries || [];
	const optionsBlocks = entries.filter(it => it?.type === "options" && Array.isArray(it.entries));

	return optionsBlocks
		.map((block, ix) => {
			const options = block.entries
				.map(entry => entry?.optionalfeature)
				.filter(Boolean)
				.map(opt => opt.split("|")[0]);

			if (!options.length) return null;

			return {
				id: _toChoiceId({classKey, featureUid, key: `option_${ix}`}),
				featureUid,
				label: `Choose ${block.count || 1}`,
				options,
				count: _toIntInRange({value: block.count || 1, min: 1, max: 6, fallback: 1}),
			};
		})
		.filter(Boolean);
}

function _isFeatureChoiceComplete ({choice, value}) {
	if (choice.count > 1) {
		return Array.isArray(value) && value.length >= Math.min(choice.count, choice.options.length);
	}
	return !!value;
}

function _isAsiSelectionComplete (selection) {
	const total = ABILITY_SCORE_KEYS.reduce((sum, key) => {
		return sum + _toIntInRange({value: selection?.[key] ?? 0, min: 0, max: 2, fallback: 0});
	}, 0);
	return total >= 2;
}

function _getFeatureDescriptionHtml ({featureDef, parsed}) {
	if (!featureDef) {
		return `<p>${parsed?.name || "Feature"}</p><p>No details available yet.</p>`;
	}

	try {
		const renderer = window.Renderer?.get?.();
		if (renderer?.render && featureDef.entries?.length) {
			return renderer.render({type: "entries", entries: featureDef.entries});
		}
	} catch {
		// Fall through to text fallback.
	}

	const text = featureDef.entries ? JSON.stringify(featureDef.entries).slice(0, 2000) : "No details available.";
	return `<p>${parsed?.name || featureDef.name || "Feature"}</p><p>${text}</p>`;
}

function _getSubclassOptions ({selectedClassMeta, allSubclasses}) {
	if (!selectedClassMeta?.name) return [];
	const matches = allSubclasses
		.filter(sc => sc.className === selectedClassMeta.name && (sc.classSource || "") === (selectedClassMeta.source || ""))
		.map(sc => sc.shortName || sc.name)
		.filter(Boolean);
    return [...new Set(matches)].sort((a, b) => a.localeCompare(b));
}

function FeatureChoiceControl ({choice, value, onChange, menuProps}) {
	if (choice.count > 1) {
		const selected = Array.isArray(value) ? value : [];
		return (
			<FormControl size="small" sx={{minWidth: 220}}>
				<InputLabel>{choice.label}</InputLabel>
				<Select
					multiple
					label={choice.label}
					value={selected}
					MenuProps={menuProps}
					onChange={(evt) => {
						const next = Array.isArray(evt.target.value) ? evt.target.value.slice(0, choice.count) : [];
						onChange(next);
					}}
					inputProps={{"aria-label": choice.label}}
				>
					{choice.options.map(opt => (
						<MenuItem key={opt} value={opt}>{opt}</MenuItem>
					))}
				</Select>
			</FormControl>
		);
	}

	return (
		<FormControl size="small" sx={{minWidth: 220}}>
			<InputLabel>{choice.label}</InputLabel>
			<Select
				label={choice.label}
				value={value || ""}
				MenuProps={menuProps}
				onChange={(evt) => {
					onChange(evt.target.value || "");
				}}
			>
				{choice.options.map(opt => (
					<MenuItem key={opt} value={opt}>{opt}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

function AbilityScoreImprovementControl ({value, onChange}) {
	const normalized = useMemo(() => {
		const out = {};
		ABILITY_SCORE_KEYS.forEach(key => {
			out[key] = _toIntInRange({value: value?.[key] ?? 0, min: 0, max: 2, fallback: 0});
		});
		return out;
	}, [value]);

	const totalAllocated = ABILITY_SCORE_KEYS.reduce((acc, key) => acc + (normalized[key] || 0), 0);
	const remaining = Math.max(0, 2 - totalAllocated);

	const handleChange = ({abilityKey, nextRaw}) => {
		const parsed = _toIntInRange({value: nextRaw, min: 0, max: 2, fallback: 0});
		const current = normalized[abilityKey] || 0;
		const maxForAbility = Math.min(2, current + remaining);
		const next = Math.min(parsed, maxForAbility);

		onChange({
			...normalized,
			[abilityKey]: next,
		});
	};

	return (
		<Stack spacing={1}>
			<Typography variant="caption" color={remaining === 0 ? "success.main" : "warning.main"}>
				Allocate 2 points: {remaining === 0 ? "complete" : `${remaining} remaining`}
			</Typography>
			<Grid container spacing={1}>
				{ABILITY_SCORE_KEYS.map(key => (
					<Grid key={key} size={{xs: 6, sm: 4, md: 2}}>
						<TextField
							label={ABILITY_SCORE_LABELS[key]}
							type="number"
							size="small"
							value={normalized[key]}
							inputProps={{min: 0, max: 2}}
							onChange={(evt) => {
								handleChange({abilityKey: key, nextRaw: evt.target.value});
							}}
						/>
					</Grid>
				))}
			</Grid>
		</Stack>
	);
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

export function ClassLevelsSection ({allClasses, allClassFeatures = [], allSubclasses = [], classesLoading, overlayContainer = null, onBack, onNext, showNavigation = true}) {
	const form = useForm();
	const {values} = useFormState({subscription: {values: true}});
	const [search, setSearch] = React.useState("");
	const [sourceFilter, setSourceFilter] = React.useState("all");
	const [previewClassKey, setPreviewClassKey] = React.useState("");
	const [pendingClassLevel, setPendingClassLevel] = React.useState(1);
	const [expandedClassKey, setExpandedClassKey] = React.useState("");
	const [isFiltersExpanded, setIsFiltersExpanded] = React.useState(false);
	const featureChoicesByClass = values.classFeatureChoicesByClass || {};
	const asiByClass = values.classAsiByClass || {};
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

	const setFeatureChoiceValue = ({classKey, choiceId, value}) => {
		form.change(`classFeatureChoicesByClass.${classKey}.${choiceId}`, value);
	};

	const setAsiValue = ({classKey, featureUid, value}) => {
		form.change(`classAsiByClass.${classKey}.${featureUid}`, value);
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

	const rowFeaturesMeta = useMemo(() => {
		return rows.map(row => {
			const classKey = _getClassKey({name: row.className, source: row.classSource});
			const level = _toIntInRange({value: row.level, min: 1, max: 20, fallback: 1});
			const selectedClassMeta = allClasses.find(cls => _getClassKey({name: cls.name, source: cls.source}) === classKey) || null;
			if (!selectedClassMeta) {
				return {classKey, row, selectedClassMeta: null, level, features: [], choices: []};
			}

			const classFeaturesFromDefinitions = allClassFeatures
				.filter(it => (
					it.className === selectedClassMeta.name
					&& (it.classSource || selectedClassMeta.source || "") === (selectedClassMeta.source || "")
					&& _toIntInRange({value: it.level, min: 1, max: 20, fallback: 1}) <= level
				))
				.sort((a, b) => {
					const lvlA = _toIntInRange({value: a.level, min: 1, max: 20, fallback: 1});
					const lvlB = _toIntInRange({value: b.level, min: 1, max: 20, fallback: 1});
					if (lvlA !== lvlB) return lvlA - lvlB;
					return (a.name || "").localeCompare(b.name || "");
				})
				.map(featureDef => {
					const parsed = {
						uid: `${featureDef.name}|${featureDef.className}|${featureDef.classSource || selectedClassMeta.source || ""}|${featureDef.level}`,
						name: featureDef.name || "Feature",
						className: featureDef.className || selectedClassMeta.name,
						classSource: featureDef.classSource || selectedClassMeta.source || "",
						level: _toIntInRange({value: featureDef.level, min: 1, max: 20, fallback: 1}),
					};
					return {parsed, featureDef};
				});

			const classFeaturesFromDefinitionsByName = allClassFeatures
				.filter(it => (
					it.className === selectedClassMeta.name
					&& _toIntInRange({value: it.level, min: 1, max: 20, fallback: 1}) <= level
				))
				.sort((a, b) => {
					const lvlA = _toIntInRange({value: a.level, min: 1, max: 20, fallback: 1});
					const lvlB = _toIntInRange({value: b.level, min: 1, max: 20, fallback: 1});
					if (lvlA !== lvlB) return lvlA - lvlB;
					return (a.name || "").localeCompare(b.name || "");
				})
				.map(featureDef => {
					const parsed = {
						uid: `${featureDef.name}|${featureDef.className}|${featureDef.classSource || selectedClassMeta.source || ""}|${featureDef.level}`,
						name: featureDef.name || "Feature",
						className: featureDef.className || selectedClassMeta.name,
						classSource: featureDef.classSource || selectedClassMeta.source || "",
						level: _toIntInRange({value: featureDef.level, min: 1, max: 20, fallback: 1}),
					};
					return {parsed, featureDef};
				});

			const flattenedClassFeatureRefs = _flattenClassFeatureRefs(selectedClassMeta.classFeatures || []);
			const classFeaturesFromRefs = flattenedClassFeatureRefs
				.map(({entry, fallbackLevel}) => ({
					entry,
					parsed: _getParsedClassFeatureRef({
						featureRef: entry,
						fallbackClassName: selectedClassMeta.name,
						fallbackClassSource: selectedClassMeta.source,
						fallbackLevel,
					}),
				}))
				.map(({entry, parsed}) => {
					if (!parsed) return null;
					const featureDef = entry && typeof entry === "object" && Array.isArray(entry.entries)
						? entry
						: _getFeatureDefinition({parsedUid: parsed, allClassFeatures});
					return {parsed, featureDef};
				})
				.filter(Boolean)
				.filter(({parsed}) => parsed.level <= level);

			const classFeatures = classFeaturesFromDefinitions.length
				? classFeaturesFromDefinitions
				: classFeaturesFromDefinitionsByName.length
					? classFeaturesFromDefinitionsByName
					: classFeaturesFromRefs;

			const featureResolutionStrategy = classFeaturesFromDefinitions.length
				? "definitions-exact"
				: classFeaturesFromDefinitionsByName.length
					? "definitions-name-only"
					: "class-feature-refs";

			const baseChoices = classFeatures.flatMap(({parsed, featureDef}) => _getFeatureChoicesFromEntries({classKey, featureUid: parsed.uid, featureDef}));

			const subclassOptions = _getSubclassOptions({selectedClassMeta, allSubclasses});
			const subclassFeature = classFeatures.find(({parsed}) => /archetype|subclass|domain/i.test(parsed.name));
			if (subclassFeature && subclassOptions.length) {
				baseChoices.push({
					id: _toChoiceId({classKey, featureUid: subclassFeature.parsed.uid, key: "subclass"}),
					featureUid: subclassFeature.parsed.uid,
					label: /domain/i.test(subclassFeature.parsed.name) ? "Divine Domain" : "Subclass",
					options: subclassOptions,
					count: 1,
				});
			}

			const subclassChoiceId = subclassFeature
				? _toChoiceId({classKey, featureUid: subclassFeature.parsed.uid, key: "subclass"})
				: null;
			const selectedSubclass = subclassChoiceId ? (featureChoicesByClass[classKey]?.[subclassChoiceId] || "") : "";

			if (selectedClassMeta.name === "Fighter" && /Battle Master/i.test(selectedSubclass) && level >= 3) {
				baseChoices.push({
					id: _toChoiceId({classKey, featureUid: subclassFeature?.parsed.uid || `${selectedClassMeta.name}|${selectedClassMeta.source}|3`, key: "maneuver_pick"}),
					featureUid: subclassFeature?.parsed.uid || `${selectedClassMeta.name}|${selectedClassMeta.source}|3`,
					label: "Battle Master Maneuvers (Demo)",
					options: DEMO_BATTLE_MASTER_MANEUVERS,
					count: Math.min(3, level >= 7 ? 4 : 3),
				});
			}

			if (selectedClassMeta.name === "Cleric" && /Knowledge/i.test(selectedSubclass) && level >= 1) {
				baseChoices.push({
					id: _toChoiceId({classKey, featureUid: subclassFeature?.parsed.uid || `${selectedClassMeta.name}|${selectedClassMeta.source}|1`, key: "knowledge_skill"}),
					featureUid: subclassFeature?.parsed.uid || `${selectedClassMeta.name}|${selectedClassMeta.source}|1`,
					label: "Knowledge Domain Skill (Demo)",
					options: DEMO_KNOWLEDGE_CLERIC_SKILLS,
					count: 1,
				});
			}

			const abilityScoreImprovements = classFeatures
				.filter(({parsed}) => /ability score improvement/i.test(parsed.name || ""))
				.map(({parsed}) => ({
					id: _toChoiceId({classKey, featureUid: parsed.uid, key: "asi"}),
					featureUid: parsed.uid,
					label: parsed.name,
					level: parsed.level,
				}));

			return {
				classKey,
				row,
				selectedClassMeta,
				level,
				features: classFeatures,
				choices: baseChoices,
				abilityScoreImprovements,
				debug: {
					className: selectedClassMeta.name || "",
					classSource: selectedClassMeta.source || "",
					level,
					featureResolutionStrategy,
					allClassFeaturesCount: allClassFeatures.length,
					allSubclassesCount: allSubclasses.length,
					classFeaturesFromDefinitionsCount: classFeaturesFromDefinitions.length,
					classFeaturesFromDefinitionsByNameCount: classFeaturesFromDefinitionsByName.length,
					classFeaturesFromRefsCount: classFeaturesFromRefs.length,
					resolvedFeaturesCount: classFeatures.length,
					flattenedClassFeatureRefsCount: flattenedClassFeatureRefs.length,
					rawClassFeatureRefsCount: Array.isArray(selectedClassMeta.classFeatures) ? selectedClassMeta.classFeatures.length : 0,
					sampleResolvedFeatures: classFeatures.slice(0, 5).map(it => `Lv ${it.parsed.level} ${it.parsed.name}`),
					sampleRefFeatures: classFeaturesFromRefs.slice(0, 5).map(it => `Lv ${it.parsed.level} ${it.parsed.name}`),
				},
			};
		});
	}, [allClassFeatures, allClasses, allSubclasses, featureChoicesByClass, rows]);

	const missingRequiredChoices = useMemo(() => {
		return rowFeaturesMeta.reduce((acc, rowMeta) => {
			const classChoices = featureChoicesByClass[rowMeta.classKey] || {};
			const missing = rowMeta.choices.filter(choice => !_isFeatureChoiceComplete({choice, value: classChoices[choice.id]}));

			const asiSelections = asiByClass[rowMeta.classKey] || {};
			const missingAsi = (rowMeta.abilityScoreImprovements || []).filter(asi => !_isAsiSelectionComplete(asiSelections[asi.featureUid] || {}));

			return acc + missing.length + missingAsi.length;
		}, 0);
	}, [asiByClass, featureChoicesByClass, rowFeaturesMeta]);

	return (
		<Paper variant="outlined" sx={{p: 2}}>
			<Typography variant="h6" gutterBottom>Classes and Levels</Typography>
			<Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
				Total class levels: {totalLevel} / 20
			</Typography>
			<Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
				{classesLoading ? "Loading class cards..." : `${filteredClasses.length} class cards`}
			</Typography>
			{!showNavigation && rows.length > 0 ? (
				<Typography variant="body2" color={missingRequiredChoices ? "warning.main" : "success.main"} sx={{mb: 2}}>
					{missingRequiredChoices ? `${missingRequiredChoices} feature choices still need selection.` : "All visible feature choices selected. Ready to continue testing."}
				</Typography>
			) : null}

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
																<LevelSelect
																	label="Level"
																	minWidth={120}
																	value={currentLevel}
																	maxLevel={maxForRow}
																	menuProps={levelSelectProps}
																	onChange={(nextValue) => {
																		updateClassLevel({classKey, levelRaw: nextValue});
																	}}
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
										const currentLevel = _toIntInRange({value: row.level, min: 1, max: 20, fallback: 1});
										const maxForRow = Math.max(1, 20 - (totalLevel - currentLevel));
										const rowMeta = rowFeaturesMeta.find(it => it.classKey === classKey);
										const classChoices = featureChoicesByClass[classKey] || {};
										const asiSelections = asiByClass[classKey] || {};

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
																			<LevelSelect
																				label="Level"
																				minWidth={140}
																				value={currentLevel}
																				maxLevel={maxForRow}
																				menuProps={levelSelectProps}
																				onChange={(nextValue) => {
																					updateClassLevel({classKey, levelRaw: nextValue});
																				}}
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
																<Divider />
																<Stack spacing={1}>
																	<Typography variant="subtitle2">Level Features</Typography>
																	{rowMeta?.features?.length ? rowMeta.features.map(({parsed, featureDef}) => {
																		const featureChoices = (rowMeta.choices || []).filter(choice => choice.featureUid === parsed.uid);
																		const asiItem = (rowMeta.abilityScoreImprovements || []).find(asi => asi.featureUid === parsed.uid) || null;
																		const hasMissingChoice = featureChoices.some(choice => !_isFeatureChoiceComplete({choice, value: classChoices[choice.id]}));
																		const hasMissingAsi = asiItem ? !_isAsiSelectionComplete(asiSelections[asiItem.featureUid] || {}) : false;
																		const isMissingRequiredSelection = hasMissingChoice || hasMissingAsi;
																		const descriptionHtml = _getFeatureDescriptionHtml({featureDef, parsed});

																		return (
																			<Accordion key={`${classKey}__${parsed.uid}`} disableGutters defaultExpanded={isMissingRequiredSelection}>
																				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
																					<Stack direction="row" spacing={1} alignItems="center" useFlexGap flexWrap="wrap" sx={{width: "100%", pr: 1}}>
																						<Chip size="small" label={`Lv ${parsed.level}`} color="primary" variant="outlined" />
																						<Typography variant="body2">{parsed.name}</Typography>
																						{isMissingRequiredSelection ? <Chip size="small" color="warning" label="Selection Needed" /> : null}
																					</Stack>
																				</AccordionSummary>
																				<AccordionDetails>
																					<Stack spacing={1.25}>
																						<Box
																							sx={{
																							"& p": {m: 0, mb: 1},
																							"& p:last-child": {mb: 0},
																							"& .ve-muted": {color: "text.secondary"},
																						}}
																						>
																							<div dangerouslySetInnerHTML={{__html: descriptionHtml}} />
																						</Box>

																						{featureChoices.length ? (
																							<Stack spacing={1}>
																								<Typography variant="subtitle2">Choices</Typography>
																								{featureChoices.map(choice => (
																									<FeatureChoiceControl
																										key={choice.id}
																										choice={choice}
																										value={classChoices[choice.id]}
																										menuProps={levelSelectProps}
																										onChange={(value) => {
																											setFeatureChoiceValue({classKey, choiceId: choice.id, value});
																										}}
																									/>
																								))}
																							</Stack>
																						) : null}

																						{asiItem ? (
																							<Stack spacing={1}>
																								<Typography variant="subtitle2">Ability Score Improvement</Typography>
																								<AbilityScoreImprovementControl
																									value={asiSelections[asiItem.featureUid]}
																									onChange={(value) => {
																										setAsiValue({classKey, featureUid: asiItem.featureUid, value});
																									}}
																								/>
																							</Stack>
																						) : null}
																					</Stack>
																				</AccordionDetails>
																			</Accordion>
																		);
																	}) : (
																		<Typography variant="body2" color="text.secondary">No features found for current class source.</Typography>
																	)}
																</Stack>
																{!showNavigation && rowMeta?.debug ? (
																	<Box
																		sx={{
																			p: 1,
																			bgcolor: "action.hover",
																			border: "1px solid",
																			borderColor: "divider",
																			borderRadius: 1,
																		}}
																	>
																		<Typography variant="caption" sx={{display: "block", fontWeight: 700}}>Debug Feature Resolver</Typography>
																		<Typography variant="caption" sx={{display: "block", fontFamily: "monospace"}}>strategy: {rowMeta.debug.featureResolutionStrategy}</Typography>
																		<Typography variant="caption" sx={{display: "block", fontFamily: "monospace"}}>class: {rowMeta.debug.className} | source: {rowMeta.debug.classSource} | level: {rowMeta.debug.level}</Typography>
																		<Typography variant="caption" sx={{display: "block", fontFamily: "monospace"}}>counts: allClassFeatures={rowMeta.debug.allClassFeaturesCount}, refs(raw)={rowMeta.debug.rawClassFeatureRefsCount}, refs(flat)={rowMeta.debug.flattenedClassFeatureRefsCount}, exact={rowMeta.debug.classFeaturesFromDefinitionsCount}, nameOnly={rowMeta.debug.classFeaturesFromDefinitionsByNameCount}, parsedRefs={rowMeta.debug.classFeaturesFromRefsCount}, resolved={rowMeta.debug.resolvedFeaturesCount}</Typography>
																		<Typography variant="caption" sx={{display: "block", fontFamily: "monospace"}}>sampleResolved: {rowMeta.debug.sampleResolvedFeatures.join(" | ") || "(none)"}</Typography>
																		<Typography variant="caption" sx={{display: "block", fontFamily: "monospace"}}>sampleRefs: {rowMeta.debug.sampleRefFeatures.join(" | ") || "(none)"}</Typography>
																	</Box>
																) : null}
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
