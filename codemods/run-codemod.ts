import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import { checkbox, confirm, input, select } from "@inquirer/prompts";

const codemodsDir: string = path.join(process.cwd(), "codemods");

const codemodDescriptions: { [key: string]: string } = {
    "deprecate-v2-tokens": "This is to deprecate previous tokens to V2",
    "migrate-colour":
        "This is to migrate V2_Color to its respective Colour tokens are usages.",
    "migrate-layout":
        "This is to migrate V2_Layout to its new Layout component and respective column usages",
    "migrate-mediaquery":
        "This is to migrate V2 mediaquery helper function to V3 and its new specs.",
    "migrate-text":
        "This is to migrate V2_text to its new Typography Components and previous usages.",
};

// Shortcuts
const predefinedPaths: { [key: string]: string } = {
    Src: "src",
    Codebase: ".",
    TestData: "test-data/test-data.tsx",
};

// Return codemods in codemod folder
function listCodemods(): { name: string; value: string }[] {
    const codemods: string[] = fs.readdirSync(codemodsDir).filter((folder) => {
        return fs.lstatSync(path.join(codemodsDir, folder)).isDirectory();
    });

    const options = codemods.map((mod) => ({
        name: codemodDescriptions[mod]
            ? `${mod} - ${codemodDescriptions[mod]}`
            : `${mod}`,
        value: mod,
    }));

    options.push({ name: "Exit", value: "exit" });
    return options;
}

function runCodemods(
    codemodsToRun: string[],
    outputPath: string,
    mapping?: string
): void {
    codemodsToRun.forEach((codemod) => {
        const codemodPath = path.join(codemodsDir, codemod, "index.ts");
        let command = `jscodeshift --parser=tsx --silent -t ${codemodPath} ${outputPath}`;

        if (mapping && codemod === "migrate-colour") {
            console.log("CHEKCING MAPPING", mapping);
            command = `jscodeshift --parser=tsx --silent -t ${codemodPath} --mapping=${mapping} ${outputPath}`;
        }

        console.log(
            `Running codemod: ${codemod} on output path: ${outputPath}`
        );

        try {
            execSync(command, { stdio: "inherit" });
            console.log(
                `Codemod ${codemod} executed successfully on ${outputPath}.`
            );
        } catch (error) {
            console.error(
                `Error executing codemod ${codemod}: ${error.message}`
            );
        }
    });
}

// Choose path for codemod use
async function chooseOutputPath(): Promise<string | null> {
    const options = [
        { name: "Src", value: predefinedPaths.Src },
        { name: "Codebase", value: predefinedPaths.Codebase },
        { name: "TestData", value: predefinedPaths.TestData },
        { name: "Custom", value: "custom" },
        { name: "Exit", value: "exit" },
    ];

    const selectedOption = await select({
        message: "Choose an output path:",
        choices: options,
    });

    if (selectedOption === "exit") {
        console.log("Exiting...");
        return null;
    }

    if (selectedOption === "custom") {
        const customPath = await input({ message: "Enter your custom path:" });
        const resolvedPath = path.resolve(customPath);

        if (!fs.existsSync(resolvedPath)) {
            console.error(
                `The path "${resolvedPath}" does not exist. Please try again.`
            );
            return null;
        }

        return resolvedPath;
    }

    return selectedOption;
}

async function chooseTheme(): Promise<string | null> {
    const themeOptions = [
        { name: "LifeSG", value: "lifesg" },
        { name: "BookingSG", value: "bookingsg" },
    ];

    const selectedTheme = await select({
        message: "Select the theme to follow for Color migration:",
        choices: themeOptions,
    });

    return selectedTheme;
}

// Choose and run the codemods
async function main(): Promise<void> {
    const codemods = listCodemods();
    if (codemods.length === 0) {
        console.log("No codemod scripts found.");
        return;
    }

    const selectedCodemods = await checkbox({
        message: "Select codemods to run (use space to select multiple):",
        choices: codemods,
    });

    if (selectedCodemods.includes("exit")) {
        console.log("Exiting...");
        return;
    }

    const codemodConfirmed = await confirm({
        message: `You selected "${selectedCodemods.join(
            ", "
        )}". Do you want to proceed?`,
        default: true,
    });

    if (!codemodConfirmed) {
        console.log("Codemod selection canceled. Exiting...");
        return;
    }

    let selectedTheme: string | null = null;

    if (selectedCodemods.includes("migrate-colour")) {
        selectedTheme = await chooseTheme();

        const themeConfirmed = await confirm({
            message: `You selected the theme "${selectedTheme}". Do you want to proceed?`,
            default: true,
        });

        if (!themeConfirmed) {
            console.log("Theme selection canceled. Exiting...");
            return;
        }
    }

    const outputPath = await chooseOutputPath();
    if (!outputPath) {
        console.log("No output path selected or provided. Exiting...");
        return;
    }

    const pathConfirmed = await confirm({
        message: `You selected the output path "${outputPath}". Do you want to proceed?`,
        default: true,
    });

    if (!pathConfirmed) {
        console.log("Output path selection canceled. Exiting...");
        return;
    }

    runCodemods(selectedCodemods, outputPath, selectedTheme ?? undefined);
}

main();
