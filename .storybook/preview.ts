import { INITIAL_VIEWPORTS } from "storybook/viewport";
import type { Preview } from "@storybook/react-webpack5";
import { withThemeFromJSXProvider } from "./decorators/theme-decorator";

import "../src/theme/styles/default.css";

const preview: Preview = {
    decorators: [withThemeFromJSXProvider()],
    parameters: {
        options: {
            storySort: {
                order: [
                    "Getting started",
                    ["Installation", "Themes", "Media Query", "Layout"],
                    "Foundations",
                    [
                        "Introduction",
                        "Themes",
                        ["Introduction", "Advanced Usage", "Dark Mode", "*"],
                        "Colours",
                        "Font",
                        "Breakpoint",
                        "Spacing",
                        "Motion",
                        "Radius",
                        "Border",
                    ],
                    "Core",
                    ["Typography", "Layout", "Icon"],
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
                    "V2",
                    [
                        "Introduction",
                        "Themes",
                        "Color",
                        "Text",
                        "Media Query",
                        "Layout",
                    ],
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
