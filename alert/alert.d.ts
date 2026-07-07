import type { AlertProps } from "./types";
/**
 * Displays an inline contextual banner with a severity-coded message.
 *
 * Use `Alert` to surface feedback, status, or supplementary information without
 * interrupting the user's workflow. Supports five severity tones, an optional
 * icon, a call-to-action link, and a collapsible content area for lengthy
 * messages.
 */
export declare const Alert: ({ type, className, children, actionLink, actionLinkIcon, sizeType, showIcon, customIcon, maxCollapsedHeight, role, ...otherProps }: AlertProps) => JSX.Element;
