import { BreakpointScheme } from "../types";

export interface BreakpointSet {
    "xxs-min": number;
    "xxs-max": number;
    "xs-min": number;
    "xs-max": number;
    "sm-min": number;
    "sm-max": number;
    "md-min": number;
    "md-max": number;
    "lg-min": number;
    "lg-max": number;
    "xl-min": number;
    "xl-max": number;
    "xxl-min": number;
    "xxs-column": number;
    "xs-column": number;
    "sm-column": number;
    "md-column": number;
    "lg-column": number;
    "xl-column": number;
    "xxl-column": number;
    "xxs-gutter": number;
    "xs-gutter": number;
    "sm-gutter": number;
    "md-gutter": number;
    "lg-gutter": number;
    "xl-gutter": number;
    "xxl-gutter": number;
    "xxs-margin": number;
    "xs-margin": number;
    "sm-margin": number;
    "md-margin": number;
    "lg-margin": number;
    "xl-margin": number;
    "xxl-margin": number;
}

export type BreakpointCollectionsMap = {
    [key in BreakpointScheme]: BreakpointSet;
};

export type BreakpointSetOptions = Partial<BreakpointSet>;
