/**
 * Props for `ProgressIndicator` component.
 *
 * The type parameter `T` represents the shape of each step item in the
 * `steps` array.
 */
export interface ProgressIndicatorProps<T> {
    /**
     * Ordered list of step items to render as progress bars and labels.
     */
    steps: T[];

    /**
     * Zero-based index of the current active step.
     * All steps at or before this index are visually highlighted.
     */
    currentIndex: number;

    /**
     * Derives the display label for a step item.
     *
     * @remarks Falls back to `item.toString()` when omitted.
     */
    displayExtractor?: ((item: T) => string) | undefined;

    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
}
