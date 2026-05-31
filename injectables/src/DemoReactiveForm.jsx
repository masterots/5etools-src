import React, {useMemo, useState} from "react";

export function DemoReactiveForm ({title = "Reactive Form", submitLabel = "Submit"}) {
	const [name, setName] = useState("");
	const [level, setLevel] = useState(1);
	const [isArcane, setIsArcane] = useState(false);

	const summary = useMemo(() => {
		const tier = level >= 17
			? "Tier 4"
			: level >= 11
				? "Tier 3"
				: level >= 5
					? "Tier 2"
					: "Tier 1";

		const style = isArcane ? "Arcane" : "Martial";
		const label = name.trim() || "Unnamed Character";

		return `${label} | Level ${level} | ${tier} | ${style}`;
	}, [isArcane, level, name]);

	return (
		<form
			onSubmit={(evt) => evt.preventDefault()}
			style={{
				padding: "0.75rem",
				border: "1px solid #9aa0a6",
				borderRadius: "8px",
				backgroundColor: "#f7f7f7",
				display: "grid",
				gap: "0.5rem",
			}}
		>
			<h3 style={{margin: 0}}>{title}</h3>

			<label>
				Character Name
				<input
					type="text"
					value={name}
					onChange={(evt) => setName(evt.target.value)}
					placeholder="e.g. Nyx"
					style={{display: "block", width: "100%"}}
				/>
			</label>

			<label>
				Level: {level}
				<input
					type="range"
					min="1"
					max="20"
					value={level}
					onChange={(evt) => setLevel(Number(evt.target.value))}
					style={{display: "block", width: "100%"}}
				/>
			</label>

			<label style={{display: "flex", gap: "0.35rem", alignItems: "center"}}>
				<input
					type="checkbox"
					checked={isArcane}
					onChange={(evt) => setIsArcane(evt.target.checked)}
				/>
				Arcane build
			</label>

			<output style={{fontFamily: "monospace", fontSize: "0.9rem"}}>{summary}</output>

			<button type="submit">{submitLabel}</button>
		</form>
	);
}
