import { css } from "styled-components";
import { FontFamily } from "../spec/text-spec/font-spec";
import { FontWeightSpec } from "../spec/text-spec/types";
import { TextStyle } from "./text-style";
import { TextLinkSizeType, TextSizeType, TextWeight } from "./types";

// =============================================================================
// FONT STYLE
// =============================================================================
const FONTS_WITH_WEIGHTS = [FontFamily.OpenSans, FontFamily.PlusJakartaSans];

const getFont = (fontFamily: FontWeightSpec, weight: TextWeight) => {
    switch (weight) {
        case 700:
        case "bold":
            return fontFamily.Bold;
        case 600:
        case "semibold":
            return fontFamily.Semibold;
        case 300:
        case "light":
            return fontFamily.Light;
        case 400:
        case "regular":
            return fontFamily.Regular;
        default:
            return "";
    }
};

const getFontFamily = (
    type: TextSizeType | TextLinkSizeType,
    weight?: TextWeight
) => {
    return (props: any) => {
        const fontFamilyFromTheme = TextStyle[type].fontFamily(props) as string;
        const fontWeightFromTheme = TextStyle[type].fontWeight(
            props
        ) as TextWeight;

        const fontFamily = FONTS_WITH_WEIGHTS.find((set) =>
            Object.values(set).includes(fontFamilyFromTheme)
        );

        if (fontFamily) {
            return css`
                font-family: ${getFont(fontFamily, weight) ||
                getFont(fontFamily, fontWeightFromTheme) ||
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

const getFontWeight = (weight: TextWeight) => {
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
    type: TextSizeType | TextLinkSizeType,
    weight: TextWeight,
    paragraph = false
) => {
    return (props: any) => {
        const attrs = TextStyle[type];
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
            font-variant: ${attrs.fontVariant(props) || "normal"};
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
export const TextStyleHelper = {
    getFontFamily,
    getTextStyle,
    getDisplayStyle,
};
