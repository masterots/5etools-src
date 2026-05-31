import React, {useEffect, useMemo} from "react";
import {Field} from "react-final-form";
import {useForm} from "react-final-form";
import {
	Alert,
	Box,
	Chip,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import {formatSignedNumber, getAbilityModifier, getAsiAbilityBonuses, getEffectiveAbilityScore} from "./charbuilder-calculations.js";

const ABILITIES = [
	{key: "str", label: "Strength"},
	{key: "dex", label: "Dexterity"},
	{key: "con", label: "Constitution"},
	{key: "int", label: "Intelligence"},
	{key: "wis", label: "Wisdom"},
	{key: "cha", label: "Charisma"},
];

const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];
const ABILITY_MODES = [
	{value: "standard-array", label: "Standard Array"},
	{value: "point-buy", label: "Point Buy"},
	{value: "manual", label: "Manual"},
];
const POINT_BUY_TOTAL = 27;

function _toIntInRange ({value, min, max, fallback}) {
	const parsed = parseInt(value, 10);
	if (Number.isNaN(parsed)) return fallback;
	if (parsed < min) return min;
	if (parsed > max) return max;
	return parsed;
}

function _getPointBuyCost (scoreRaw) {
	const score = _toIntInRange({value: scoreRaw, min: 8, max: 15, fallback: 8});
	if (score <= 13) return score - 8;
	if (score === 14) return 7;
	return 9;
}

function _getDefaultStandardAssignments () {
	return ABILITIES.reduce((acc, {key}, ix) => {
		acc[key] = STANDARD_ARRAY[ix];
		return acc;
	}, {});
}

function _getDefaultPointBuyScores () {
	return ABILITIES.reduce((acc, {key}) => {
		acc[key] = 8;
		return acc;
	}, {});
}

export function AbilityScoresSection ({values, showNavigation = true}) {
	const form = useForm();

	const abilityMode = values.abilityScoreMode || "manual";
	const standardAssignments = values.standardArrayAssignments || {};
	const pointBuyScores = values.pointBuyScores || {};

	useEffect(() => {
		if (!values.abilityScoreMode) {
			form.change("abilityScoreMode", "manual");
		}
		if (!values.standardArrayAssignments) {
			form.change("standardArrayAssignments", _getDefaultStandardAssignments());
		}
		if (!values.pointBuyScores) {
			form.change("pointBuyScores", _getDefaultPointBuyScores());
		}
	}, [form, values.abilityScoreMode, values.pointBuyScores, values.standardArrayAssignments]);

	useEffect(() => {
		if (abilityMode === "manual") {
			return;
		}

		if (abilityMode === "standard-array") {
			ABILITIES.forEach(({key}) => {
				const next = _toIntInRange({value: standardAssignments[key], min: 1, max: 30, fallback: 8});
				if (values[key] !== next) {
					form.change(key, next);
				}
			});
			return;
		}

		if (abilityMode === "point-buy") {
			ABILITIES.forEach(({key}) => {
				const next = _toIntInRange({value: pointBuyScores[key], min: 8, max: 15, fallback: 8});
				if (values[key] !== next) {
					form.change(key, next);
				}
			});
		}
	}, [abilityMode, form, pointBuyScores, standardAssignments, values]);

	const pointBuySpent = useMemo(() => {
		return ABILITIES.reduce((sum, {key}) => sum + _getPointBuyCost(pointBuyScores[key]), 0);
	}, [pointBuyScores]);

	const pointBuyRemaining = POINT_BUY_TOTAL - pointBuySpent;
	const asiBonuses = useMemo(() => getAsiAbilityBonuses(values.classAsiByClass), [values.classAsiByClass]);
	const menuProps = useMemo(() => {
		if (showNavigation) {
			return undefined;
		}

		return {
			disablePortal: true,
		};
	}, [showNavigation]);

	const handleChangeMode = (nextMode) => {
		form.change("abilityScoreMode", nextMode);
	};

	const handleChangeStandardAssignment = ({abilityKey, nextRaw}) => {
		const nextValue = _toIntInRange({value: nextRaw, min: 8, max: 15, fallback: 8});
		form.change(`standardArrayAssignments.${abilityKey}`, nextValue);
	};

	const handleChangePointBuy = ({abilityKey, nextRaw}) => {
		const nextValue = _toIntInRange({value: nextRaw, min: 8, max: 15, fallback: 8});
		const currentValue = _toIntInRange({value: pointBuyScores[abilityKey], min: 8, max: 15, fallback: 8});
		const spentWithoutCurrent = pointBuySpent - _getPointBuyCost(currentValue);
		const nextSpent = spentWithoutCurrent + _getPointBuyCost(nextValue);

		if (nextSpent > POINT_BUY_TOTAL) {
			return;
		}

		form.change(`pointBuyScores.${abilityKey}`, nextValue);
	};

	return (
		<Paper variant="outlined" sx={{p: 2}}>
			<Typography variant="h6" gutterBottom>Ability Scores</Typography>

			<FormControl size="small" sx={{mb: 2, minWidth: 220}}>
				<InputLabel>Method</InputLabel>
				<Select
					value={abilityMode}
					label="Method"
					MenuProps={menuProps}
					onChange={(evt) => {
						handleChangeMode(evt.target.value);
					}}
				>
					{ABILITY_MODES.map(mode => (
						<MenuItem key={mode.value} value={mode.value}>{mode.label}</MenuItem>
					))}
				</Select>
			</FormControl>

			{abilityMode === "standard-array" ? (
				<Stack spacing={1.5} sx={{mb: 2}}>
					<Typography variant="body2" color="text.secondary">
						Assign the standard array values (15, 14, 13, 12, 10, 8).
					</Typography>
					<Grid container spacing={2}>
						{ABILITIES.map(({key, label}) => {
							const selectedOther = ABILITIES
								.filter(it => it.key !== key)
								.map(it => _toIntInRange({value: standardAssignments[it.key], min: 8, max: 15, fallback: -1}));
							const currentValue = _toIntInRange({value: standardAssignments[key], min: 8, max: 15, fallback: 8});
							const availableValues = STANDARD_ARRAY.filter(it => it === currentValue || !selectedOther.includes(it));

							return (
								<Grid key={key} size={{xs: 6, sm: 4}}>
									<FormControl size="small" fullWidth>
										<InputLabel>{label}</InputLabel>
										<Select
											value={currentValue}
											label={label}
											MenuProps={menuProps}
											onChange={(evt) => {
												handleChangeStandardAssignment({abilityKey: key, nextRaw: evt.target.value});
											}}
										>
											{availableValues.map(score => (
												<MenuItem key={score} value={score}>{score}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
							);
						})}
					</Grid>
				</Stack>
			) : null}

			{abilityMode === "point-buy" ? (
				<Stack spacing={1.5} sx={{mb: 2}}>
					<Typography variant="body2" color="text.secondary">
						Adjust scores from 8 to 15 with a {POINT_BUY_TOTAL}-point budget.
					</Typography>
					<Alert severity={pointBuyRemaining < 0 ? "error" : "info"}>
						Points spent: {pointBuySpent} / {POINT_BUY_TOTAL} (remaining: {pointBuyRemaining})
					</Alert>
					<Grid container spacing={2}>
						{ABILITIES.map(({key, label}) => (
							<Grid key={key} size={{xs: 6, sm: 4}}>
								<TextField
									label={label}
									type="number"
									size="small"
									value={_toIntInRange({value: pointBuyScores[key], min: 8, max: 15, fallback: 8})}
									inputProps={{min: 8, max: 15}}
									onChange={(evt) => {
										handleChangePointBuy({abilityKey: key, nextRaw: evt.target.value});
									}}
									fullWidth
								/>
							</Grid>
						))}
					</Grid>
				</Stack>
			) : null}

			<Grid container spacing={2}>
				{ABILITIES.map(({key, label}) => {
					const baseScore = Number(values[key]) || 10;
					const score = getEffectiveAbilityScore({values, abilityKey: key});
					const mod = getAbilityModifier(score);
					const asiBonus = Number(asiBonuses[key]) || 0;
					return (
						<Grid key={key} size={{xs: 6, sm: 4}}>
							<Box sx={{display: "flex", alignItems: "center", gap: 1}}>
								<Field
									name={key}
									parse={v => parseInt(v, 10) || 1}
								>
									{({input}) => (
										<TextField
											{...input}
											label={label}
											type="number"
											inputProps={{min: 1, max: 30}}
											helperText={asiBonus ? `Total ${score} (${baseScore} + ${asiBonus} ASI)` : " "}
											size="small"
											disabled={abilityMode !== "manual"}
											sx={{flex: 1}}
										/>
									)}
								</Field>
								<Chip
									label={formatSignedNumber(mod)}
									size="small"
									color={mod >= 0 ? "primary" : "default"}
									variant="outlined"
									sx={{minWidth: 44, fontWeight: "bold"}}
								/>
							</Box>
						</Grid>
					);
				})}
			</Grid>
		</Paper>
	);
}
