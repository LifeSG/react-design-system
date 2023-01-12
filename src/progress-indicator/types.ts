type FadePosition = "left" | "right" | "both";

export interface ProgressIndicatorProps<T> {
    steps: T[];
    currentIndex: number;
    fadeColor?: string[] | undefined;
    fadePosition?: FadePosition | undefined;
    displayExtractor?: ((item: T) => string) | undefined;
}
