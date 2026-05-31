import fs from "node:fs";
import path from "node:path";

const pathImg = path.resolve("img");

const expectedPaths = [
	"img/bestiary",
	"img/items",
	"img/plutonium",
];

const missingPaths = expectedPaths
	.map(it => path.resolve(it))
	.filter(it => !fs.existsSync(it));

if (!fs.existsSync(pathImg)) {
	console.error("Image directory 'img' was not found.");
	console.error("Run: npm run setup:img");
	process.exit(1);
}

const rootEntries = fs.readdirSync(pathImg, {withFileTypes: true});
if (!rootEntries.length) {
	console.error("Image directory 'img' exists but is empty.");
	console.error("Run: npm run setup:img");
	process.exit(1);
}

if (missingPaths.length) {
	console.error("Image submodule appears incomplete. Missing expected directories:");
	missingPaths.forEach(it => console.error(`- ${path.relative(process.cwd(), it)}`));
	console.error("Run: npm run setup:img");
	process.exit(1);
}

console.log("Image submodule looks ready for local development.");
console.log(`Detected ${rootEntries.length} entries in img/.`);
