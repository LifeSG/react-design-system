import { StyleSheet } from "react-native";
import { ThemeColours } from "../theme-constants";

// ---------------------------------------------------------------------------
// Size constants
// ---------------------------------------------------------------------------
export const SIZE_MAP = {
    large: { height: 48, paddingHorizontal: 20, fontSize: 16, iconSize: 20 },
    default: { height: 40, paddingHorizontal: 16, fontSize: 14, iconSize: 18 },
    small: { height: 32, paddingHorizontal: 12, fontSize: 13, iconSize: 16 },
} as const;

// ---------------------------------------------------------------------------
// Base styles shared by every variant
// ---------------------------------------------------------------------------
export const buttonStyles = StyleSheet.create({
    base: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "transparent",
        gap: 8,
    },

    // --- Size ---
    sizeLarge: {
        height: SIZE_MAP.large.height,
        paddingHorizontal: SIZE_MAP.large.paddingHorizontal,
    },
    sizeDefault: {
        height: SIZE_MAP.default.height,
        paddingHorizontal: SIZE_MAP.default.paddingHorizontal,
    },
    sizeSmall: {
        height: SIZE_MAP.small.height,
        paddingHorizontal: SIZE_MAP.small.paddingHorizontal,
    },

    // --- Icon-only (square) ---
    iconOnlyLarge: {
        width: SIZE_MAP.large.height,
        paddingHorizontal: 0,
    },
    iconOnlyDefault: {
        width: SIZE_MAP.default.height,
        paddingHorizontal: 0,
    },
    iconOnlySmall: {
        width: SIZE_MAP.small.height,
        paddingHorizontal: 0,
    },

    // --- Style type: default (filled) ---
    styleDefault: {
        backgroundColor: ThemeColours.buttonDefaultBg,
        borderColor: "transparent",
    },
    styleDefaultPressed: {
        backgroundColor: ThemeColours.buttonDefaultBgHover,
    },
    styleDefaultText: {
        color: ThemeColours.buttonDefaultText,
    },

    // --- Style type: default + danger ---
    styleDefaultDanger: {
        backgroundColor: ThemeColours.bgErrorStrong,
        borderColor: "transparent",
    },
    styleDefaultDangerPressed: {
        backgroundColor: ThemeColours.bgErrorStrongHover,
    },
    styleDefaultDangerText: {
        color: ThemeColours.white,
    },

    // --- Style type: secondary (outlined) ---
    styleSecondary: {
        backgroundColor: "transparent",
        borderColor: ThemeColours.buttonSecondaryBorder,
    },
    styleSecondaryPressed: {
        backgroundColor: ThemeColours.bgHover,
    },
    styleSecondaryText: {
        color: ThemeColours.buttonSecondaryText,
    },

    // --- Style type: secondary + danger ---
    styleSecondaryDanger: {
        backgroundColor: "transparent",
        borderColor: ThemeColours.borderErrorStrong,
    },
    styleSecondaryDangerPressed: {
        backgroundColor: ThemeColours.bgHover,
    },
    styleSecondaryDangerText: {
        color: ThemeColours.textError,
    },

    // --- Style type: light ---
    styleLight: {
        backgroundColor: "transparent",
        borderColor: "transparent",
    },
    styleLightPressed: {
        backgroundColor: ThemeColours.bgHover,
    },
    styleLightText: {
        color: ThemeColours.buttonLightText,
    },

    // --- Style type: link ---
    styleLink: {
        backgroundColor: "transparent",
        borderColor: "transparent",
    },
    styleLinkPressed: {
        opacity: 0.7,
    },
    styleLinkText: {
        color: ThemeColours.buttonLinkText,
        textDecorationLine: "underline",
    },

    // --- Disabled ---
    disabled: {
        backgroundColor: ThemeColours.bgDisabled,
        borderColor: ThemeColours.borderDisabled,
    },
    disabledText: {
        color: ThemeColours.textDisabled,
    },

    // --- Text base ---
    textBase: {
        fontWeight: "600",
    },
    textLarge: {
        fontSize: SIZE_MAP.large.fontSize,
    },
    textDefault: {
        fontSize: SIZE_MAP.default.fontSize,
    },
    textSmall: {
        fontSize: SIZE_MAP.small.fontSize,
    },
});
