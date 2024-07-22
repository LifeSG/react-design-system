import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import {
    BaseTheme,
    BookingSGTheme,
    CCubeTheme,
    MyLegacyTheme,
    OneServiceTheme,
    RBSTheme,
} from "../src/theme";

const preview: Preview = {
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                LifeSG: BaseTheme,
                BookingSG: BookingSGTheme,
                CCube: CCubeTheme,
                MyLegacy: MyLegacyTheme,
                RBS: RBSTheme,
                OneService: OneServiceTheme,
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
