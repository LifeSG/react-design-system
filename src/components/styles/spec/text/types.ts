
export interface ITextAttributes {
	size: number;
	lineHeight: number;
	letterSpacing?: number;
}

export type TTextSizeType =
	"D1" |
	"D2" |
	"DBody" |
	"H1" |
	"H2" |
	"H3" |
	"H4" |
	"H5" |
	"H6" |
	"Body" |
	"BodySmall" |
	"XSmall";

export type TTextLinkSizeType =
	"Body" | // Default
	"BodySmall"; // Small
