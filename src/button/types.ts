import type React from "react";

export type ButtonStyleType = "default" | "secondary" | "light" | "link";
export type ButtonSizeType = "large" | "default" | "small";
export type ButtonIconPosition = "left" | "right";

/**
 * Props for the `Button` component, extending standard HTML button attributes
 * with style variants, loading state, icon support, and accessible disabled
 * behavior.
 */
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    "data-testid"?: string | undefined;
    /**
     * Visual style variant of the button.
     *
     * @default "default"
     */
    styleType?: ButtonStyleType | undefined;
    /**
     * Controls the button's size.
     *
     * @default "default"
     */
    sizeType?: ButtonSizeType | undefined;
    /**
     * Applies a red color scheme for destructive actions.
     *
     * @default false
     */
    danger?: boolean | undefined;
    /**
     * Displays a loading spinner and sets `aria-busy` on the button.
     * The spinner replaces the icon (if present); children continue to render.
     *
     * @default false
     */
    loading?: boolean | undefined;
    /**
     * Keeps the button keyboard-focusable when disabled. When true, the HTML
     * `disabled` attribute is not set, but `aria-disabled` remains true and the
     * click handler is suppressed.
     *
     * @default false
     */
    focusableWhenDisabled?: boolean | undefined;
    /**
     * Icon element rendered inside the button. The icon receives `aria-hidden`
     * automatically. When provided without children, the button renders in
     * icon-only mode (square layout) — provide `aria-label` on the button for
     * accessibility in that case.
     */
    icon?: JSX.Element | undefined;
    /**
     * Position of the icon relative to the button label.
     *
     * @default "left"
     */
    iconPosition?: ButtonIconPosition | undefined;
}

export type ButtonRef = React.Ref<HTMLButtonElement>;
