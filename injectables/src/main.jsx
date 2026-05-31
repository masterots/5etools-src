import React, {useEffect, useMemo, useState} from "react";
import {createRoot} from "react-dom/client";
import createCache from "@emotion/cache";
import {CacheProvider} from "@emotion/react";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {DemoReactiveForm} from "./DemoReactiveForm.jsx";
import CharBuilder from "./charbuilder/CharBuilder.jsx";
import CharBuilderSheetApp from "./charbuilder/CharBuilderSheetApp.jsx";

const ATTR_ISLAND = "data-5etools-island";
const ATTR_PROPS = "data-5etools-island-props";
const EVENT_UPDATE_PROPS = "5etools-island:update-props";
const TAG_ISLAND_HOST = "fiveetools-island-host";

const ISLAND_COMPONENTS = {
	"demo-form": DemoReactiveForm,
	"charbuilder": CharBuilder,
	"charbuilder-sheet": CharBuilderSheetApp,
};

const _mountedRoots = new WeakMap();

function _readProps (ele) {
	const propsRaw = ele.getAttribute(ATTR_PROPS);
	if (!propsRaw) return {};

	try {
		return JSON.parse(propsRaw);
	} catch {
		return {};
	}
}

function _getThemeInfo () {
	const docEl = document.documentElement;
	const className = globalThis.styleSwitcher?.getClassNamesStyleTheme?.() || "";
	const isNight = globalThis.styleSwitcher?.getSummary?.()?.isNight
		?? docEl.classList.contains("ve-night-mode");

	let variant = "day";
	if (className.includes("ve-night-mode--clean")) variant = "nightClean";
	else if (className.includes("ve-night-mode--classic")) variant = "nightClassic";
	else if (isNight) variant = "night";

	return {
		isNight: !!isNight,
		mode: isNight ? "dark" : "light",
		variant,
		className,
	};
}

function _createMuiTheme (themeInfo) {
	const isNight = themeInfo.mode === "dark";
	const backgrounds = isNight
		? {
			default: themeInfo.variant === "nightClean" ? "#12161d" : themeInfo.variant === "nightClassic" ? "#17120f" : "#101418",
			paper: themeInfo.variant === "nightClean" ? "#1a2230" : themeInfo.variant === "nightClassic" ? "#231b16" : "#17202a",
		}
		: {
			default: "#f7f7f4",
			paper: "#ffffff",
		};

	return createTheme({
		palette: {
			mode: themeInfo.mode,
			primary: {
				main: isNight ? "#7cc4ff" : "#006bc4",
			},
			secondary: {
				main: isNight ? "#d2ad68" : "#7a4d00",
			},
			background: backgrounds,
		},
		shape: {
			borderRadius: 8,
		},
		components: {
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundImage: "none",
					},
				},
			},
		},
		typography: {
			fontSize: 24,
		},
	});
}

class FiveEToolsIslandHost extends HTMLElement {
	constructor () {
		super();

		const shadowRoot = this.attachShadow({mode: "open"});
		const style = document.createElement("style");
		style.textContent = `
			:host {
				display: block;
				width: 100%;
				color: inherit;
				font: inherit;
			}

			[data-react-root] {
				display: block;
				width: 100%;
			}
		`;

		const mountPoint = document.createElement("div");
		mountPoint.setAttribute("data-react-root", "");

		shadowRoot.append(style, mountPoint);
		this._mountPoint = mountPoint;
	}

	get mountPoint () { return this._mountPoint; }
}

if (typeof window !== "undefined" && window.customElements && !window.customElements.get(TAG_ISLAND_HOST)) {
	window.customElements.define(TAG_ISLAND_HOST, FiveEToolsIslandHost);
}

function _getOrCreateIslandHost (ele) {
	let host = ele.querySelector(TAG_ISLAND_HOST);
	if (host) return host;

	host = document.createElement(TAG_ISLAND_HOST);
	ele.replaceChildren(host);
	return host;
}

function IslandShell ({Component, mountElement, shadowRoot, initialProps}) {
	const [props, setProps] = useState(initialProps);
	const [themeInfo, setThemeInfo] = useState(() => _getThemeInfo());

	useEffect(() => {
		const handlePropsUpdate = (evt) => {
			const nextProps = evt.detail;
			if (!nextProps || typeof nextProps !== "object") return;
			setProps(prev => ({...prev, ...nextProps}));
		};

		mountElement.addEventListener(EVENT_UPDATE_PROPS, handlePropsUpdate);
		mountElement.updateIslandProps = (nextProps) => {
			mountElement.dispatchEvent(new CustomEvent(EVENT_UPDATE_PROPS, {detail: nextProps}));
		};

		return () => {
			mountElement.removeEventListener(EVENT_UPDATE_PROPS, handlePropsUpdate);
			delete mountElement.updateIslandProps;
		};
	}, [mountElement]);

	useEffect(() => {
		const observer = new MutationObserver(() => {
			setThemeInfo(prev => {
				const next = _getThemeInfo();
				return prev.mode === next.mode && prev.variant === next.variant && prev.className === next.className
					? prev
					: next;
			});
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => observer.disconnect();
	}, []);

	const cache = useMemo(
		() => createCache({
			key: `mui-island-${mountElement.getAttribute(ATTR_ISLAND) || "root"}`,
			container: shadowRoot,
			prepend: true,
		}),
		[mountElement, shadowRoot],
	);

	const theme = useMemo(() => _createMuiTheme(themeInfo), [themeInfo]);

	const bridge = useMemo(() => ({
		dispatch (type, detail) {
			mountElement.dispatchEvent(new CustomEvent(type, {
				detail,
				bubbles: true,
				composed: true,
			}));
		},
		setProps (nextProps) {
			mountElement.dispatchEvent(new CustomEvent(EVENT_UPDATE_PROPS, {detail: nextProps}));
		},
		getTheme () {
			return themeInfo;
		},
		getMountElement () {
			return mountElement;
		},
		getShadowRoot () {
			return shadowRoot;
		},
	}), [mountElement, shadowRoot, themeInfo]);

	return (
		<CacheProvider value={cache}>
			<ThemeProvider theme={theme}>
				<ScopedCssBaseline>
					<Component {...props} hostBridge={bridge} hostTheme={themeInfo} />
				</ScopedCssBaseline>
			</ThemeProvider>
		</CacheProvider>
	);
}

export function mountIsland (ele) {
	if (!(ele instanceof HTMLElement)) return false;

	const islandName = ele.getAttribute(ATTR_ISLAND);
	if (!islandName) return false;

	const Component = ISLAND_COMPONENTS[islandName];
	if (!Component) return false;

	if (_mountedRoots.has(ele)) return true;

	const host = _getOrCreateIslandHost(ele);
	const shadowRoot = host.shadowRoot;
	const root = createRoot(host.mountPoint);
	root.render(
		<React.StrictMode>
			<IslandShell
				Component={Component}
				mountElement={ele}
				shadowRoot={shadowRoot}
				initialProps={_readProps(ele)}
			/>
		</React.StrictMode>,
	);

	_mountedRoots.set(ele, root);
	return true;
}

export function mountIslands (root = document) {
	if (!root?.querySelectorAll) return 0;

	let mountedCount = 0;
	const elements = root.querySelectorAll(`[${ATTR_ISLAND}]`);
	for (const ele of elements) {
		if (mountIsland(ele)) mountedCount++;
	}

	return mountedCount;
}

if (typeof window !== "undefined") {
	window.__5etoolsInjectables = {
		mountIsland,
		mountIslands,
	};
}
