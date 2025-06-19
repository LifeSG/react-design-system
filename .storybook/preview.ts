import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import {
    A11yPlaygroundTheme,
    BookingSGTheme,
    CCubeTheme,
    LifeSGTheme,
    MyLegacyTheme,
    PATheme,
    RBSTheme,
} from "../src/theme";
import { withThemeFromJSXProvider } from "./decorators/theme-decorator";

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
                //"OneService": OneServiceTheme,
                PA: PATheme,
                A11yPlayground: A11yPlaygroundTheme,
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
        darkMode: {
            stylePreview: true,
            darkClass: "storybook-dark-mode",
            lightClass: "storybook-light-mode",
        },
    },
};

export default preview;
