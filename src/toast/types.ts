import type { HTMLAttributes } from "react";
import type React from "react";

/**
 * Visual variant of the `Toast`, controlling the icon and color treatment.
 */
export type ToastType = "success" | "warning" | "error" | "info";

/**
 * Configuration for the optional action button rendered inside a `Toast`.
 */
export interface ToastActionButtonProps {
    /** The label of the action button */
    label: string;
    /** Called when the action button is clicked */
    onClick: () => void;
}

/**
 * Props for the `Toast` notification component.
 */
export interface ToastProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /**
     * Visual variant controlling the icon and color treatment.
     *
     * @default "success"
     */
    type: ToastType;
    /**
     * Main text content of the toast. When `title` is also provided, rendered
     * as a supporting description using a smaller typography style.
     */
    label: string | React.ReactNode;
    /**
     * Optional heading displayed above `label`.
     */
    title?: string | React.ReactNode | undefined;
    /**
     * When `true`, the toast dismisses itself automatically after
     * `autoDismissTime` milliseconds.
     */
    autoDismiss?: boolean | undefined;
    /**
     * Duration in milliseconds before the toast auto-dismisses.
     * Only takes effect when `autoDismiss` is `true`.
     *
     * @default 4000
     */
    autoDismissTime?: number | undefined;
    /**
     * Called after the dismissal animation completes.
     */
    onDismiss?: (() => void) | undefined;
    /**
     * Pins the toast in a fixed position at the top of the viewport.
     *
     * @default true
     */
    fixed?: boolean | undefined;
    /**
     * Optional action button rendered alongside the toast content.
     */
    actionButton?: ToastActionButtonProps | undefined;
}
