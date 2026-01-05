/// <reference types="react" />
export interface RangeInputInnerContainerProps {
    error?: boolean | undefined;
    /**
     * The range element.
     * First element being positioned on the left (start) while the second
     * on the right (end)
     */
    children: [JSX.Element, JSX.Element];
    currentActive: "start" | "end" | "none";
    className?: string | undefined;
    wrap?: boolean | undefined;
}
