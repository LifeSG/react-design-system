import React from "react";

export type ToastType = "success" | "warning" | "error" | "info";

/**
 * Props for the Toast component - temporary notification message.
 *
 * Renders a status notification that can auto-dismiss after a configurable
 * duration. Extends all `HTMLDivElement` attributes.
 *
 * @example
 * ```tsx
 * <Toast
 *     type="success"
 *     label="Your changes have been saved."
 *     autoDismiss
 *     onDismiss={() => setShowToast(false)}
 * />
 * ```
 * @keywords snackbar, flash message, temporary notification, auto dismiss alert, status popup
 */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The severity style of the Toast. */
    type: ToastType;
    /**
     * The main message text. When a `title` is also provided, this is
     * rendered as a secondary description below the title.
     */
    label: string;
    /** An optional bold heading rendered above the `label`. */
    title?: string | undefined;
    /**
     * When `true`, the Toast auto-dismisses after `autoDismissTime` ms.
     *
     * @default false
     */
    autoDismiss?: boolean | undefined;
    /**
     * The time in milliseconds before the Toast auto-dismisses.
     * Requires `autoDismiss` to be `true`.
     *
     * @default 4000
     */
    autoDismissTime?: number | undefined;
    /** Called when the Toast is dismissed (by user action or auto-dismiss). */
    onDismiss?: () => void;
    /**
     * When `true`, the Toast is fixed to the top of the viewport on scroll.
     *
     * @default true
     */
    fixed?: boolean | undefined;
}
