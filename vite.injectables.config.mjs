import {fileURLToPath} from "node:url";
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

const ENTRY_FILE = fileURLToPath(new URL("./injectables/src/main.jsx", import.meta.url));

export default defineConfig(({command}) => {
	const nodeEnv = command === "build" ? "production" : "development";

	return {
		plugins: [react()],
		define: {
			"process.env.NODE_ENV": JSON.stringify(nodeEnv),
		},
		server: {
			host: "localhost",
			port: 5173,
			strictPort: true,
			cors: true,
		},
		build: {
			outDir: "lib/injectables",
			emptyOutDir: true,
			sourcemap: true,
			lib: {
				entry: ENTRY_FILE,
				formats: ["es"],
				fileName: () => "injectables.js",
			},
			rollupOptions: {
				output: {
					chunkFileNames: "chunks/[name]-[hash].js",
					assetFileNames: "assets/[name]-[hash][extname]",
				},
			},
		},
	};
});
