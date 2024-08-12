import { getThemeTextStyles } from "../theme/text-theme-helper";
import { PropertiesToType } from "../util/utility-types";
import { V2_TextStyleSetType } from "./types";

/** @deprecated */
export const V2_TextStyle: PropertiesToType<
    V2_TextStyleSetType,
    ReturnType<typeof getThemeTextStyles>
> = {
    D1: {
        fontFamily: getThemeTextStyles("D1.fontFamily"),
        fontSize: getThemeTextStyles("D1.fontSize"),
        fontWeight: getThemeTextStyles("D1.fontWeight"),
        lineHeight: getThemeTextStyles("D1.lineHeight"),
        letterSpacing: getThemeTextStyles("D1.letterSpacing"),
    },
    D2: {
        fontFamily: getThemeTextStyles("D2.fontFamily"),
        fontSize: getThemeTextStyles("D2.fontSize"),
        fontWeight: getThemeTextStyles("D2.fontWeight"),
        lineHeight: getThemeTextStyles("D2.lineHeight"),
        letterSpacing: getThemeTextStyles("D2.letterSpacing"),
    },
    D3: {
        fontFamily: getThemeTextStyles("D3.fontFamily"),
        fontSize: getThemeTextStyles("D3.fontSize"),
        fontWeight: getThemeTextStyles("D3.fontWeight"),
        lineHeight: getThemeTextStyles("D3.lineHeight"),
        letterSpacing: getThemeTextStyles("D3.letterSpacing"),
    },
    D4: {
        fontFamily: getThemeTextStyles("D4.fontFamily"),
        fontSize: getThemeTextStyles("D4.fontSize"),
        fontWeight: getThemeTextStyles("D4.fontWeight"),
        lineHeight: getThemeTextStyles("D4.lineHeight"),
        letterSpacing: getThemeTextStyles("D4.letterSpacing"),
    },
    DBody: {
        fontFamily: getThemeTextStyles("DBody.fontFamily"),
        fontSize: getThemeTextStyles("DBody.fontSize"),
        fontWeight: getThemeTextStyles("DBody.fontWeight"),
        lineHeight: getThemeTextStyles("DBody.lineHeight"),
        letterSpacing: getThemeTextStyles("DBody.letterSpacing"),
    },
    H1: {
        fontFamily: getThemeTextStyles("H1.fontFamily"),
        fontSize: getThemeTextStyles("H1.fontSize"),
        fontWeight: getThemeTextStyles("H1.fontWeight"),
        lineHeight: getThemeTextStyles("H1.lineHeight"),
        letterSpacing: getThemeTextStyles("H1.letterSpacing"),
    },
    H2: {
        fontFamily: getThemeTextStyles("H2.fontFamily"),
        fontSize: getThemeTextStyles("H2.fontSize"),
        fontWeight: getThemeTextStyles("H2.fontWeight"),
        lineHeight: getThemeTextStyles("H2.lineHeight"),
        letterSpacing: getThemeTextStyles("H2.letterSpacing"),
    },
    H3: {
        fontFamily: getThemeTextStyles("H3.fontFamily"),
        fontSize: getThemeTextStyles("H3.fontSize"),
        fontWeight: getThemeTextStyles("H3.fontWeight"),
        lineHeight: getThemeTextStyles("H3.lineHeight"),
        letterSpacing: getThemeTextStyles("H3.letterSpacing"),
    },
    H4: {
        fontFamily: getThemeTextStyles("H4.fontFamily"),
        fontSize: getThemeTextStyles("H4.fontSize"),
        fontWeight: getThemeTextStyles("H4.fontWeight"),
        lineHeight: getThemeTextStyles("H4.lineHeight"),
        letterSpacing: getThemeTextStyles("H4.letterSpacing"),
    },
    H5: {
        fontFamily: getThemeTextStyles("H5.fontFamily"),
        fontSize: getThemeTextStyles("H5.fontSize"),
        fontWeight: getThemeTextStyles("H5.fontWeight"),
        lineHeight: getThemeTextStyles("H5.lineHeight"),
        letterSpacing: getThemeTextStyles("H5.letterSpacing"),
    },
    H6: {
        fontFamily: getThemeTextStyles("H6.fontFamily"),
        fontSize: getThemeTextStyles("H6.fontSize"),
        fontWeight: getThemeTextStyles("H6.fontWeight"),
        lineHeight: getThemeTextStyles("H6.lineHeight"),
        letterSpacing: getThemeTextStyles("H6.letterSpacing"),
    },
    Body: {
        fontFamily: getThemeTextStyles("Body.fontFamily"),
        fontSize: getThemeTextStyles("Body.fontSize"),
        fontWeight: getThemeTextStyles("Body.fontWeight"),
        lineHeight: getThemeTextStyles("Body.lineHeight"),
        letterSpacing: getThemeTextStyles("Body.letterSpacing"),
    },
    BodySmall: {
        fontFamily: getThemeTextStyles("BodySmall.fontFamily"),
        fontSize: getThemeTextStyles("BodySmall.fontSize"),
        fontWeight: getThemeTextStyles("BodySmall.fontWeight"),
        lineHeight: getThemeTextStyles("BodySmall.lineHeight"),
        letterSpacing: getThemeTextStyles("BodySmall.letterSpacing"),
    },
    XSmall: {
        fontFamily: getThemeTextStyles("XSmall.fontFamily"),
        fontSize: getThemeTextStyles("XSmall.fontSize"),
        fontWeight: getThemeTextStyles("XSmall.fontWeight"),
        lineHeight: getThemeTextStyles("XSmall.lineHeight"),
        letterSpacing: getThemeTextStyles("XSmall.letterSpacing"),
    },
};
