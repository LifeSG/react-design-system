// adapted from https://github.com/storybookjs/storybook/blob/1a0665ccfe179cc3519e8619fe93dbb15c1ef835/code/addons/themes/src/decorators/provider.decorator.tsx
// integrates with `storybook-dark-mode` for dark mode support
import { useDarkMode } from "@storybook-community/storybook-dark-mode";
import { DecoratorHelpers } from "@storybook/addon-themes";
import type { DecoratorFunction, Renderer } from "storybook/internal/types";
import { ThemeProvider } from "../../src/theme";
import { getDefaultFontPresetForTheme } from "../../src/theme/theme-provider/preset";
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
        const selectedThemeType = THEME_KEY_TO_TYPE_MAPPING[selected];
        const mode = isDark ? "dark" : "light";

        return (
            <ThemeProvider
                theme={selectedThemeType}
                mode={mode}
                fontPreset={getDefaultFontPresetForTheme(selectedThemeType)}
            >
                {storyFn()}
            </ThemeProvider>
        );
    };
};
