import { IMediaType, IMediaWidth } from "./types";

export const MediaWidths: IMediaWidth = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 480,
	tablet: 768,
	desktopS: 1024,
	desktopM: 1380,
	desktopL: 1440,
	desktop4k: 2560
};

/** TO BE DEPRECATED */
export const Media: IMediaType = Object.keys(MediaWidths).reduce((accumulator, key) => {
	accumulator[key as keyof IMediaType] = `(max-width: ${MediaWidths[key as keyof IMediaWidth]}px)`;
	return accumulator;
}, {} as IMediaType);

// =============================================================================
// HELPER FUNCTION
// =============================================================================
const getMediaQuerySpec = (type: "max-width" | "min-width") => {
	return Object.keys(MediaWidths).reduce((accumulator, key) => {
		accumulator[key as keyof IMediaType] = `@media screen and (${type}: ${MediaWidths[key as keyof IMediaWidth]}px)`;
		return accumulator;
	}, {} as IMediaType);
};

// =============================================================================
// EXPORTS
// =============================================================================
export const MediaQuery = {
	MaxWidth: getMediaQuerySpec("max-width"),
	MinWidth: getMediaQuerySpec("min-width"),
}
