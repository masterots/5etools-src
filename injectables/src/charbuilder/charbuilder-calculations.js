export function getAbilityModifier (score) {
	const n = Number(score);
	if (Number.isNaN(n)) return 0;
	return Math.floor((n - 10) / 2);
}

const ABILITY_SCORE_KEYS = ["str", "dex", "con", "int", "wis", "cha"];

function _toIntInRange ({value, min, max, fallback}) {
	const parsed = Number.parseInt(value, 10);
	if (Number.isNaN(parsed)) return fallback;
	if (parsed < min) return min;
	if (parsed > max) return max;
	return parsed;
}

export function getAsiAbilityBonuses (classAsiByClass) {
	const out = ABILITY_SCORE_KEYS.reduce((acc, key) => {
		acc[key] = 0;
		return acc;
	}, {});

	if (!classAsiByClass || typeof classAsiByClass !== "object") {
		return out;
	}

	Object.values(classAsiByClass).forEach(classSelections => {
		if (!classSelections || typeof classSelections !== "object") return;

		Object.values(classSelections).forEach(featureSelection => {
			if (!featureSelection || typeof featureSelection !== "object") return;

			ABILITY_SCORE_KEYS.forEach(key => {
				out[key] += _toIntInRange({value: featureSelection[key], min: 0, max: 2, fallback: 0});
			});
		});
	});

	return out;
}

export function getEffectiveAbilityScore ({values, abilityKey}) {
	const base = _toIntInRange({value: values?.[abilityKey], min: 1, max: 30, fallback: 10});
	const asiBonuses = getAsiAbilityBonuses(values?.classAsiByClass);
	const asiBonus = _toIntInRange({value: asiBonuses[abilityKey], min: 0, max: 20, fallback: 0});
	return _toIntInRange({value: base + asiBonus, min: 1, max: 30, fallback: base});
}

export function formatSignedNumber (n) {
	const value = Number(n) || 0;
	return value >= 0 ? `+${value}` : `${value}`;
}

function _getNormalizedClassLevel (levelRaw) {
	const level = Number.parseInt(levelRaw, 10);
	if (Number.isNaN(level)) return 1;
	if (level < 1) return 1;
	if (level > 20) return 20;
	return level;
}

export function getTotalCharacterLevel (classLevels) {
	if (!Array.isArray(classLevels)) return 0;

	return classLevels.reduce((acc, row) => {
		if (!row?.className) return acc;
		return acc + _getNormalizedClassLevel(row.level);
	}, 0);
}

export function getProficiencyBonusFromLevel (levelRaw) {
	const level = Number.parseInt(levelRaw, 10);
	if (Number.isNaN(level) || level <= 0) return 2;
	return 2 + Math.floor((Math.min(level, 20) - 1) / 4);
}
