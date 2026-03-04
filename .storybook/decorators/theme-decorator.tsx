// adapted from https://github.com/storybookjs/storybook/blob/1a0665ccfe179cc3519e8619fe93dbb15c1ef835/code/addons/themes/src/decorators/provider.decorator.tsx
// integrates with `storybook-dark-mode` for dark mode support
import { useDarkMode } from "@storybook-community/storybook-dark-mode";
import { DecoratorHelpers } from "@storybook/addon-themes";
import type { DecoratorFunction, Renderer } from "storybook/internal/types";
import { ThemeProvider, ThemeType } from "../../src/theme";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
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
} from "../../src/v3_theme";

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers;

type ThemeMapKey = keyof typeof V3_THEME_MAP;

export const V3_THEME_MAP = {
    "A11y Playground": V3_A11yPlaygroundTheme,
    BookingSG: V3_BookingSGTheme,
    CCube: V3_CCubeTheme,
    IMDA: V3_IMDATheme,
    LifeSG: V3_LifeSGTheme,
    MyLegacy: V3_MyLegacyTheme,
    OneService: V3_OneServiceTheme,
    PA: V3_PATheme,
    RBS: V3_RBSTheme,
    "SGW Digital Lobby": V3_SGWDigitalLobbyTheme,
    SPF: V3_SPFTheme,
    SupportGoWhere: V3_SupportGoWhereTheme,
};

const _toKebab = (value: string) =>
    value.toLowerCase().trim().replace(/\s+/g, "-");

export const withThemeFromJSXProvider = <
    TRenderer extends Renderer = any
>(): DecoratorFunction<TRenderer> => {
    const themeNames = Object.keys(V3_THEME_MAP);
    const initialTheme = themeNames[0];

    initializeThemeState(themeNames, initialTheme);

    // eslint-disable-next-line react/display-name
    return (storyFn, context) => {
        const isDark = useDarkMode();
        const selectedTheme = pluckThemeFromContext(context);
        const { themeOverride } = context.parameters.themes ?? {};

        const selected: ThemeMapKey =
            themeOverride || selectedTheme || initialTheme;
        const pairs = Object.entries(V3_THEME_MAP);

        const theme = pairs.length === 1 ? pairs[0] : V3_THEME_MAP[selected];
        const mode = isDark ? "dark" : "light";

        return (
            <ThemeProvider theme={_toKebab(selected) as ThemeType} mode={mode}>
                <StyledComponentsThemeProvider
                    theme={{ ...theme, colourMode: mode }}
                >
                    {storyFn()}
                </StyledComponentsThemeProvider>
            </ThemeProvider>
        );
    };
};
