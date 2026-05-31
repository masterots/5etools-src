const STORAGE_KEY_DEV = "5etools.injectables.dev";
const DEV_MODULE_URL = "http://localhost:5173/injectables/src/main.jsx";
const PROD_MODULE_URL = "/lib/injectables/injectables.js";

function _isBrowser () {
	return typeof window !== "undefined";
}

function _isDevFlagPresent () {
	if (!_isBrowser()) return false;

	const params = new URLSearchParams(window.location.search);
	if (params.get("injectablesDev") === "1") {
		window.localStorage.setItem(STORAGE_KEY_DEV, "1");
		return true;
	}

	if (params.get("injectablesDev") === "0") {
		window.localStorage.setItem(STORAGE_KEY_DEV, "0");
		return false;
	}

	return window.localStorage.getItem(STORAGE_KEY_DEV) === "1";
}

export function setInjectablesDevMode (isEnabled) {
	if (!_isBrowser()) return;
	window.localStorage.setItem(STORAGE_KEY_DEV, isEnabled ? "1" : "0");
}

export function getInjectablesModuleUrl () {
	return _isDevFlagPresent()
		? DEV_MODULE_URL
		: PROD_MODULE_URL;
}

export async function loadInjectablesModule () {
	const moduleUrl = getInjectablesModuleUrl();
	return import(/* @vite-ignore */ moduleUrl);
}
