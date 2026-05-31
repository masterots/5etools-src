import React from "react";
import {Field} from "react-final-form";
import {Box, Chip, Grid, Paper, TextField, Typography} from "@mui/material";

const ABILITIES = [
	{key: "str", label: "Strength"},
	{key: "dex", label: "Dexterity"},
	{key: "con", label: "Constitution"},
	{key: "int", label: "Intelligence"},
	{key: "wis", label: "Wisdom"},
	{key: "cha", label: "Charisma"},
];

function abilityModifier (score) {
	const n = Number(score);
	if (Number.isNaN(n)) return 0;
	return Math.floor((n - 10) / 2);
}

function formatMod (m) {
	return m >= 0 ? `+${m}` : `${m}`;
}

export function AbilityScoresSection ({values}) {
	return (
		<Paper variant="outlined" sx={{p: 2}}>
			<Typography variant="h6" gutterBottom>Ability Scores</Typography>
			<Grid container spacing={2}>
				{ABILITIES.map(({key, label}) => {
					const mod = abilityModifier(values[key]);
					return (
						<Grid key={key} size={{xs: 6, sm: 4}}>
							<Box sx={{display: "flex", alignItems: "center", gap: 1}}>
								<Field name={key} parse={v => parseInt(v, 10) || 1}>
									{({input}) => (
										<TextField
											{...input}
											label={label}
											type="number"
											inputProps={{min: 1, max: 30}}
											size="small"
											sx={{flex: 1}}
										/>
									)}
								</Field>
								<Chip
									label={formatMod(mod)}
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
