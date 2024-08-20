import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import {
    V2_BaseTheme,
    V2_BookingSGTheme,
    V2_CCubeTheme,
    V2_MyLegacyTheme,
    V2_OneServiceTheme,
    V2_RBSTheme,
} from "../src/v2_theme";

const preview: Preview = {
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                LifeSG: V2_BaseTheme,
                BookingSG: V2_BookingSGTheme,
                CCube: V2_CCubeTheme,
                MyLegacy: V2_MyLegacyTheme,
                RBS: V2_RBSTheme,
                OneService: V2_OneServiceTheme,
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
