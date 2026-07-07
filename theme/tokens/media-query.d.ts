type PseudoMediaQuerySpec<T extends readonly string[]> = Record<T[number], string>;
export declare const MediaQuery: {
    readonly MaxWidth: PseudoMediaQuerySpec<readonly ["xxs", "xs", "sm", "md", "lg", "xl"]>;
    readonly MinWidth: PseudoMediaQuerySpec<readonly ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]>;
};
export {};
