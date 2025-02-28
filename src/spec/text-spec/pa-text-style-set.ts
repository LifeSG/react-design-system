import { FontFamily } from "./font-spec";
import { TextStyleSetType } from "../../text/types";

// In rem unit
export const PATextStyleSet: TextStyleSetType = {
    D1: {
        fontFamily: FontFamily.Lato,
        fontSize: 3,
        fontWeight: 700,
        lineHeight: 3.5,
    },
    D2: {
        fontFamily: FontFamily.Lato,
        fontSize: 2.5,
        fontWeight: 700,
        lineHeight: 3,
    },
    /**
     * @deprecated
     * no D3 for PA
     */
    D3: {
        fontFamily: FontFamily.Lato,
        fontSize: 1.625,
        fontWeight: 700,
        lineHeight: 2.25,
    },
    /**
     * @deprecated
     * no D3 for PA
     */
    D4: {
        fontFamily: FontFamily.Lato,
        fontSize: 1.375,
        fontWeight: 700,
        lineHeight: 1.75,
    },
    /**
     * @deprecated
     * no DBody for PA
     */
    DBody: {
        fontFamily: FontFamily.Lato,
        fontSize: 1.125,
        lineHeight: 1.625,
    },
    H1: {
        fontFamily: FontFamily.Lato,
        fontSize: 2,
        fontWeight: 700,
        lineHeight: 2.5,
    },
    H2: {
        fontFamily: FontFamily.Lato,
        fontSize: 1.675,
        fontWeight: 700,
        lineHeight: 2.25,
    },
    H3: {
        fontFamily: FontFamily.Lato,
        fontSize: 1.375,
        fontWeight: 700,
        lineHeight: 1.75,
    },
    H4: {
        fontFamily: FontFamily.Lato,
        fontSize: 1.125,
        fontWeight: 700,
        lineHeight: 1.625,
    },
    H5: {
        fontFamily: FontFamily.Lato,
        fontSize: 1,
        fontWeight: 700,
        lineHeight: 1.5,
    },
    H6: {
        fontFamily: FontFamily.Lato,
        fontSize: 0.875,
        fontWeight: 700,
        lineHeight: 1.6,
    },
    Body: {
        fontFamily: FontFamily.Lato,
        fontSize: 1.375,
        lineHeight: 1.5,
    },
    BodySmall: {
        fontFamily: FontFamily.Lato,
        fontSize: 1,
        lineHeight: 1.5,
    },
    XSmall: {
        fontFamily: FontFamily.Lato,
        fontSize: 0.75,
        lineHeight: 1.2,
    },
};
