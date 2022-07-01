type FadePosition = "left" | "right" | "both";

export interface ProgressIndicatorProps<T> {
    steps: T[];
    currentIndex: number;
    fadeColor?: string[];
    fadePosition?: FadePosition;
    displayExtractor?: (item: T) => string;
}
