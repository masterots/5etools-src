"use strict";

(function () {
	const ABILITIES = ["str", "dex", "con", "int", "wis", "cha"];

	// ---- Race / Subrace dropdowns ----------------------------------------

	async function loadAndWireRaces () {
		const selRace = document.getElementById("char-species");
		const selSubrace = document.getElementById("char-subrace");
		const rowSubrace = document.getElementById("char-subrace-row");
		if (!selRace) return;

		selRace.disabled = true;

		let allRaces;
		try {
			const data = await DataUtil.race.loadJSON({isAddBaseRaces: false});
			allRaces = data.race || [];
		} catch (e) {
			selRace.innerHTML = `<option value="">Failed to load races</option>`;
			selRace.disabled = false;
			return;
		}

		// Build sorted list of unique base-race names
		const baseNames = [...new Set(allRaces.map(r => r._baseName || r.name))]
			.sort((a, b) => SortUtil.ascSortLower(a, b));

		selRace.innerHTML = "";
		selRace.appendChild(new Option("\u2014 choose a race \u2014", ""));
		baseNames.forEach(name => selRace.appendChild(new Option(name, name)));
		selRace.disabled = false;

		function updateSubraces () {
			const selected = selRace.value;
			if (!rowSubrace || !selSubrace) return;

			const subraces = selected
				? allRaces.filter(r => r._baseName === selected && r._subraceName)
				: [];

			if (subraces.length) {
				selSubrace.innerHTML = "";
				selSubrace.appendChild(new Option("\u2014 choose a subrace \u2014", ""));
				subraces.forEach(r => selSubrace.appendChild(new Option(r._subraceName, r._subraceName)));
				rowSubrace.style.display = "";
			} else {
				rowSubrace.style.display = "none";
				selSubrace.innerHTML = "";
			}
		}

		selRace.addEventListener("change", updateSubraces);
		updateSubraces();
	}

	// ----------------------------------------------------------------------

	function getModifier (score) {
		const asNum = Number(score);
		if (Number.isNaN(asNum)) return 0;
		return Math.floor((asNum - 10) / 2);
	}

	function formatModifier (mod) {
		return mod >= 0 ? `+${mod}` : `${mod}`;
	}

	function updateAbilityModifiers () {
		ABILITIES.forEach(ability => {
			const eleScore = document.getElementById(`ability-${ability}`);
			const eleMod = document.getElementById(`mod-${ability}`);
			if (!eleScore || !eleMod) return;
			eleMod.textContent = formatModifier(getModifier(eleScore.value));
		});
	}

	function addEquipmentRow () {
		const tpl = document.getElementById("equipment-row-template");
		const wrpRows = document.getElementById("equipment-rows");
		if (!tpl || !wrpRows) return;

		const fragment = tpl.content.cloneNode(true);
		wrpRows.appendChild(fragment);
	}

	window.addEventListener("DOMContentLoaded", () => {
		loadAndWireRaces();

		const form = document.getElementById("charbuilder-form");
		const btnReset = document.getElementById("btn-reset-form");
		const btnAddEquipment = document.getElementById("btn-add-equipment");
		const wrpRows = document.getElementById("equipment-rows");

		addEquipmentRow();
		updateAbilityModifiers();

		ABILITIES.forEach(ability => {
			const ele = document.getElementById(`ability-${ability}`);
			if (!ele) return;
			ele.addEventListener("input", updateAbilityModifiers);
		});

		if (btnAddEquipment) {
			btnAddEquipment.addEventListener("click", () => addEquipmentRow());
		}

		if (btnReset && form) {
			btnReset.addEventListener("click", () => {
				form.reset();
				const rowCount = wrpRows ? wrpRows.children.length : 0;
				if (!rowCount) addEquipmentRow();
				updateAbilityModifiers();
			});
		}

		if (wrpRows) {
			wrpRows.addEventListener("click", evt => {
				const btn = evt.target.closest(".charbuilder__btn-remove-equipment");
				if (!btn) return;

				const row = btn.closest(".charbuilder__equipment-row");
				if (!row) return;

				const totalRows = wrpRows.children.length;
				if (totalRows <= 1) {
					const inputs = row.querySelectorAll("input");
					inputs.forEach(input => {
						if (input.type === "number") input.value = input.min || "0";
						else input.value = "";
					});
					return;
				}

				row.remove();
			});
		}
	});
})();
