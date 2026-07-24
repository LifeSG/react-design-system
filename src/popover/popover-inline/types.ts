import type { PopoverTriggerProps } from "../types";

/**
 * Underline decoration applied to the `PopoverInline` trigger span.
 */
export type PopoverInlineStyle = "default" | "underline" | "underline-dashed";

/**
 * Props for the `PopoverInline` component.
 */
export interface PopoverInlineProps
    extends Omit<PopoverTriggerProps, "children"> {
    /**
     * Accessible label for the trigger button.
     *
     * @default "More info" when `content` is not provided
     */
    ariaLabel?: string | undefined;
    /**
     * Label text or element displayed inside the trigger span.
     */
    content?: React.ReactNode | undefined;
    /**
     * Icon element rendered after `content` inside the trigger span.
     */
    icon?: JSX.Element | undefined;
    /**
     * Underline style applied to the trigger span in its default state.
     *
     * @default "default"
     */
    underlineStyle?: PopoverInlineStyle | undefined;
    /**
     * Underline style applied to the trigger span on hover.
     *
     * @default "default"
     */
    underlineHoverStyle?: PopoverInlineStyle | undefined;
}
