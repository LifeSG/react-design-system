import { ColorSet, ValidationTypes } from "../../color/types";

export const RBSColorSet: ColorSet = {
    Brand: {
        1: "#3E4DFF",
        2: "#AEACFF",
        3: "#AD44FF",
        4: "#F9B5B2",
        5: "#FDDDD7",
        6: "#FFEEEA",
    },
    Primary: "#4855D4",
    PrimaryDark: "#3E49B2",
    Secondary: "#364891",
    Accent: {
        Dark: {
            1: "#5E516E",
            2: "#7A6F87",
            3: "#C5C0CC",
        },
        Light: {
            1: "#8397FC",
            2: "#ABB8FC",
            3: "#CED6FD ",
            4: "#E1E4FA",
            5: "#F0F2FF",
            6: "#FAFBFF",
        },
    },
    Neutral: {
        1: "#282828",
        2: "#424242",
        3: "#686868",
        4: "#A4A4A4",
        5: "#E0E4E5",
        6: "#ECEFEF",
        7: "#F8F8F8",
        8: "#FFFFFF",
    },
    Validation: {
        Green: {
            Text: "#097123",
            Icon: "#4FC029",
            Border: "#95D97F",
            Background: "#F9FDF8",
        },
        Orange: {
            Text: "#B34E00",
            Icon: "#FEAB10",
            Border: "#F9CB77",
            Background: "#FFFCF7",
            Badge: "#F57F17",
        },
        Red: {
            Text: "#C60000",
            Icon: "#C60000",
            Border: "#DD6666",
            Background: "#FDF7F7",
        },
        Blue: {
            Text: "#064D70",
            Icon: " #066391",
            Border: "#84B7DB",
            Background: "#E8F4FA",
        },
    } as ValidationTypes,
    Shadow: {
        Accent: "rgba(131, 151, 252, 0.5)",
        Red: "rgba(221, 102, 102, 0.8)",
        Elevation: "rgba(75, 83, 159, 0.24)",
    },
};
