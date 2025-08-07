import { StyledComponentProps } from "../helpers";
type MaxWidthBreakpoints = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
type MinWidthBreakpoints = MaxWidthBreakpoints | "xxl";
type MediaQuerySpec<T extends string> = Record<T, (props: StyledComponentProps) => string>;
export declare const MediaQuery: {
    MaxWidth: MediaQuerySpec<MaxWidthBreakpoints>;
    MinWidth: MediaQuerySpec<MinWidthBreakpoints>;
};
export {};
