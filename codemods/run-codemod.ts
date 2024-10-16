import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import { checkbox, confirm, input, select } from "@inquirer/prompts";

const codemodsDir: string = path.join(process.cwd(), "codemods");

enum Codemod {
    DeprecateV2Tokens = "deprecate-v2-tokens",
    MigrateColour = "migrate-colour",
    MigrateLayout = "migrate-layout",
    MigrateMediaQuery = "migrate-media-query",
    MigrateText = "migrate-text",
}

enum Theme {
    LifeSG = "lifesg",
    BookingSG = "bookingsg",
}

const theme = {
    helpMode: "always" as const,
};

const codemodDescriptions: { [key in Codemod]?: string } = {
    [Codemod.DeprecateV2Tokens]: "This is to deprecate previous tokens to V2",
    [Codemod.MigrateColour]:
        "This is to migrate V2_Color to its respective Colour tokens and usages.",
    [Codemod.MigrateLayout]:
        "This is to migrate V2_Layout to its new Layout component and respective column usages",
    [Codemod.MigrateMediaQuery]:
        "This is to migrate V2 mediaquery helper function to V3 and its new specs.",
    [Codemod.MigrateText]:
        "This is to migrate V2_text to its new Typography Component and update its previous usages.",
};

// Shortcuts
const predefinedPaths: { [key: string]: string } = {
    Src: "src",
    Codebase: ".",
};

// Return codemods in codemod folder
function listCodemods(): { name: string; value: string }[] {
    const codemods: string[] = fs.readdirSync(codemodsDir).filter((folder) => {
        return fs.lstatSync(path.join(codemodsDir, folder)).isDirectory();
    });

    const options = codemods.map((mod) => ({
        name: mod,
        value: mod,
        description: codemodDescriptions[mod as Codemod],
    }));

    return options;
}

function runCodemods(
    codemodsToRun: string[],
    outputPath: string,
    options?: { "migrate-colour"?: Theme }
): void {
    codemodsToRun.forEach((codemod) => {
        const codemodPath = path.join(codemodsDir, codemod, "index.ts");
        let command = `jscodeshift --parser=tsx -t ${codemodPath} ${outputPath}`;

        if (codemod === Codemod.MigrateColour && options?.["migrate-colour"]) {
            command = `jscodeshift --parser=tsx -t ${codemodPath} --mapping=${options["migrate-colour"]} ${outputPath}`;
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

            throw error;
        }
    });
}

// Choose path for codemod use
async function chooseOutputPath(): Promise<string | null> {
    const options = [
        { name: "src (./src)", value: predefinedPaths.Src },
        { name: "current directory (./)", value: predefinedPaths.Codebase },
        { name: "custom", value: "custom" },
    ];

    const selectedOption = await select({
        message: "Choose an output path:",
        choices: options,
    });

    if (selectedOption === "custom") {
        const customPath = await input({
            message: "Enter your custom path:",
        });

        if (!customPath) {
            console.log("No custom path provided. Canceling.");
            return null;
        }

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

async function chooseTheme(): Promise<Theme | null> {
    const themeOptions = [
        { name: "LifeSG", value: Theme.LifeSG },
        { name: "BookingSG", value: Theme.BookingSG },
    ];

    const selectedTheme = await select({
        message: "Select the theme to follow for Color migration:",
        choices: themeOptions,
    });

    return selectedTheme;
}

// Get codemod selections
async function getCodemodSelections(): Promise<{
    selectedCodemods: string[];
    selectedTheme: Theme | null;
    outputPath: string;
}> {
    const codemods = listCodemods();
    if (codemods.length === 0) {
        throw new Error("No codemod scripts found.");
    }

    const selectedCodemods = await checkbox({
        required: true,
        message: "Select codemods to run:",
        choices: codemods,
        theme,
    });

    let selectedTheme: Theme | null = null;
    if (selectedCodemods.includes(Codemod.MigrateColour)) {
        selectedTheme = await chooseTheme();
    }

    const outputPath = await chooseOutputPath();
    if (!outputPath) {
        throw new Error("No output path selected or provided.");
    }

    return { selectedCodemods, selectedTheme, outputPath };
}

async function main(): Promise<void> {
    try {
        const { selectedCodemods, selectedTheme, outputPath } =
            await getCodemodSelections();

        const finalConfirmationMessage = `You are about to run the following codemods: ${selectedCodemods.join(
            ", "
        )}\nOutput path: ${outputPath}${
            selectedTheme
                ? `\nSelected theme for "migrate-colour": ${selectedTheme}`
                : ""
        }.\nDo you want to proceed?`;

        const finalConfirmation = await confirm({
            message: finalConfirmationMessage,
            default: true,
        });

        if (!finalConfirmation) {
            return;
        }

        runCodemods(
            selectedCodemods,
            outputPath,
            selectedTheme ? { "migrate-colour": selectedTheme } : undefined
        );
    } catch (error) {
        if (error.name === "ExitPromptError") {
            console.log("Selection process interrupted.");
        } else {
            console.error("An unexpected error occurred:", error);
            throw error;
        }
    }
}

main();
