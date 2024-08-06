import { v2_ColorSet, v2_ValidationTypes } from "../../v2_color";

export const CCubeColorSet: v2_ColorSet = {
    Brand: {
        1: "#8D5197",
        2: "#FE3399",
        3: "#F58E8B",
        4: "#F9B5B2",
        5: "#FDDDD7",
        6: "#FFEEEA",
    },
    Primary: "#8D5197",
    PrimaryDark: "#6B3E73",
    Secondary: "#C02673",
    Accent: {
        Dark: {
            1: "#921D58",
            2: "#FF409F",
            3: "#FF88C4",
        },
        Light: {
            1: "#B07DB7",
            2: "#C7A2CC",
            3: "#D9C2DD",
            4: "#E9DBEB",
            5: "#F3ECF4",
            6: "#FAF7FA",
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
    } as v2_ValidationTypes,
    Shadow: {
        Accent: "rgba(210, 77, 255, 0.5)",
        Red: "rgba(221, 102, 102, 0.8)",
        Elevation: "rgba(75, 83, 159, 0.24)",
    },
};
