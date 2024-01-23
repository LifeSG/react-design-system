import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import {
    BaseTheme,
    BookingSGTheme,
    CCubeTheme,
    MyLegacyTheme,
    RBSTheme,
} from "../src/theme";
import { ThemeProvider } from "styled-components";

const preview = {
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                LifeSG: BaseTheme,
                BookingSG: BookingSGTheme,
                CCube: CCubeTheme,
                MyLegacy: MyLegacyTheme,
                RBS: RBSTheme,
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
