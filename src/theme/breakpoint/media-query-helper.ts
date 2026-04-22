import { BreakpointValues } from "./theme-helper";
import { StyledComponentProps } from "../helpers";

// Typings for MedaiQuery
type MaxWidthBreakpoints = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
type MinWidthBreakpoints = MaxWidthBreakpoints | "xxl";
type MediaQueryMinMax = "max-width" | "min-width";
type MediaQuerySpec<T extends string> = Record<
    T,
    (props: StyledComponentProps) => string
>;

const createMediaQueryFunction = <T extends string>(
    type: MediaQueryMinMax,
    key: T
) => {
    const mappedKey = type === "max-width" ? `${key}-max` : `${key}-min`;
    const breakpointFunction =
        BreakpointValues[mappedKey as keyof typeof BreakpointValues];

    return (props: StyledComponentProps) => {
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
export const MediaQuery = {
    MaxWidth: getMediaQuerySpec<MaxWidthBreakpoints>("max-width"),
    MinWidth: getMediaQuerySpec<MinWidthBreakpoints>("min-width"),
};
