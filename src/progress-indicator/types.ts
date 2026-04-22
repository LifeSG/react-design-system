type FadePosition = "left" | "right" | "both";

/**
 * Props for the ProgressIndicator component - step progress tracker.
 *
 * Renders a horizontal row of step labels with the current step highlighted.
 * Supports a custom display extractor for non-string step items.
 *
 * @example
 * ```tsx
 * <ProgressIndicator
 *     steps={["Personal Details", "Documents", "Review", "Confirmation"]}
 *     currentIndex={1}
 * />
 * ```
 * @keywords step tracker, wizard steps, stepper, multi-step progress, form progress
 */
export interface ProgressIndicatorProps<T> {
    /** The ordered list of step items. */
    steps: T[];
    /** The zero-based index of the currently active step. */
    currentIndex: number;
    /**
     * @deprecated Scrolling behaviour has been removed; this attribute is no longer needed.
     */
    fadeColor?: string[] | undefined;
    /**
     * @deprecated Scrolling behaviour has been removed; this attribute is no longer needed.
     */
    fadePosition?: FadePosition | undefined;
    /** Function to derive the display label from a step item. Defaults to using the item directly as a string. */
    displayExtractor?: ((item: T) => string) | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The unique id attribute of the component. */
    id?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
}
