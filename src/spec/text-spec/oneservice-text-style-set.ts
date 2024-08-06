import { FontFamily } from "./font-spec";
import { v2_TextStyleSetType } from "../../v2_text/types";

// In rem unit
export const OneServiceTextStyleSet: v2_TextStyleSetType = {
    D1: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 2.5,
        fontWeight: 700,
        lineHeight: 3.5,
    },
    D2: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 2,
        fontWeight: 700,
        lineHeight: 3,
    },
    /* not used for OS */
    D3: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1.625,
        fontWeight: 700,
        lineHeight: 2.25,
    },
    /* not used for OS */
    D4: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1.375,
        fontWeight: 700,
        lineHeight: 1.75,
    },
    DBody: {
        fontFamily: FontFamily.OpenSans.Regular,
        fontSize: 1.125,
        lineHeight: 1.625,
    },
    H1: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1.75,
        fontWeight: 700,
        lineHeight: 2.625,
    },
    H2: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1.375,
        fontWeight: 700,
        lineHeight: 2,
    },
    H3: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1.125,
        fontWeight: 700,
        lineHeight: 1.625,
    },
    H4: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 1,
        fontWeight: 700,
        lineHeight: 1.5,
    },
    H5: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 0.875,
        fontWeight: 700,
        lineHeight: 1.313,
    },
    H6: {
        fontFamily: FontFamily.OpenSans.Bold,
        fontSize: 0.75,
        fontWeight: 700,
        lineHeight: 1.125,
    },
    Body: {
        fontFamily: FontFamily.OpenSans.Regular,
        fontSize: 1,
        lineHeight: 1.5,
    },
    BodySmall: {
        fontFamily: FontFamily.OpenSans.Regular,
        fontSize: 0.875,
        lineHeight: 1.313,
    },
    XSmall: {
        fontFamily: FontFamily.OpenSans.Regular,
        fontSize: 0.75,
        lineHeight: 1.125,
    },
};
