type FadePosition = "left" | "right" | "both";
export interface ProgressIndicatorProps<T> {
    steps: T[];
    currentIndex: number;
    /** @deprecated Scrolling behaviour has been removed hence this attribute is no longer needed */
    fadeColor?: string[] | undefined;
    /** @deprecated Scrolling behaviour has been removed hence this attribute is no longer needed */
    fadePosition?: FadePosition | undefined;
    displayExtractor?: ((item: T) => string) | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
}
export {};
