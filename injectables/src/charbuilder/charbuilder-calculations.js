export function getAbilityModifier (score) {
	const n = Number(score);
	if (Number.isNaN(n)) return 0;
	return Math.floor((n - 10) / 2);
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
