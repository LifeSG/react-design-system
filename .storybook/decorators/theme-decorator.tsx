// adapted from https://github.com/storybookjs/storybook/blob/1a0665ccfe179cc3519e8619fe93dbb15c1ef835/code/addons/themes/src/decorators/provider.decorator.tsx
// integrates with `storybook-dark-mode` for dark mode support
import { DecoratorHelpers } from "@storybook/addon-themes";
import { useDarkMode } from "storybook-dark-mode";
import type { DecoratorFunction, Renderer } from "storybook/internal/types";

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers;

type Theme = Record<string, any>;
type ThemeMap = Record<string, Theme>;

export interface ProviderStrategyConfiguration {
    Provider?: any;
    GlobalStyles?: any;
    defaultTheme?: string;
    themes?: ThemeMap;
}

export const withThemeFromJSXProvider = <TRenderer extends Renderer = any>({
    Provider,
    GlobalStyles,
    defaultTheme,
    themes = {},
}: ProviderStrategyConfiguration): DecoratorFunction<TRenderer> => {
    const themeNames = Object.keys(themes);
    const initialTheme = defaultTheme || themeNames[0];

    initializeThemeState(themeNames, initialTheme);

    // eslint-disable-next-line react/display-name
    return (storyFn, context) => {
        const mode = useDarkMode();
        const selectedTheme = pluckThemeFromContext(context);
        const { themeOverride } = context.parameters.themes ?? {};

        const selected = themeOverride || selectedTheme || initialTheme;
        const pairs = Object.entries(themes);

        const theme = pairs.length === 1 ? pairs[0] : themes[selected];

        if (!Provider) {
            return (
                <>
                    {GlobalStyles && <GlobalStyles />}
                    {storyFn()}
                </>
            );
        }

        return (
            <Provider theme={{ ...theme, colourMode: mode ? "dark" : "light" }}>
                {GlobalStyles && <GlobalStyles />}
                {storyFn()}
            </Provider>
        );
    };
};
