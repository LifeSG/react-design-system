import type { V3_StyledComponentProps } from "../helpers";
import { V3_BreakpointValues } from "./theme-helper";

// Typings for MediaQuery
type MaxWidthBreakpoints = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
type MinWidthBreakpoints = MaxWidthBreakpoints | "xxl";
type MediaQueryMinMax = "max-width" | "min-width";
type MediaQuerySpec<T extends string> = Record<
    T,
    (props: V3_StyledComponentProps) => string
>;

const createMediaQueryFunction = <T extends string>(
    type: MediaQueryMinMax,
    key: T
) => {
    const mappedKey = type === "max-width" ? `${key}-max` : `${key}-min`;
    const breakpointFunction =
        V3_BreakpointValues[mappedKey as keyof typeof V3_BreakpointValues];

    return (props: V3_StyledComponentProps) => {
        const value = breakpointFunction(props);
        return `@media screen and (${type}: ${value}px)`;
    };
};

const getMediaQuerySpec = <T extends string>(
    type: "max-width" | "min-width"
): MediaQuerySpec<T> => {
    // Conditional breakpoints for max and min widths
    const breakpoints = (
        type === "max-width"
            ? ["xxs", "xs", "sm", "md", "lg", "xl"]
            : ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]
    ) as T[];

    return breakpoints.reduce((accumulator, key) => {
        accumulator[key] = createMediaQueryFunction(type, key);
        return accumulator;
    }, {} as MediaQuerySpec<T>);
};

// Export with typing
export const V3_MediaQuery = {
    MaxWidth: getMediaQuerySpec<MaxWidthBreakpoints>("max-width"),
    MinWidth: getMediaQuerySpec<MinWidthBreakpoints>("min-width"),
};
