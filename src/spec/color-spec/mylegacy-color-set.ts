import { V2_ColorSet, V2_ValidationTypes } from "../../v2_color/types";

export const MyLegacyColorSet: V2_ColorSet = {
    Brand: {
        1: "#24588D",
        2: "#FFC166",
        3: "#F58E8B",
        4: "#F9B5B2",
        5: "#FDDDD7",
        6: "#FFEEEA",
    },
    Primary: "#0C7BB3",
    PrimaryDark: "#066391",
    Secondary: "#066391",
    Accent: {
        Dark: {
            1: "#4B539F",
            2: "#6D74B1",
            3: "#959BC5",
        },
        Light: {
            1: "#229AD6",
            2: "#8DD4F7",
            3: "#A4DDF9",
            4: "#BBE5FA",
            5: "#E8F4FA",
            6: "#F7FBFC",
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
            Text: "#1A5230", // Validation Text
            Icon: "#2A854E",
            Border: "#7DDBA3",
            Background: "#E1FAEB", // Validation Background
        },
        Orange: {
            Text: "#693D07", // Validation Text
            Icon: "#CF7911",
            Border: "#F9CB77",
            Background: "#FCF2E6", // Validation Background
            Badge: "#F57F17", // Orange Badge Notification
        },
        Red: {
            Text: "#CB2213", // Validation Text
            Icon: "#CB2213",
            Border: "#DC6363",
            Background: "#FAF0F0", // Validation Background
        },
        Blue: {
            Text: "#064D70", // Validation Text
            Icon: " #066391",
            Border: "#84B7DB",
            Background: "#E8F4FA", // Validation Background
        },
    } as V2_ValidationTypes,
    Shadow: {
        Accent: "rgba(34, 154, 214, 0.6)",
        Red: "rgba(203, 34, 19, 0.5)",
        Elevation: "rgba(75, 83, 159, 0.24)",
    },
};
