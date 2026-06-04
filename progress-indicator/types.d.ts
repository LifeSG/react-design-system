export interface ProgressIndicatorProps<T> {
    steps: T[];
    currentIndex: number;
    displayExtractor?: ((item: T) => string) | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
}
