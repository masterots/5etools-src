import {useEffect, useState} from "react";

export function useCharbuilderReferenceData () {
	const [allRaces, setAllRaces] = useState([]);
	const [racesLoading, setRacesLoading] = useState(true);
	const [allBackgrounds, setAllBackgrounds] = useState([]);
	const [backgroundsLoading, setBackgroundsLoading] = useState(true);
	const [allClasses, setAllClasses] = useState([]);
	const [allClassFeatures, setAllClassFeatures] = useState([]);
	const [allSubclasses, setAllSubclasses] = useState([]);
	const [classesLoading, setClassesLoading] = useState(true);

	useEffect(() => {
		const load = async () => {
			const dataUtil = window.DataUtil;
			if (!dataUtil) {
				setRacesLoading(false);
				setBackgroundsLoading(false);
				setClassesLoading(false);
				return;
			}

			try {
				let raceData = null;
				if (dataUtil.race?.loadJSON) {
					try {
						raceData = await dataUtil.race.loadJSON({isAddBaseRaces: false});
					} catch {
						if (dataUtil.race?.loadRawJSON && dataUtil.race?.getPostProcessedSiteJson) {
							const rawRaceData = await dataUtil.race.loadRawJSON();
							raceData = dataUtil.race.getPostProcessedSiteJson(rawRaceData, {isAddBaseRaces: false});
						}
					}
				}
				setAllRaces(raceData?.race ?? []);
			} catch {
				setAllRaces([]);
			} finally {
				setRacesLoading(false);
			}

			try {
				let backgroundData = null;
				if (dataUtil.background?.loadJSON) {
					try {
						backgroundData = await dataUtil.background.loadJSON();
					} catch {
						if (dataUtil.background?.loadRawJSON) {
							backgroundData = await dataUtil.background.loadRawJSON();
						}
					}
				}
				setAllBackgrounds(backgroundData?.background ?? []);
			} catch {
				setAllBackgrounds([]);
			} finally {
				setBackgroundsLoading(false);
			}

			try {
				let classData = null;
				if (dataUtil.class?.loadJSON) {
					try {
						classData = await dataUtil.class.loadJSON();
					} catch {
						if (dataUtil.class?.loadRawJSON) {
							classData = await dataUtil.class.loadRawJSON();
						}
					}
				}
				setAllClasses(classData?.class ?? []);
				setAllClassFeatures(classData?.classFeature ?? []);
				setAllSubclasses(classData?.subclass ?? []);
			} catch {
				setAllClasses([]);
				setAllClassFeatures([]);
				setAllSubclasses([]);
			} finally {
				setClassesLoading(false);
			}
		};

		if (document.readyState === "complete") {
			load();
		} else {
			window.addEventListener("load", load, {once: true});
		}
	}, []);

	return {
		allRaces,
		racesLoading,
		allBackgrounds,
		backgroundsLoading,
		allClasses,
		allClassFeatures,
		allSubclasses,
		classesLoading,
	};
}
