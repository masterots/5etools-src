import React, {useMemo, useState} from "react";
import {Form} from "react-final-form";
import EditIcon from "@mui/icons-material/Edit";
import {
	Box,
	Button,
	Chip,
	Grid,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import {BasicsSection} from "./BasicsSection.jsx";
import {RaceSection} from "./RaceSection.jsx";
import {ClassLevelsSection} from "./ClassLevelsSection.jsx";
import {AbilityScoresSection} from "./AbilityScoresSection.jsx";
import {CHARBUILDER_INITIAL_VALUES} from "./charbuilder-model.js";
import {useCharbuilderReferenceData} from "./useCharbuilderReferenceData.js";
import {
	formatSignedNumber,
	getAbilityModifier,
	getEffectiveAbilityScore,
	getProficiencyBonusFromLevel,
	getTotalCharacterLevel,
} from "./charbuilder-calculations.js";

const EDITOR_BASICS = "basics";
const EDITOR_RACE = "race";
const EDITOR_CLASSES = "classes";
const EDITOR_ABILITIES = "abilities";

const ABILITIES = [
	{key: "str", label: "STR"},
	{key: "dex", label: "DEX"},
	{key: "con", label: "CON"},
	{key: "int", label: "INT"},
	{key: "wis", label: "WIS"},
	{key: "cha", label: "CHA"},
];

function SectionCard ({title, subtitle, onEdit, children}) {
	return (
		<Paper variant="outlined" sx={{p: 2, borderRadius: 3}}>
			<Stack spacing={1.5}>
				<Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
					<Box>
						<Typography variant="h6">{title}</Typography>
						{subtitle ? <Typography variant="body2" color="text.secondary">{subtitle}</Typography> : null}
					</Box>
					<Button
						type="button"
						variant="contained"
						startIcon={<EditIcon />}
						onClick={onEdit}
						sx={{minHeight: 44, px: 2, borderRadius: 2, flexShrink: 0}}
					>
						Edit
					</Button>
				</Stack>
				{children}
			</Stack>
		</Paper>
	);
}

function SectionEditorPanel ({title, onCancel, onSave, children}) {
	return (
		<Paper variant="outlined" sx={{p: 2, borderRadius: 3}}>
			<Stack spacing={2}>
				<Stack
					direction={{xs: "column", sm: "row"}}
					alignItems={{xs: "flex-start", sm: "center"}}
					justifyContent="space-between"
					spacing={1}
				>
					<Typography variant="h6">{title}</Typography>
					<Stack direction="row" spacing={1}>
						<Button type="button" variant="outlined" onClick={onCancel} sx={{minHeight: 44}}>
							Cancel
						</Button>
						<Button type="button" variant="contained" onClick={onSave} sx={{minHeight: 44}}>
							Save
						</Button>
					</Stack>
				</Stack>
				{children}
			</Stack>
		</Paper>
	);
}

function _cloneFormValues (values) {
	if (!values) {
		return {};
	}
	try {
		return JSON.parse(JSON.stringify(values));
	} catch {
		return {...values};
	}
}

function BasicsSummary ({values}) {
	const rows = [
		["Character", values.charName || "Not set"],
		["Player", values.playerName || "Not set"],
		["Background", values.background || "Not set"],
	];

	return (
		<Stack spacing={0.75}>
			{rows.map(([label, value]) => (
				<Stack key={label} direction="row" justifyContent="space-between" spacing={1}>
					<Typography variant="body2" color="text.secondary">{label}</Typography>
					<Typography variant="body2" fontWeight={600} textAlign="right">{value}</Typography>
				</Stack>
			))}
		</Stack>
	);
}

function RaceSummary ({values}) {
	return (
		<Stack spacing={0.75}>
			<Stack direction="row" justifyContent="space-between" spacing={1}>
				<Typography variant="body2" color="text.secondary">Race</Typography>
				<Typography variant="body2" fontWeight={600} textAlign="right">{values.race || "Not set"}</Typography>
			</Stack>
			<Stack direction="row" justifyContent="space-between" spacing={1}>
				<Typography variant="body2" color="text.secondary">Subrace</Typography>
				<Typography variant="body2" fontWeight={600} textAlign="right">{values.subrace || "None"}</Typography>
			</Stack>
		</Stack>
	);
}

function ClassesSummary ({values, totalLevel, proficiencyBonus}) {
	const rows = values.classLevels?.filter(it => it?.className) || [];

	return (
		<Stack spacing={1}>
			<Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
				<Chip label={`Total Level ${totalLevel}`} color="primary" />
				<Chip label={`Proficiency ${formatSignedNumber(proficiencyBonus)}`} color="secondary" variant="outlined" />
			</Stack>
			{rows.length
				? rows.map((row) => (
					<Stack key={`${row.className}__${row.classSource || "src"}`} direction="row" justifyContent="space-between" spacing={1}>
						<Typography variant="body2" color="text.secondary">{row.className}</Typography>
						<Typography variant="body2" fontWeight={600}>Level {row.level}</Typography>
					</Stack>
				))
				: <Typography variant="body2" color="text.secondary">No classes selected.</Typography>}
		</Stack>
	);
}

function AbilitiesSummary ({values}) {
	return (
		<Grid container spacing={1}>
			{ABILITIES.map(({key, label}) => {
				const score = getEffectiveAbilityScore({values, abilityKey: key});
				const mod = getAbilityModifier(score);

				return (
					<Grid key={key} size={{xs: 6, sm: 4}}>
						<Paper variant="outlined" sx={{p: 1.25, borderRadius: 2}}>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Typography variant="body2" color="text.secondary">{label}</Typography>
								<Typography variant="body2" fontWeight={700}>{formatSignedNumber(mod)}</Typography>
							</Stack>
							<Typography variant="h6" lineHeight={1.2}>{score}</Typography>
						</Paper>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default function CharBuilderSheetApp ({hostBridge}) {
	const {
		allRaces,
		racesLoading,
		allBackgrounds,
		backgroundsLoading,
		allClasses,
		allClassFeatures,
		allSubclasses,
		classesLoading,
	} = useCharbuilderReferenceData();

	const [activeEditor, setActiveEditor] = useState(null);
	const [editorSnapshot, setEditorSnapshot] = useState(null);
	const overlayContainer = useMemo(() => {
		const shadowRoot = hostBridge?.getShadowRoot?.();
		if (!shadowRoot?.querySelector) {
			return null;
		}
		return shadowRoot.querySelector("[data-react-root]") || null;
	}, [hostBridge]);

	const dialogTitle = useMemo(() => {
		switch (activeEditor) {
			case EDITOR_BASICS: return "Edit Basics";
			case EDITOR_RACE: return "Edit Race";
			case EDITOR_CLASSES: return "Edit Classes and Levels";
			case EDITOR_ABILITIES: return "Edit Ability Scores";
			default: return "Edit Section";
		}
	}, [activeEditor]);

	const startEdit = (editor, values) => {
		setEditorSnapshot(_cloneFormValues(values));
		setActiveEditor(editor);
	};

	const handleCancelEdit = (form) => {
		if (editorSnapshot) {
			form.initialize(editorSnapshot);
		}
		setActiveEditor(null);
		setEditorSnapshot(null);
	};

	const handleSaveEdit = () => {
		setActiveEditor(null);
		setEditorSnapshot(null);
	};

	return (
		<Form
			initialValues={CHARBUILDER_INITIAL_VALUES}
			destroyOnUnregister={false}
			keepDirtyOnReinitialize
			onSubmit={() => {}}
			render={({handleSubmit, form, values}) => {
				const totalLevel = getTotalCharacterLevel(values.classLevels);
				const proficiencyBonus = getProficiencyBonusFromLevel(totalLevel);
				const isEditing = !!activeEditor;

				return (
					<form onSubmit={handleSubmit}>
						<Stack spacing={2} sx={{pb: 3}}>
							<Paper variant="outlined" sx={{p: 2, borderRadius: 3}}>
								<Stack spacing={1.5}>
									<Stack
										direction={{xs: "column", sm: "row"}}
										alignItems={{xs: "flex-start", sm: "center"}}
										justifyContent="space-between"
										spacing={1}
									>
										<Box>
											<Typography variant="h5">Character Sheet Builder</Typography>
											<Typography variant="body2" color="text.secondary">
												Touch-first editing for phones/tablets with in-page section editing.
											</Typography>
										</Box>
										<Button
											type="button"
											variant="outlined"
											onClick={() => form.reset()}
											sx={{minHeight: 44}}
										>
											Reset Form
										</Button>
									</Stack>
									<Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
										<Chip label={`Level ${totalLevel || 1}`} color="primary" />
										<Chip label={`Proficiency ${formatSignedNumber(proficiencyBonus)}`} variant="outlined" color="secondary" />
									</Stack>
								</Stack>
							</Paper>

							{!isEditing ? (
								<Grid container spacing={2}>
									<Grid size={{xs: 12, md: 6}}>
										<SectionCard
											title="Basics"
											subtitle="Character identity"
											onEdit={() => startEdit(EDITOR_BASICS, values)}
										>
											<BasicsSummary values={values} />
										</SectionCard>
									</Grid>

									<Grid size={{xs: 12, md: 6}}>
										<SectionCard
											title="Race"
											subtitle="Species and lineage"
											onEdit={() => startEdit(EDITOR_RACE, values)}
										>
											<RaceSummary values={values} />
										</SectionCard>
									</Grid>

									<Grid size={{xs: 12, md: 6}}>
										<SectionCard
											title="Classes"
											subtitle="Class and level allocation"
											onEdit={() => startEdit(EDITOR_CLASSES, values)}
										>
											<ClassesSummary values={values} totalLevel={totalLevel} proficiencyBonus={proficiencyBonus} />
										</SectionCard>
									</Grid>

									<Grid size={{xs: 12, md: 6}}>
										<SectionCard
											title="Ability Scores"
											subtitle="Scores and modifiers"
											onEdit={() => startEdit(EDITOR_ABILITIES, values)}
										>
											<AbilitiesSummary values={values} />
										</SectionCard>
									</Grid>
								</Grid>
							) : (
								<SectionEditorPanel
									title={dialogTitle}
									onCancel={() => handleCancelEdit(form)}
									onSave={handleSaveEdit}
								>
									{activeEditor === EDITOR_BASICS ? (
										<BasicsSection
											backgrounds={allBackgrounds}
											backgroundsLoading={backgroundsLoading}
											overlayContainer={overlayContainer}
											showNavigation={false}
										/>
									) : null}

									{activeEditor === EDITOR_RACE ? (
										<RaceSection
											allRaces={allRaces}
											racesLoading={racesLoading}
											raceValue={values.race}
											onBack={() => {}}
											onNext={() => {}}
											showNavigation={false}
										/>
									) : null}

									{activeEditor === EDITOR_CLASSES ? (
										<ClassLevelsSection
											allClasses={allClasses}
											allClassFeatures={allClassFeatures}
											allSubclasses={allSubclasses}
											classesLoading={classesLoading}
											overlayContainer={overlayContainer}
											onBack={() => {}}
											onNext={() => {}}
											showNavigation={false}
										/>
									) : null}

									{activeEditor === EDITOR_ABILITIES ? (
										<AbilityScoresSection values={values} showNavigation={false} />
									) : null}
								</SectionEditorPanel>
							)}
						</Stack>
					</form>
				);
			}}
		/>
	);
}
