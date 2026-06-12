// adapted from https://github.com/storybookjs/storybook/blob/1a0665ccfe179cc3519e8619fe93dbb15c1ef835/code/addons/themes/src/decorators/provider.decorator.tsx
// integrates with `storybook-dark-mode` for dark mode support
import { useDarkMode } from "@storybook-community/storybook-dark-mode";
import { DecoratorHelpers } from "@storybook/addon-themes";
import type { DecoratorFunction, Renderer } from "storybook/internal/types";
import { ThemeProvider, ThemeType } from "../../src/theme";

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers;

type ThemeMapKey = keyof typeof THEME_KEY_TO_TYPE_MAPPING;

const THEME_KEY_TO_TYPE_MAPPING = {
    "A11y Playground": "a11y-playground",
    BookingSG: "bookingsg",
    CCube: "ccube",
    IMDA: "imda",
    LifeSG: "lifesg",
    MyLegacy: "mylegacy",
    OneService: "oneservice",
    PA: "pa",
    RBS: "rbs",
    "SGW Digital Lobby": "sgw-digital-lobby",
    SPF: "spf",
    SupportGoWhere: "supportgowhere",
};

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
