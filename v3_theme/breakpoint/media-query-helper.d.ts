import type { V3_StyledComponentProps } from "../helpers";
type MaxWidthBreakpoints = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
type MinWidthBreakpoints = MaxWidthBreakpoints | "xxl";
type MediaQuerySpec<T extends string> = Record<T, (props: V3_StyledComponentProps) => string>;
export declare const V3_MediaQuery: {
    MaxWidth: MediaQuerySpec<MaxWidthBreakpoints>;
    MinWidth: MediaQuerySpec<MinWidthBreakpoints>;
};
export {};
