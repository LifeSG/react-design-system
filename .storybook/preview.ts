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
                        "Typography",
                        "Breakpoint",
                        "Spacing",
                        "Animation",
                    ],
                    "Core",
                    ["Typography", "Layout", "Icon"],
                    "General",
                    ["Animations", "Button", ["Base", "With Icon"], "*"],
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
            viewports: INITIAL_VIEWPORTS,
        },
    },
};

export default preview;
