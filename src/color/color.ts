import { getThemeColors } from "../theme/color-theme-helper";
import { PropertiesToType } from "../util/utility-types";
import { ColorSet } from "./types";

export const Color: PropertiesToType<
    ColorSet,
    ReturnType<typeof getThemeColors>
> = {
    Brand: {
        1: getThemeColors("Brand.1"),
        2: getThemeColors("Brand.2"),
        3: getThemeColors("Brand.3"),
        4: getThemeColors("Brand.4"),
        5: getThemeColors("Brand.5"),
        6: getThemeColors("Brand.6"),
    },
    Primary: getThemeColors("Primary"),
    PrimaryDark: getThemeColors("PrimaryDark"),
    Secondary: getThemeColors("Secondary"),
    Accent: {
        Light: {
            1: getThemeColors("Accent.Light.1"),
            2: getThemeColors("Accent.Light.2"),
            3: getThemeColors("Accent.Light.3"),
            4: getThemeColors("Accent.Light.4"),
            5: getThemeColors("Accent.Light.5"),
            6: getThemeColors("Accent.Light.6"),
        },
        Dark: {
            1: getThemeColors("Accent.Dark.1"),
            2: getThemeColors("Accent.Dark.2"),
            3: getThemeColors("Accent.Dark.3"),
        },
    },
    Neutral: {
        1: getThemeColors("Neutral.1"),
        2: getThemeColors("Neutral.2"),
        3: getThemeColors("Neutral.3"),
        4: getThemeColors("Neutral.4"),
        5: getThemeColors("Neutral.5"),
        6: getThemeColors("Neutral.6"),
        7: getThemeColors("Neutral.7"),
        8: getThemeColors("Neutral.8"),
    },
    Validation: {
        Green: {
            Text: getThemeColors("Validation.Green.Text"),
            Icon: getThemeColors("Validation.Green.Icon"),
            Border: getThemeColors("Validation.Green.Border"),
            Background: getThemeColors("Validation.Green.Background"),
        },
        Orange: {
            Text: getThemeColors("Validation.Orange.Text"),
            Icon: getThemeColors("Validation.Orange.Icon"),
            Border: getThemeColors("Validation.Orange.Border"),
            Background: getThemeColors("Validation.Orange.Background"),
            Badge: getThemeColors("Validation.Orange.Badge"),
        },
        Red: {
            Text: getThemeColors("Validation.Red.Text"),
            Icon: getThemeColors("Validation.Red.Icon"),
            Border: getThemeColors("Validation.Red.Border"),
            Background: getThemeColors("Validation.Red.Background"),
        },
        Blue: {
            Text: getThemeColors("Validation.Blue.Text"),
            Icon: getThemeColors("Validation.Blue.Icon"),
            Border: getThemeColors("Validation.Blue.Border"),
            Background: getThemeColors("Validation.Blue.Background"),
        },
    },
    Shadow: {
        Accent: getThemeColors("Shadow.Accent"),
        Red: getThemeColors("Shadow.Red"),
        Elevation: getThemeColors("Shadow.Elevation"),
    },
};
