const { resolve, join, basename } = require("path");
const { readFile, writeFile, copy, pathExists } = require("fs-extra");

const packagePath = process.cwd();
const distPath = join(packagePath, "./dist");

const writeJson = (targetPath, obj) =>
    writeFile(targetPath, JSON.stringify(obj, null, 2), "utf8");

async function createPackageFile() {
    const packageData = await readFile(
        resolve(packagePath, "./package.json"),
        "utf8"
    );
    const { ...packageOthers } = JSON.parse(packageData);
    const newPackageData = {
        ...packageOthers,
        private: false,
        typings: "./index.d.ts",
        main: "./cjs/index.js",
        module: "./index.js",
        scripts: {
            postinstall: "node ./generate-component-instructions.js",
        },
        bin: {
            "lifesg-ds-instructions": "./generate-component-instructions.js",
        },
    };

    const targetPath = resolve(distPath, "./package.json");
    await writeJson(targetPath, newPackageData);
    console.log(`Created package.json in ${targetPath}`);
}

async function includeFileInBuild(file) {
    const sourcePath = resolve(packagePath, file);
    const targetPath = resolve(distPath, basename(file));
    await copy(sourcePath, targetPath);
    console.log(`Copied ${sourcePath} to ${targetPath}`);
}

// Only copy files that are present — catalog and instructions are optional
async function includeFileIfExists(file) {
    if (await pathExists(resolve(packagePath, file))) {
        await includeFileInBuild(file);
    }
}

async function run() {
    try {
        await createPackageFile();
        await includeFileInBuild("./README.md");
        await includeFileIfExists("./component-catalog.json");
        await includeFileIfExists(
            "./scripts/generate-component-instructions.js"
        );
        await includeFileIfExists(
            "./.github/instructions/design-system-components.instructions.md"
        );
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();
