import React, {useMemo} from "react";
import {Field} from "react-final-form";
import {
	Autocomplete,
	Button,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

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

function FinalAutocomplete ({name, label, disabled, loading, options, overlayContainer}) {
	return (
		<Field name={name}>
			{({input}) => (
				<Autocomplete
					disablePortal={!overlayContainer}
					slotProps={{
						popper: {
							container: overlayContainer || undefined,
						},
					}}
					disabled={disabled}
					loading={loading}
					options={options}
					value={input.value || null}
					onChange={(_, value) => {
						input.onChange(value || "");
					}}
					isOptionEqualToValue={(option, value) => option === value}
					noOptionsText={loading ? "Loading backgrounds..." : "No backgrounds found"}
					renderInput={(params) => (
						<TextField
							{...params}
							label={label}
							size="small"
							variant="outlined"
							placeholder="Start typing a background"
						/>
					)}
				/>
			)}
		</Field>
	);
}
export function BasicsSection ({
	backgrounds,
	backgroundsLoading,
	onNext,
	overlayContainer = null,
	showNavigation = true,
}) {
	const backgroundNames = useMemo(
		() => [...new Set(backgrounds.map(bg => bg.name))].sort((a, b) => a.localeCompare(b)),
		[backgrounds],
	);

	return (
		<Paper variant="outlined" sx={{p: 2, maxWidth: 640}}>
			<Typography variant="h6" gutterBottom>Character Basics</Typography>
			<Stack spacing={2}>
				<FinalTextField name="charName" label="Character Name" placeholder="e.g. Althaea Stormleaf" />
				<FinalTextField name="playerName" label="Player Name" placeholder="e.g. Jordan" />

				<FinalAutocomplete
					name="background"
					label="Background"
					disabled={backgroundsLoading}
					loading={backgroundsLoading}
					options={backgroundNames}
					overlayContainer={overlayContainer}
				/>
			</Stack>
			{showNavigation && (
				<Stack direction="row" justifyContent="flex-end" sx={{mt: 2}}>
					<Button type="button" variant="contained" onClick={onNext}>
						Next
					</Button>
				</Stack>
			)}
		</Paper>
	);
}
