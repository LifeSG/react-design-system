import { INITIAL_VIEWPORTS } from "storybook/viewport";
import type { Preview } from "@storybook/react-webpack5";
import { ThemeProvider } from "styled-components";
import {
    V3_A11yPlaygroundTheme,
    V3_BookingSGTheme,
    V3_CCubeTheme,
    V3_IMDATheme,
    V3_LifeSGTheme,
    V3_MyLegacyTheme,
    V3_OneServiceTheme,
    V3_PATheme,
    V3_RBSTheme,
    V3_SPFTheme,
    V3_SupportGoWhereTheme,
    V3_SGWDigitalLobbyTheme,
} from "../src/v3_theme";
import { withThemeFromJSXProvider } from "./decorators/theme-decorator";

export const V3_THEME_MAP = {
    LifeSG: V3_LifeSGTheme,
    BookingSG: V3_BookingSGTheme,
    CCube: V3_CCubeTheme,
    MyLegacy: V3_MyLegacyTheme,
    OneService: V3_OneServiceTheme,
    PA: V3_PATheme,
    SupportGoWhere: V3_SupportGoWhereTheme,
    "SGW Digital Lobby": V3_SGWDigitalLobbyTheme,
    "A11y Playground": V3_A11yPlaygroundTheme,
    IMDA: V3_IMDATheme,
    RBS: V3_RBSTheme,
    SPF: V3_SPFTheme,
};

const preview: Preview = {
    decorators: [
        withThemeFromJSXProvider({
            themes: V3_THEME_MAP,
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
