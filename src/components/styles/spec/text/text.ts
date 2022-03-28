import { ITextAttributes, TTextSizeType } from "./types";

// =============================================================================
// Font styles
// =============================================================================
export const FontFamily = {
	Regular: "Open Sans",
	Semibold: "Open Sans Semibold",
	Bold: "Open Sans Bold",
	Light: "Open Sans Light"
};

// In rem unit
export const TextAttributes: Record<TTextSizeType, ITextAttributes> = {
	D1: {
		size: 3,
		lineHeight: 4,
		letterSpacing: -0.056
	},
	D2: {
		size: 2.5,
		lineHeight: 3.5,
		letterSpacing: -0.032
	},
	DBody: {
		size: 1.375,
		lineHeight: 1.75
	},
	H1: {
		size: 2,
		lineHeight: 2.5,
	},
	H2: {
		size: 1.625,
		lineHeight: 2.25
	},
	H3: {
		size: 1.375,
		lineHeight: 1.75
	},
	H4: {
		size: 1.125,
		lineHeight: 1.625
	},
	H5: {
		size: 1,
		lineHeight: 1.5,
		letterSpacing: 0.014
	},
	H6: {
		size: 0.875,
		lineHeight: 1.6,
		letterSpacing: 0.012
	},
	Body: {
		size: 1.125,
		lineHeight: 1.625
	},
	BodySmall: {
		size: 1,
		lineHeight: 1.5,
		letterSpacing: 0.014
	},
	XSmall: {
		size: 0.75,
		lineHeight: 1.2,
		letterSpacing: 0.012
	}
};

export enum TextStyleType {
	Body = "Body",
	Small = "Small",
	XSmall = "XSmall",
	Footnote = "Footnote"
}

export enum HeaderStyleType {
	H1 = "H1",
	H2 = "H2",
	H3 = "H3",
	H4 = "H4"
}
