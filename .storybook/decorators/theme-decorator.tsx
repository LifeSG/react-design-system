// adapted from https://github.com/storybookjs/storybook/blob/1a0665ccfe179cc3519e8619fe93dbb15c1ef835/code/addons/themes/src/decorators/provider.decorator.tsx
// integrates with `storybook-dark-mode` for dark mode support
import { useDarkMode } from "@storybook-community/storybook-dark-mode";
import { DecoratorHelpers } from "@storybook/addon-themes";
import type { DecoratorFunction, Renderer } from "storybook/internal/types";
import { ThemeProvider, ThemeType } from "../../src/theme";
import { THEME_KEY_TO_TYPE_MAPPING, type ThemeMapKey } from "./theme-mapping";

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers;

export const withThemeFromJSXProvider = <
    TRenderer extends Renderer = any
>(): DecoratorFunction<TRenderer> => {
    const themeNames = Object.keys(THEME_KEY_TO_TYPE_MAPPING);
    const initialTheme: ThemeMapKey = "LifeSG";

    initializeThemeState(themeNames, initialTheme);

    // eslint-disable-next-line react/display-name
    return (storyFn, context) => {
        const isDark = useDarkMode();
        const selectedTheme = pluckThemeFromContext(context);
        const { themeOverride } = context.parameters.themes ?? {};

        const selected: ThemeMapKey =
            themeOverride || selectedTheme || initialTheme;
        const mode = isDark ? "dark" : "light";

        return (
            <ThemeProvider
                theme={THEME_KEY_TO_TYPE_MAPPING[selected] as ThemeType}
                mode={mode}
            >
                {storyFn()}
            </ThemeProvider>
        );
    };
};
