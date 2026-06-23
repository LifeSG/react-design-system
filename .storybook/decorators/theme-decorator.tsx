// adapted from https://github.com/storybookjs/storybook/blob/1a0665ccfe179cc3519e8619fe93dbb15c1ef835/code/addons/themes/src/decorators/provider.decorator.tsx
// integrates with `storybook-dark-mode` for dark mode support
import { useDarkMode } from "@storybook-community/storybook-dark-mode";
import { DecoratorHelpers } from "@storybook/addon-themes";
import type { DecoratorFunction, Renderer } from "storybook/internal/types";
import { ThemeProvider, ThemeType } from "../../src/theme";

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers;

const THEME_TYPE_TO_KEY_MAPPING: Record<ThemeType, string> = {
    "a11y-playground": "A11y Playground",
    bookingsg: "BookingSG",
    careercompass: "CareerCompass",
    ccube: "CCube",
    imda: "IMDA",
    lifesg: "LifeSG",
    mylegacy: "MyLegacy",
    oneservice: "OneService",
    pa: "PA",
    rbs: "RBS",
    "sgw-digital-lobby": "SGW Digital Lobby",
    smgs: "SMGS",
    spf: "SPF",
    supportgowhere: "SupportGoWhere",
};

type ThemeMapKey =
    (typeof THEME_TYPE_TO_KEY_MAPPING)[keyof typeof THEME_TYPE_TO_KEY_MAPPING];

const THEME_KEY_TO_TYPE_MAPPING: Record<ThemeMapKey, ThemeType> =
    Object.fromEntries(
        Object.entries(THEME_TYPE_TO_KEY_MAPPING).map(([key, value]) => [
            value as ThemeMapKey,
            key as ThemeType,
        ])
    );

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
