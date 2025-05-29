import { getCollection, getValue } from "../helpers";
import { ThemeCollectionSpec } from "../internal-types";
import { BreakpointScheme, ThemeStyleProps } from "../types";
import { DefaultBreakpointSet } from "./specs/default-breakpoint-set";
import { BreakpointCollectionsMap, BreakpointSet } from "./types";

const BreakpointSpec: ThemeCollectionSpec<
    BreakpointCollectionsMap,
    BreakpointScheme
> = {
    collections: {
        default: DefaultBreakpointSet,
    },
    defaultValue: "default",
};

export const getBreakpoint = (key: keyof BreakpointSet) => {
    return (props: ThemeStyleProps): number => {
        const theme = props.theme;
        const breakpointSet: BreakpointSet = getCollection(
            BreakpointSpec,
            theme?.breakpointScheme
        );

        let value: number | undefined;

        if (theme?.overrides?.breakpoint) {
            value = getValue(breakpointSet, key, theme.overrides.breakpoint);
        } else {
            value = breakpointSet[key];
        }

        return value;
    };
};

export const BreakpointValues = {
    "xxs-min": getBreakpoint("xxs-min"),
    "xxs-max": getBreakpoint("xxs-max"),
    "xs-min": getBreakpoint("xs-min"),
    "xs-max": getBreakpoint("xs-max"),
    "sm-min": getBreakpoint("sm-min"),
    "sm-max": getBreakpoint("sm-max"),
    "md-min": getBreakpoint("md-min"),
    "md-max": getBreakpoint("md-max"),
    "lg-min": getBreakpoint("lg-min"),
    "lg-max": getBreakpoint("lg-max"),
    "xl-min": getBreakpoint("xl-min"),
    "xl-max": getBreakpoint("xl-max"),
    "xxl-min": getBreakpoint("xxl-min"),

    "xxs-column": getBreakpoint("xxs-column"),
    "xs-column": getBreakpoint("xs-column"),
    "sm-column": getBreakpoint("sm-column"),
    "md-column": getBreakpoint("md-column"),
    "lg-column": getBreakpoint("lg-column"),
    "xl-column": getBreakpoint("xl-column"),
    "xxl-column": getBreakpoint("xxl-column"),

    "xxs-gutter": getBreakpoint("xxs-gutter"),
    "xs-gutter": getBreakpoint("xs-gutter"),
    "sm-gutter": getBreakpoint("sm-gutter"),
    "md-gutter": getBreakpoint("md-gutter"),
    "lg-gutter": getBreakpoint("lg-gutter"),
    "xl-gutter": getBreakpoint("xl-gutter"),
    "xxl-gutter": getBreakpoint("xxl-gutter"),

    "xxs-margin": getBreakpoint("xxs-margin"),
    "xs-margin": getBreakpoint("xs-margin"),
    "sm-margin": getBreakpoint("sm-margin"),
    "md-margin": getBreakpoint("md-margin"),
    "lg-margin": getBreakpoint("lg-margin"),
    "xl-margin": getBreakpoint("xl-margin"),
    "xxl-margin": getBreakpoint("xxl-margin"),
};
