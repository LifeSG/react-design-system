import type { RefObject } from "react";
import type { CSSVariableKey } from "../types";
type StyleValue = string | number | null | undefined;
export type ApplyStyleMap = {
    [K in keyof React.CSSProperties]?: StyleValue;
} & {
    [K in CSSVariableKey]?: StyleValue;
} & {
    [K in `--${string}`]?: StyleValue;
};
export declare function useApplyStyle<TElement extends HTMLElement>(ref: RefObject<TElement | null>, styles: ApplyStyleMap): void;
export {};
