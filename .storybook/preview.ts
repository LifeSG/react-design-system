import type { Preview } from "@storybook/react-webpack5";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { withThemeFromJSXProvider } from "./decorators/theme-decorator";

import "./preview.css";

const preview: Preview = {
    decorators: [withThemeFromJSXProvider()],
    parameters: {
        options: {
            storySort: {
                order: [
                    "Getting started",
                    "Installation",
                    "Foundations",
                    [
                        "Introduction",
                        "Basics",
                        "Advanced",
                        "Colours",
                        "Font",
                        "Breakpoint",
                        "Spacing",
                        "Motion",
                        "Radius",
                        "Border",
                        "Shadow",
                    ],
                    "Core",
                    ["Typography", "Layout", "Icon", "DashedBorder"],
                    "Content",
                    "Navigation",
                    "Selection and input",
                    ["Button", ["Base", "With Icon"]],
                    "Feedback indicators",
                    "Overlays",
                    "General",
                    ["Animations", "*"],
                    "Form",
                    "Data Input",
                    "Modules",
                ],
            },
        },
        actions: { disable: true },
        controls: { disable: true },
        layout: "centered",
        viewport: {
            options: INITIAL_VIEWPORTS,
        },
        darkMode: {
            stylePreview: true,
            darkClass: "storybook-dark-mode",
            lightClass: "storybook-light-mode",
        },
        docs: {
            codePanel: true,
        },
    },
};

export default preview;
