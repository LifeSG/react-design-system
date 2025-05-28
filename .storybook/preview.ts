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
    A11yTheme,
} from "../src/theme";

const preview: Preview = {
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                LifeSG: LifeSGTheme,
                BookingSG: BookingSGTheme,
                CCube: CCubeTheme,
                MyLegacy: MyLegacyTheme,
                RBS: RBSTheme,
                // TODO: update when OS theme is added
                // OneService: V2_OneServiceTheme,
                PA: PATheme,
                A11y: A11yTheme,
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
    },
};

export default preview;
