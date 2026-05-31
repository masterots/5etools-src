import React from "react";
import {useForm, useFormState} from "react-final-form";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {Box, Button, Grid, IconButton, Paper, TextField, Typography} from "@mui/material";

const EMPTY_ROW = () => ({item: "", qty: 1, weight: "", cost: ""});

export function EquipmentSection () {
	const form = useForm();
	const {values} = useFormState({subscription: {values: true}});
	const rows = values.equipment ?? [EMPTY_ROW()];

	const addRow = () => form.change("equipment", [...rows, EMPTY_ROW()]);

	const removeRow = (idx) => {
		if (rows.length <= 1) {
			form.change("equipment", [EMPTY_ROW()]);
			return;
		}
		form.change("equipment", rows.filter((_, i) => i !== idx));
	};

	const updateRow = (idx, field, value) => {
		form.change("equipment", rows.map((row, i) => i === idx ? {...row, [field]: value} : row));
	};

	return (
		<Paper variant="outlined" sx={{p: 2}}>
			<Typography variant="h6" gutterBottom>Equipment</Typography>
			<Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
				{rows.map((row, idx) => (
					<Grid key={idx} container spacing={1} alignItems="center">
						<Grid size={{xs: 12, sm: 5}}>
							<TextField
								label="Item"
								value={row.item}
								onChange={e => updateRow(idx, "item", e.target.value)}
								fullWidth
								size="small"
								placeholder="e.g. Longsword"
							/>
						</Grid>
						<Grid size={{xs: 4, sm: 2}}>
							<TextField
								label="Qty"
								type="number"
								value={row.qty}
								onChange={e => updateRow(idx, "qty", parseInt(e.target.value, 10) || 1)}
								fullWidth
								size="small"
								inputProps={{min: 1}}
							/>
						</Grid>
						<Grid size={{xs: 4, sm: 2}}>
							<TextField
								label="Weight"
								value={row.weight}
								onChange={e => updateRow(idx, "weight", e.target.value)}
								fullWidth
								size="small"
								placeholder="lb"
							/>
						</Grid>
						<Grid size={{xs: 4, sm: 2}}>
							<TextField
								label="Cost"
								value={row.cost}
								onChange={e => updateRow(idx, "cost", e.target.value)}
								fullWidth
								size="small"
								placeholder="gp"
							/>
						</Grid>
						<Grid size="auto">
							<IconButton
								onClick={() => removeRow(idx)}
								color="error"
								size="small"
								title="Remove row"
							>
								<DeleteIcon fontSize="small" />
							</IconButton>
						</Grid>
					</Grid>
				))}
			</Box>
			<Box sx={{mt: 1}}>
				<Button variant="outlined" size="small" startIcon={<AddIcon />} onClick={addRow}>
					Add Equipment Row
				</Button>
			</Box>
		</Paper>
	);
}
