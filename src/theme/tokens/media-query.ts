import { parseCSSVariableValue, parsePxOrRemValue } from "../utils";
import { Breakpoint } from "./breakpoint";

type MediaQueryType = "max-width" | "min-width";
type MediaQueryFunction = () => string;

function getMediaQueryValue(tokenKey: keyof typeof Breakpoint): string {
    const value = parseCSSVariableValue(Breakpoint[tokenKey]);

    if (!value) {
        throw new Error(
            `Unable to resolve breakpoint token "${tokenKey}". Ensure theme CSS variables are loaded.`
        );
    }

    const normalizedValue = /^\d+$/.test(value) ? `${value}px` : value;
    const parsedValue = parsePxOrRemValue(normalizedValue);
    const hasValidUnit = /(px|rem)$/i.test(normalizedValue);

    if (
        !hasValidUnit ||
        (parsedValue === 0 && !/^0(?:px|rem)$/i.test(normalizedValue))
    ) {
        throw new Error(
            `Invalid breakpoint value "${normalizedValue}" for token "${tokenKey}". Expected a px or rem value.`
        );
    }

    return normalizedValue;
}

function createMediaQueryFunction(
    mediaType: MediaQueryType,
    tokenKey: keyof typeof Breakpoint
): MediaQueryFunction {
    return () =>
        `@media screen and (${mediaType}: ${getMediaQueryValue(tokenKey)})`;
}

export const MediaQuery = {
    MaxWidth: {
        xxs: createMediaQueryFunction("max-width", "xxs-max"),
        xs: createMediaQueryFunction("max-width", "xs-max"),
        sm: createMediaQueryFunction("max-width", "sm-max"),
        md: createMediaQueryFunction("max-width", "md-max"),
        lg: createMediaQueryFunction("max-width", "lg-max"),
        xl: createMediaQueryFunction("max-width", "xl-max"),
    },
    MinWidth: {
        xxs: createMediaQueryFunction("min-width", "xxs-min"),
        xs: createMediaQueryFunction("min-width", "xs-min"),
        sm: createMediaQueryFunction("min-width", "sm-min"),
        md: createMediaQueryFunction("min-width", "md-min"),
        lg: createMediaQueryFunction("min-width", "lg-min"),
        xl: createMediaQueryFunction("min-width", "xl-min"),
        xxl: createMediaQueryFunction("min-width", "xxl-min"),
    },
} as const;
