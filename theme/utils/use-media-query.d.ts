import { Breakpoint } from "../tokens/breakpoint";
export type BreakpointName = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type MaxWidthBreakpointName = Exclude<BreakpointName, "xxl">;
type MinWidthBreakpointTokenKey = `${BreakpointName}-min`;
type MaxWidthBreakpointTokenKey = `${MaxWidthBreakpointName}-max`;
type WidthBreakpointTokenKey = MinWidthBreakpointTokenKey | MaxWidthBreakpointTokenKey;
type WidthBreakpointCSSVariableString = (typeof Breakpoint)[WidthBreakpointTokenKey];
type MediaQueryFeature = "aspect-ratio" | "color-index" | "color" | "device-aspect-ratio" | "device-height" | "device-width" | "grid" | "height" | "max-height" | "min-height" | "hover" | "monochrome" | "orientation" | "pointer" | "prefers-color-scheme" | "resolution" | "scan" | "width";
export type MediaQueryClauseValue = string | number | boolean;
export interface MediaQueryClause {
    feature: MediaQueryFeature;
    value: MediaQueryClauseValue | undefined;
}
export interface MediaQueryOptions {
    minWidth?: WidthBreakpointCSSVariableString;
    maxWidth?: WidthBreakpointCSSVariableString;
    clauses?: MediaQueryClause[];
}
export declare const useMinWidthMediaQuery: (breakpoint: BreakpointName) => boolean;
export declare const useMaxWidthMediaQuery: (breakpoint: MaxWidthBreakpointName) => boolean;
export declare const useResolvedBreakpointToken: (breakpointToken: WidthBreakpointCSSVariableString | undefined) => string;
export declare const useMediaQuery: (options: MediaQueryOptions) => boolean;
export {};
