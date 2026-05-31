import React, {useEffect, useState} from "react";
import {Form} from "react-final-form";
import {Box, Button, Stack, Typography} from "@mui/material";
import {BasicsSection} from "./BasicsSection.jsx";
import {RaceSection} from "./RaceSection.jsx";
import {ClassLevelsSection} from "./ClassLevelsSection.jsx";
import {AbilityScoresSection} from "./AbilityScoresSection.jsx";

const STEP_BASICS = 0;
const STEP_RACE = 1;
const STEP_CLASSES = 2;
const STEP_ABILITY_SCORES = 3;

const INITIAL_VALUES = {
	charName: "",
	playerName: "",
	race: "",
	subrace: "",
	background: "",
	classLevels: [],
	str: 10,
	dex: 10,
	con: 10,
	int: 10,
	wis: 10,
	cha: 10,
};

export default function CharBuilder () {
	const [step, setStep] = useState(STEP_BASICS);
	const [allRaces, setAllRaces] = useState([]);
	const [racesLoading, setRacesLoading] = useState(true);
	const [allBackgrounds, setAllBackgrounds] = useState([]);
	const [backgroundsLoading, setBackgroundsLoading] = useState(true);
	const [allClasses, setAllClasses] = useState([]);
	const [classesLoading, setClassesLoading] = useState(true);

	useEffect(() => {
		const load = async () => {
			const dataUtil = window.DataUtil;
			if (!dataUtil) {
				setRacesLoading(false);
				setBackgroundsLoading(false);
				setClassesLoading(false);
				return;
			}

			try {
				let raceData = null;
				if (dataUtil.race?.loadJSON) {
					try {
						raceData = await dataUtil.race.loadJSON({isAddBaseRaces: false});
					} catch {
						if (dataUtil.race?.loadRawJSON && dataUtil.race?.getPostProcessedSiteJson) {
							const rawRaceData = await dataUtil.race.loadRawJSON();
							raceData = dataUtil.race.getPostProcessedSiteJson(rawRaceData, {isAddBaseRaces: false});
						}
					}
				}
				setAllRaces(raceData?.race ?? []);
			} catch {
				setAllRaces([]);
			} finally {
				setRacesLoading(false);
			}

			try {
				let backgroundData = null;
				if (dataUtil.background?.loadJSON) {
					try {
						backgroundData = await dataUtil.background.loadJSON();
					} catch {
						if (dataUtil.background?.loadRawJSON) {
							backgroundData = await dataUtil.background.loadRawJSON();
						}
					}
				}
				setAllBackgrounds(backgroundData?.background ?? []);
			} catch {
				setAllBackgrounds([]);
			} finally {
				setBackgroundsLoading(false);
			}

			try {
				let classData = null;
				if (dataUtil.class?.loadJSON) {
					try {
						classData = await dataUtil.class.loadJSON();
					} catch {
						if (dataUtil.class?.loadRawJSON) {
							classData = await dataUtil.class.loadRawJSON();
						}
					}
				}
				setAllClasses(classData?.class ?? []);
			} catch {
				setAllClasses([]);
			} finally {
				setClassesLoading(false);
			}
		};

		// window load guarantees all defer/module scripts have run
		if (document.readyState === "complete") {
			load();
		} else {
			window.addEventListener("load", load, {once: true});
		}
	}, []);

	return (
		<Form
			initialValues={INITIAL_VALUES}
			destroyOnUnregister={false}
			keepDirtyOnReinitialize
			onSubmit={() => {}}
			render={({handleSubmit, form, values}) => (
				<form onSubmit={handleSubmit}>
					<Stack spacing={2} sx={{pb: 3}}>
						<Box sx={{display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", mt: 1}}>
							<Button variant="outlined" size="small" onClick={() => form.reset()}>
								Reset Form
							</Button>
							<Typography variant="caption" color="text.secondary" sx={{fontStyle: "italic"}}>
								Client-side only. No save/export yet.
							</Typography>
						</Box>

						<Box sx={{display: step === STEP_BASICS ? "block" : "none"}}>
							<BasicsSection
								backgrounds={allBackgrounds}
								backgroundsLoading={backgroundsLoading}
								onNext={() => {
									setStep(STEP_RACE);
								}}
							/>
						</Box>

						<Box sx={{display: step === STEP_RACE ? "block" : "none"}}>
							<RaceSection
								allRaces={allRaces}
								racesLoading={racesLoading}
								raceValue={values.race}
								onBack={() => {
									setStep(STEP_BASICS);
								}}
								onNext={() => {
									setStep(STEP_CLASSES);
								}}
							/>
						</Box>

						<Box sx={{display: step === STEP_CLASSES ? "block" : "none"}}>
							<ClassLevelsSection
								allClasses={allClasses}
								classesLoading={classesLoading}
								onBack={() => {
									setStep(STEP_RACE);
								}}
								onNext={() => {
									setStep(STEP_ABILITY_SCORES);
								}}
							/>
						</Box>

						<Box sx={{display: step === STEP_ABILITY_SCORES ? "block" : "none"}}>
							<Stack spacing={2}>
								<AbilityScoresSection values={values} />
								<Stack direction="row" justifyContent="space-between">
									<Button
										type="button"
										variant="outlined"
										onClick={() => {
											setStep(STEP_CLASSES);
										}}
									>
										Back
									</Button>
									<Button type="button" variant="contained" disabled>
										Next
									</Button>
								</Stack>
							</Stack>
						</Box>
					</Stack>
				</form>
			)}
		/>
	);
}
