import type { ToastProps } from "./types";
/**
 * A brief notification that appears on screen to provide feedback about an
 * operation or event.
 *
 * Use `Toast` to surface status messages without interrupting the user's workflow.
 */
export declare const Toast: ({ type, title, label, className, autoDismiss, autoDismissTime, onDismiss, fixed, actionButton, ...otherProps }: ToastProps) => import("react/jsx-runtime").JSX.Element;
