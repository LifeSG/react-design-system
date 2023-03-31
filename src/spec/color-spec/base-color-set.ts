import { ColorSet, ValidationTypes } from "../../color/types";

export const BaseColorSet: ColorSet = {
    Brand: {
        1: "#EF413D",
        2: "#F26664",
        3: "#F58E8B",
        4: "#F9B5B2",
        5: "#FDDDD7",
        6: "#FFEEEA",
    },
    Primary: "#1C76D5",
    PrimaryDark: "#1869BF",
    Secondary: "#0056b3",
    Accent: {
        Dark: {
            1: "#465A88",
            2: "#556D99",
            3: "#8D8DBF",
        },
        Light: {
            1: "#57A9FF",
            2: "#81BFFF",
            3: "#BED7FF",
            4: "#E2ECFD",
            5: "#F6F8FF",
            6: "#FBFCFE",
        },
    },
    Neutral: {
        1: "#282828", // Text Black
        2: "#424242",
        3: "#686868", // Text Grey
        4: "#A4A4A4",
        5: "#E0E4E5",
        6: "#ECEFEF",
        7: "#F8F8F8",
        8: "#FFFFFF",
    },
    Validation: {
        Green: {
            Text: "#097123", // Validation Text
            Icon: "#4FC029",
            Border: "#95D97F",
            Background: "#F9FDF8", // Validation Background
        },
        Orange: {
            Text: "#B34E00", // Validation Text
            Icon: "#FEAB10",
            Border: "#F9CB77",
            Background: "#FFFCF7", // Validation Background
            Badge: "#F57F17", // Orange Badge Notification
        },
        Red: {
            Text: "#C60000", // Validation Text
            Icon: "#C60000",
            Border: "#DD6666",
            Background: "#FDF7F7", // Validation Background
        },
        Blue: {
            Text: "#064D70", // Validation Text
            Icon: " #066391",
            Border: "#84B7DB",
            Background: "#E8F4FA", // Validation Background
        },
    } as ValidationTypes,
    Shadow: {
        Accent: "rgba(87, 169, 255, 0.5)",
        Red: "rgba(221, 102, 102, 0.8)",
        Elevation: "rgba(75, 83, 159, 0.24)",
    },
};
