import { checkbox, confirm, input, select } from "@inquirer/prompts";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const codemodsDir =
    process.env.ENV === "dev"
        ? path.join(process.cwd(), "codemods")
        : path.join(
              process.cwd(),
              "node_modules/@lifesg/react-design-system/codemods"
          );

enum Codemod {
    MigratePopover = "migrate-popover",
}

const theme = {
    helpMode: "always" as const,
};

const CodemodDescriptions: { [key in Codemod]: string } = {
    [Codemod.MigratePopover]:
        "Replace deprecated Popover and migrate PopoverV2 imports",
};

const TargetDirectoryPaths = {
    src: "src",
    codebase: ".",
};

interface UserSelection {
    selectedCodemods: string[];
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
    const { selectedCodemods, targetPath } = selection;

    selectedCodemods.forEach((codemod) => {
        const codemodPath = path.join(codemodsDir, codemod, "index.ts");
        let command = `npx --yes jscodeshift --parser=tsx -t ${codemodPath} ${targetPath}`;

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

    const targetPath = await chooseTargetPath();
    if (!targetPath) {
        throw new Error("No target path selected or provided");
    }

    return { selectedCodemods, targetPath };
}

async function getConfirmation(selection: UserSelection) {
    const { selectedCodemods, targetPath } = selection;

    const codemods = selectedCodemods.join(", ");
    const finalConfirmationMessage =
        `\nYou are about to run the following codemods: ${codemods}\n` +
        `Target path: ${targetPath}\n`;

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
