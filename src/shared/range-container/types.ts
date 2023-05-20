export interface RangeContainerProps {
    error?: boolean | undefined;
    /**
     * The range element.
     * First element being positioned on the left (start) while the second
     * on the right (end)
     */
    children: [JSX.Element, JSX.Element];
    currentActive: "start" | "end" | "none";
    className?: string | undefined;
    /**
     * Defines the min width (inclusive) before the layout
     * wraps (in px), if not defined, no wrap will occur
     */
    minWidthBeforeWrap?: number | undefined;
}
