type PseudoMediaQuerySpec<T extends readonly string[]> = Record<T[number], string>;
/**
 * CSS class-based pseudo media-query selectors keyed by breakpoint name.
 * @keywords breakpoint, responsive
 */
export declare const MediaQuery: {
    readonly MaxWidth: PseudoMediaQuerySpec<readonly ["xxs", "xs", "sm", "md", "lg", "xl"]>;
    readonly MinWidth: PseudoMediaQuerySpec<readonly ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]>;
};
export {};
