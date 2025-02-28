import { ColorSet, ValidationTypes } from "../../color/types";

export const PAColorSet: ColorSet = {
    Brand: {
        1: "#89000b",
        2: "#A91717",
        3: "#C4000F",
        4: "#D0333F",
        5: "#DC666F",
        6: "#f6d6d9",
    },
    Primary: "#A91717",
    PrimaryDark: "#999999",
    Secondary: "#333333",
    Accent: {
        Dark: {
            1: "#89000b",
            2: "#A91717",
            /**
             * @deprecated
             * no Accent.Dark.3 for PA
             */
            3: "#000000",
        },
        Light: {
            1: "#C4000F",
            2: "#D0333F",
            3: "#DC666F",
            4: "#f6d6d9",
            5: "#F6F8FF",
            6: "#FBFCFE",
        },
    },
    Neutral: {
        1: "#000000", // Text Black
        2: "#333333",
        3: "#4d4d4d", // Text Grey
        4: "#999999",
        5: "#B3B3B3",
        6: "#E6E6E6",
        7: "#F7F7F7",
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
        Accent: "#B3B3B3",
        Red: "#DC666F",
        Elevation: "rgba(75, 83, 159, 0.24)",
    },
};
