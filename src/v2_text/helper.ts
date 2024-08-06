import { css } from "styled-components";
import { FontFamily } from "../spec/text-spec/font-spec";
import { v2_TextLinkSizeType, v2_TextSizeType, v2_TextWeight } from "./types";
import { v2_TextStyle } from "./text-style";

// =============================================================================
// FONT STYLE
// =============================================================================
const getFont = (weight: v2_TextWeight) => {
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
    type: v2_TextSizeType | v2_TextLinkSizeType,
    weight?: v2_TextWeight
) => {
    return (props: any) => {
        const fontFamilyFromTheme = v2_TextStyle[type].fontFamily(
            props
        ) as string;
        const fontWeightFromTheme = v2_TextStyle[type].fontWeight(
            props
        ) as v2_TextWeight;

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

const getFontWeight = (weight: v2_TextWeight) => {
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
    type: v2_TextSizeType | v2_TextLinkSizeType,
    weight: v2_TextWeight,
    paragraph = false
) => {
    return (props: any) => {
        const attrs = v2_TextStyle[type];
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
export const v2_TextStyleHelper = {
    getFontFamily,
    getTextStyle,
    getDisplayStyle,
};
