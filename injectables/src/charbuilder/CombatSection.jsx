import React from "react";
import {Field} from "react-final-form";
import {Grid, Paper, TextField, Typography} from "@mui/material";

function FinalTextField ({name, label, parse, ...rest}) {
	return (
		<Field name={name} parse={parse}>
			{({input}) => (
				<TextField
					{...input}
					label={label}
					fullWidth
					size="small"
					variant="outlined"
					{...rest}
				/>
			)}
		</Field>
	);
}

export function CombatSection () {
	return (
		<Paper variant="outlined" sx={{p: 2}}>
			<Typography variant="h6" gutterBottom>Combat and Proficiencies</Typography>
			<Grid container spacing={2}>
				<Grid size={{xs: 6, sm: 3}}>
					<FinalTextField
						name="armorClass"
						label="Armor Class"
						type="number"
						inputProps={{min: 0}}
						parse={v => parseInt(v, 10) || 0}
					/>
				</Grid>
				<Grid size={{xs: 6, sm: 3}}>
					<FinalTextField
						name="initiative"
						label="Initiative"
						type="number"
						parse={v => parseInt(v, 10) || 0}
					/>
				</Grid>
				<Grid size={{xs: 6, sm: 3}}>
					<FinalTextField name="speed" label="Speed" placeholder="e.g. 30 ft." />
				</Grid>
				<Grid size={{xs: 6, sm: 3}}>
					<FinalTextField
						name="hitPoints"
						label="Hit Points"
						type="number"
						inputProps={{min: 1}}
						parse={v => parseInt(v, 10) || 1}
					/>
				</Grid>
				<Grid size={{xs: 12, sm: 6}}>
					<FinalTextField
						name="proficiencies"
						label="Proficiencies"
						multiline
						rows={4}
						placeholder="Armor, weapons, tools, and saving throw proficiencies"
					/>
				</Grid>
				<Grid size={{xs: 12, sm: 6}}>
					<FinalTextField
						name="languages"
						label="Languages"
						multiline
						rows={4}
						placeholder="Common, Elvish, etc."
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}
