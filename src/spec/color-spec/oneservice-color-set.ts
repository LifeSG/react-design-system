import { ColorSet, ValidationTypes } from "../../color/types";

export const OneServiceColorSet: ColorSet = {
    Brand: {
        1: "#009F97",
        2: "#49C3CA",
        3: "#A81E5E",
        4: "#ED1386",
        5: "#F7D414",
        6: "#000000", // No brand6 for OneService
    },
    Primary: "#2D7990",
    PrimaryDark: "#205666",
    Secondary: "#0056B3",
    Accent: {
        Dark: {
            1: "#4B539F",
            2: "#6D74B1",
            3: "#959BC5",
        },
        Light: {
            1: "#5D97A9",
            2: "#8CB6C2",
            3: "#B2CED6",
            4: "#D1E2E7",
            5: "#E8F0F3",
            6: "#F7FAFB",
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
        Accent: "rgba(45, 121, 144, 0.5)",
        Red: "rgba(221, 102, 102, 0.8)",
        Elevation: "rgba(75, 83, 159, 0.24)",
    },
};
