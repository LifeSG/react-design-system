import { css } from "styled-components";
import { FontFamily } from "../spec/text-spec/font-spec";
import { V2_TextLinkSizeType, V2_TextSizeType, V2_TextWeight } from "./types";
import { V2_TextStyle } from "./text-style";

// =============================================================================
// FONT STYLE
// =============================================================================
const getFont = (weight: V2_TextWeight) => {
    switch (weight) {
        case 700:
        case "bold":
            return FontFamily.OpenSans.Bold;
        case 600:
        case "semibold":
            return FontFamily.OpenSans.Semibold;
        case 300:
        case "light":
            return FontFamily.OpenSans.Light;
        case 400:
        case "regular":
            return FontFamily.OpenSans.Regular;
        default:
            return "";
    }
};

const getFontFamily = (
    type: V2_TextSizeType | V2_TextLinkSizeType,
    weight?: V2_TextWeight
) => {
    return (props: any) => {
        const fontFamilyFromTheme = V2_TextStyle[type].fontFamily(
            props
        ) as string;
        const fontWeightFromTheme = V2_TextStyle[type].fontWeight(
            props
        ) as V2_TextWeight;

        if (Object.values(FontFamily.OpenSans).includes(fontFamilyFromTheme)) {
            return css`
                font-family: ${getFont(weight) ||
                getFont(fontWeightFromTheme) ||
                fontFamilyFromTheme};
                font-weight: normal !important;
            `;
        }

        return css`
            font-family: ${fontFamilyFromTheme};
            font-weight: ${(getFontWeight(weight) || fontWeightFromTheme) ??
            "normal"};
        `;
    };
};

const getFontWeight = (weight: V2_TextWeight) => {
    switch (weight) {
        case 300:
        case "light":
            return 300;
        case 400:
        case "regular":
            return 400;
        case 600:
        case "semibold":
            return 600;
        case 700:
        case "bold":
            return 700;
        case 900:
        case "black":
            return 900;
        default:
            return "";
    }
};

// =============================================================================
// TEXT STYLE
// =============================================================================
const getMaxLinesLineStyle = (maxLines: number | undefined) => {
    if (maxLines > 0) {
        return css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${maxLines};
            line-clamp: ${maxLines};
            overflow: hidden;
        `;
    }
};

const getTextStyle = (
    type: V2_TextSizeType | V2_TextLinkSizeType,
    weight: V2_TextWeight,
    paragraph = false
) => {
    return (props: any) => {
        const attrs = V2_TextStyle[type];
        const fontSize = attrs.fontSize(props) as number;

        // Add extra margin for paragraphs
        const getMarginBottomStyle = () => {
            const marginBottomScale = paragraph ? 1.05 : 0;
            return css`
                margin-bottom: ${fontSize * marginBottomScale}rem;
            `;
        };

        return css`
            ${getFontFamily(type, weight)}
            font-size: ${fontSize}rem !important;
            line-height: ${attrs.lineHeight}rem !important;
            letter-spacing: ${attrs.letterSpacing(props) || 0}rem !important;
            ${getMarginBottomStyle()}
        `;
    };
};

const getDisplayStyle = (
    inline = false,
    paragraph = false,
    maxLines: number | undefined = undefined
) => {
    if (paragraph) {
        return css`
            display: block;
            ${getMaxLinesLineStyle(maxLines)}
        `;
    } else if (inline) {
        return css`
            display: inline;
        `;
    } else {
        return css`
            display: block;
            ${getMaxLinesLineStyle(maxLines)}
        `;
    }
};

// =============================================================================
// EXPORTS
// =============================================================================
/** @deprecated */
export const V2_TextStyleHelper = {
    getFontFamily,
    getTextStyle,
    getDisplayStyle,
};
