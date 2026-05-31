# Injectable React Modules (Vite)

This folder hosts React-based "islands" which can be injected into existing 5etools HTML pages without migrating those pages into a full Vite app.

## Commands

Run these from the repo root:

```bash
npm run injectables:dev
```

- Starts a Vite dev server on `http://localhost:5173`
- Serves source ESM modules with HMR for rapid island development

```bash
npm run injectables:build
```

- Builds production ESM output to `lib/injectables/injectables.js`

```bash
npm run injectables:watch
```

- Production build in watch mode (no dev server)

You can continue running the existing static app server in parallel:

```bash
npm run serve:dev
```

## Injecting an Island Into Any Existing Page

1. Add a mount target element:

```html
<div
	data-5etools-island="demo-form"
	data-5etools-island-props='{"title":"Quick Builder"}'
></div>
```

2. Add a module bootstrap script:

```html
<script type="module">
	import {loadInjectablesModule} from "./js/injectables-loader.js";

	const mod = await loadInjectablesModule();
	mod.mountIslands();
</script>
```

## Dev vs Prod Module Resolution

`js/injectables-loader.js` loads:

- Dev module: `http://localhost:5173/injectables/src/main.jsx`
- Prod module: `/lib/injectables/injectables.js`

Enable dev module loading by either:

- Visiting a page with query `?injectablesDev=1`, or
- Calling `setInjectablesDevMode(true)` once in the browser console

Disable with `?injectablesDev=0` or `setInjectablesDevMode(false)`.

## Adding More Islands

Register additional components in `injectables/src/main.jsx` under `ISLAND_COMPONENTS` and mount them by setting the matching `data-5etools-island` value.
