import React, {useState} from "react";
import {Form} from "react-final-form";
import {Box, Button, Stack, Typography} from "@mui/material";
import {BasicsSection} from "./BasicsSection.jsx";
import {RaceSection} from "./RaceSection.jsx";
import {ClassLevelsSection} from "./ClassLevelsSection.jsx";
import {AbilityScoresSection} from "./AbilityScoresSection.jsx";
import {CHARBUILDER_INITIAL_VALUES} from "./charbuilder-model.js";
import {useCharbuilderReferenceData} from "./useCharbuilderReferenceData.js";

const STEP_BASICS = 0;
const STEP_RACE = 1;
const STEP_CLASSES = 2;
const STEP_ABILITY_SCORES = 3;

export default function CharBuilder () {
	const [step, setStep] = useState(STEP_BASICS);
	const {
		allRaces,
		racesLoading,
		allBackgrounds,
		backgroundsLoading,
		allClasses,
		classesLoading,
	} = useCharbuilderReferenceData();

	return (
		<Form
			initialValues={CHARBUILDER_INITIAL_VALUES}
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
