import { checkbox, confirm, input, select } from "@inquirer/prompts";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import { Theme } from "./common";

const codemodsDir =
    process.env.ENV === "dev"
        ? path.join(process.cwd(), "codemods")
        : path.join(
              process.cwd(),
              "node_modules/@lifesg/react-design-system/codemods"
          );

enum Codemod {
    DeprecateV2Tokens = "deprecate-v2-tokens",
    MigrateColour = "migrate-colour",
    MigrateLayout = "migrate-layout",
    MigrateMediaQuery = "migrate-media-query",
    MigrateText = "migrate-text",
    MigrateTextList = "migrate-text-list",
}

const theme = {
    helpMode: "always" as const,
};

const CodemodDescriptions: { [key in Codemod]: string } = {
    [Codemod.DeprecateV2Tokens]: "Migrate deprecated V2 imports",
    [Codemod.MigrateColour]: "Replace V2_Color with new Colour tokens",
    [Codemod.MigrateLayout]: "Replace V2_Layout with new Layout components",
    [Codemod.MigrateMediaQuery]:
        "Replace V2 media queries with new Breakpoint tokens",
    [Codemod.MigrateText]:
        "Replace V2_Text with new Typography components and V2_TextStyleHelper.getTextStyle() with Font",
    [Codemod.MigrateTextList]:
        "Replace V2_TextList with new Textlist components",
};

const TargetDirectoryPaths = {
    src: "src",
    codebase: ".",
};

interface UserSelection {
    selectedCodemods: string[];
    selectedTheme: Theme | null;
    targetPath: string;
}

// Return codemods in codemod folder
function listCodemods(): { name: string; value: string }[] {
    const codemods: string[] = fs.readdirSync(codemodsDir).filter((folder) => {
        return fs.lstatSync(path.join(codemodsDir, folder)).isDirectory();
    });

    const options = codemods.map((mod) => ({
        name: mod,
        value: mod,
        description: CodemodDescriptions[mod as Codemod],
    }));

    return options;
}

function runCodemods(selection: UserSelection): void {
    const { selectedCodemods, targetPath, selectedTheme } = selection;

    selectedCodemods.forEach((codemod) => {
        const codemodPath = path.join(codemodsDir, codemod, "index.ts");
        let command = `npx --yes jscodeshift --parser=tsx -t ${codemodPath} ${targetPath}`;

        if (codemod === Codemod.MigrateColour && selectedTheme) {
            command = `npx --yes jscodeshift --parser=tsx -t ${codemodPath} --mapping=${selectedTheme} ${targetPath}`;
        }

        console.log(
            `Running codemod: ${codemod} on target path: ${targetPath}`
        );

        try {
            execSync(command, { stdio: "inherit" });
            console.log(
                `Codemod ${codemod} executed successfully on ${targetPath}`
            );
        } catch (error) {
            if (error instanceof Error) {
                console.error(
                    `Error executing codemod ${codemod}: ${error.message}`
                );
            }

            throw error;
        }
    });
}

async function chooseTargetPath(): Promise<string | null> {
    const options = [
        {
            name: "src (./src)",
            value: TargetDirectoryPaths.src,
        },
        {
            name: "current directory (./)",
            value: TargetDirectoryPaths.codebase,
        },
        { name: "custom", value: "custom" },
    ];

    const selectedOption = await select({
        message: "Choose a target path:",
        choices: options,
    });

    if (selectedOption === "custom") {
        const customPath = await input({
            message: "Enter your custom path:",
            required: true,
        });

        const resolvedPath = path.resolve(customPath);

        if (!fs.existsSync(resolvedPath)) {
            console.error(`The path "${resolvedPath}" does not exist`);
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
        { name: "MyLegacy", value: Theme.MyLegacy },
        { name: "CCube", value: Theme.CCube },
        { name: "RBS", value: Theme.RBS },
        { name: "OneService", value: Theme.OneService },
    ];

    const selectedTheme = await select({
        message: "Select the theme that your project is using:",
        choices: themeOptions,
    });

    return selectedTheme;
}

async function getCodemodSelections(): Promise<UserSelection> {
    const codemods = listCodemods();
    if (codemods.length === 0) {
        throw new Error("No codemod scripts found");
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

    const targetPath = await chooseTargetPath();
    if (!targetPath) {
        throw new Error("No target path selected or provided");
    }

    return { selectedCodemods, selectedTheme, targetPath };
}

async function getConfirmation(selection: UserSelection) {
    const { selectedCodemods, selectedTheme, targetPath } = selection;

    const codemods = selectedCodemods.join(", ");
    const finalConfirmationMessage =
        `\nYou are about to run the following codemods: ${codemods}\n` +
        `Target path: ${targetPath}\n` +
        `${
            selectedTheme
                ? `Selected theme for "migrate-colour": ${selectedTheme}\n`
                : ""
        }`;

    console.log(finalConfirmationMessage);

    const finalConfirmation = await confirm({
        message: "Do you want to proceed?",
        default: true,
    });

    return finalConfirmation;
}

async function main(): Promise<void> {
    try {
        const selection = await getCodemodSelections();

        const finalConfirmation = await getConfirmation(selection);

        if (!finalConfirmation) {
            return;
        }

        runCodemods(selection);
    } catch (error: unknown) {
        if (error instanceof Error && error.name === "ExitPromptError") {
            // user exited, do nothing
        } else {
            throw error;
        }
    }
}

main();
