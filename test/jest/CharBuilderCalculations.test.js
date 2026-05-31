import {
	formatSignedNumber,
	getAbilityModifier,
	getProficiencyBonusFromLevel,
	getTotalCharacterLevel,
} from "../../injectables/src/charbuilder/charbuilder-calculations.js";

describe("Character Builder calculations", () => {
	it("should calculate ability modifiers", () => {
		expect(getAbilityModifier(1)).toBe(-5);
		expect(getAbilityModifier(10)).toBe(0);
		expect(getAbilityModifier(18)).toBe(4);
		expect(getAbilityModifier("20")).toBe(5);
		expect(getAbilityModifier("invalid")).toBe(0);
	});

	it("should format signed numbers", () => {
		expect(formatSignedNumber(-1)).toBe("-1");
		expect(formatSignedNumber(0)).toBe("+0");
		expect(formatSignedNumber(3)).toBe("+3");
	});

	it("should total class levels with bounds", () => {
		expect(getTotalCharacterLevel([])).toBe(0);
		expect(getTotalCharacterLevel(null)).toBe(0);
		expect(getTotalCharacterLevel([
			{className: "Fighter", level: 2},
			{className: "Wizard", level: "3"},
		])).toBe(5);
		expect(getTotalCharacterLevel([
			{className: "Rogue", level: -3},
			{className: "Cleric", level: 99},
			{className: "", level: 10},
		])).toBe(21);
	});

	it("should derive proficiency bonus from total level", () => {
		expect(getProficiencyBonusFromLevel(0)).toBe(2);
		expect(getProficiencyBonusFromLevel(1)).toBe(2);
		expect(getProficiencyBonusFromLevel(4)).toBe(2);
		expect(getProficiencyBonusFromLevel(5)).toBe(3);
		expect(getProficiencyBonusFromLevel(9)).toBe(4);
		expect(getProficiencyBonusFromLevel(13)).toBe(5);
		expect(getProficiencyBonusFromLevel(17)).toBe(6);
		expect(getProficiencyBonusFromLevel(20)).toBe(6);
		expect(getProficiencyBonusFromLevel(30)).toBe(6);
	});
});
