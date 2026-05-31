import React from "react";
import {Field} from "react-final-form";
import {Grid, Paper, TextField, Typography} from "@mui/material";

function FinalTextField ({name, label, ...rest}) {
	return (
		<Field name={name}>
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

export function DetailsSection () {
	return (
		<Paper variant="outlined" sx={{p: 2}}>
			<Typography variant="h6" gutterBottom>Character Details</Typography>
			<Grid container spacing={2}>
				<Grid size={{xs: 12, sm: 6}}>
					<FinalTextField name="personalityTraits" label="Personality Traits" multiline rows={3} />
				</Grid>
				<Grid size={{xs: 12, sm: 6}}>
					<FinalTextField name="ideals" label="Ideals" multiline rows={3} />
				</Grid>
				<Grid size={{xs: 12, sm: 6}}>
					<FinalTextField name="bonds" label="Bonds" multiline rows={3} />
				</Grid>
				<Grid size={{xs: 12, sm: 6}}>
					<FinalTextField name="flaws" label="Flaws" multiline rows={3} />
				</Grid>
				<Grid size={{xs: 12}}>
					<FinalTextField
						name="backstory"
						label="Backstory Notes"
						multiline
						rows={5}
						placeholder="Add your concept, goals, and connections."
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}
