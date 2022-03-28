import { css } from "styled-components";
import { FontFamily, TextAttributes } from "../styles/spec/text";
import { TTextLinkSizeType, TTextSizeType } from "../styles/spec/types";
import { TextWeight } from "./types";

// =============================================================================
// FONT STYLE
// =============================================================================
const getFont = (weight: TextWeight): string => {
	switch (weight) {
		case "bold":
			return FontFamily.Bold;
		case "semibold":
			return FontFamily.Semibold;
		case "light":
			return FontFamily.Light;
		default:
			return FontFamily.Regular;
	}
};

const getFontFamily = (type: "header" | "default", weight?: TextWeight): any => {
	if (type === "default") {
		return css`
            font-family: ${getFont(weight || "regular")};
            // Prevent overrides, weight is handled by font family
            font-weight: normal !important;
        `;
	} else {
		return css`
            font-family: ${getFont(weight || "bold")};
            // Prevent overrides, weight is handled by font family
            font-weight: normal !important;
        `;
	}
};

// =============================================================================
// TEXT STYLE
// =============================================================================
const getTextStyle = (
	style: TTextSizeType | TTextLinkSizeType,
	weight: TextWeight,
	paragraph = false
): any => {
	const attrs = TextAttributes[style];

	let isHeader = false;
	switch (style) {
		case "D1":
		case "D2":
		case "H1":
		case "H2":
		case "H3":
		case "H4":
		case "H5":
		case "H6":
			isHeader = true;
			break;
		default:
			break;
	}

	// Add extra margin for paragraphs
	const getMarginBottomStyle = (): any => {
		const marginBottomScale = paragraph ? 1.05 : 0;
		return css`
            margin-bottom: ${attrs.size * marginBottomScale}rem;
        `;
	};

	return css`
        ${getFontFamily(isHeader ? "header" : "default", weight)}
        font-size: ${attrs.size}rem !important;
        line-height: ${attrs.lineHeight}rem !important;
        letter-spacing: ${attrs.letterSpacing || 0}rem !important;
        ${getMarginBottomStyle()}
    `;
};

const getDisplayStyle = (inline = false, paragraph = false) => {
	if (paragraph) {
		return `
            display: block;
        `;
	} else if (inline) {
		return `
            display: inline;
        `;
	} else {
		return `
            display: block;
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
