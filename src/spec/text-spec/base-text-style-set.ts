import { FontFamily } from "./font-spec";
import { TextStyleSetType } from "../../text/types";

// In rem unit
export const BaseTextStyleSet: TextStyleSetType = {
    D1: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 3,
        fontWeight: 700,
        lineHeight: 4,
        letterSpacing: -0.056,
    },
    D2: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 2.5,
        fontWeight: 700,
        lineHeight: 3.5,
        letterSpacing: -0.032,
    },
    D3: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1.625,
        fontWeight: 700,
        lineHeight: 2.25,
    },
    D4: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1.375,
        fontWeight: 700,
        lineHeight: 1.75,
    },
    DBody: {
        fontFamily: FontFamily.OpenSans.Regular,
        fontSize: 1.375,
        lineHeight: 1.75,
    },
    H1: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 2,
        fontWeight: 700,
        lineHeight: 2.5,
    },
    H2: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1.625,
        fontWeight: 700,
        lineHeight: 2.25,
    },
    H3: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1.375,
        fontWeight: 700,
        lineHeight: 1.75,
    },
    H4: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1.125,
        fontWeight: 700,
        lineHeight: 1.625,
    },
    H5: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1,
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: 0.014,
    },
    H6: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 0.875,
        fontWeight: 700,
        lineHeight: 1.6,
        letterSpacing: 0.012,
    },
    Body: {
        fontFamily: FontFamily.OpenSans.Regular,
        fontSize: 1.125,
        lineHeight: 1.625,
    },
    BodySmall: {
        fontFamily: FontFamily.OpenSans.Regular,
        fontSize: 1,
        lineHeight: 1.5,
        letterSpacing: 0.014,
    },
    XSmall: {
        fontFamily: FontFamily.OpenSans.Regular,
        fontSize: 0.75,
        lineHeight: 1.2,
        letterSpacing: 0.012,
    },
};
