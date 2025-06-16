import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import {
    LifeSGTheme,
    BookingSGTheme,
    CCubeTheme,
    MyLegacyTheme,
    RBSTheme,
    PATheme,
    A11yPlaygroundTheme,
} from "../src/theme";

const preview: Preview = {
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                "LifeSG (Light)": LifeSGTheme.light,
                "BookingSG (Light)": BookingSGTheme.light,
                "CCube (Light)": CCubeTheme.light,
                "MyLegacy (Light)": MyLegacyTheme.light,
                "RBS (Light)": RBSTheme.light,
                // TODO: update when OS theme is added
                //"OneService (Light)": OneServiceTheme.light,
                "PA (Light)": PATheme.light,
                "A11yPlayground (Light)": A11yPlaygroundTheme.light,
                "A11yPlayground (Dark)": A11yPlaygroundTheme.dark,
            },
            Provider: ThemeProvider,
        }),
    ],
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
            viewports: INITIAL_VIEWPORTS,
        },
        backgrounds: {
            default: "light",
            values: [
                {
                    name: "light",
                    value: "#ffffff",
                },
                {
                    name: "dark",
                    value: "#000000",
                },
            ],
        },
    },
};

export default preview;
