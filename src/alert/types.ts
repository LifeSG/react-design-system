import React from "react";

export type AlertType =
    | "success"
    | "warning"
    | "error"
    | "info"
    | "description";

export type AlertSizeType = "default" | "small";
/**
 * Props for the Alert component - contextual feedback banner.
 *
 * Displays an inline message with an optional icon, action link, and
 * configurable severity type and size.
 *
 * @example
 * ```tsx
 * <Alert type="success">Your changes have been saved.</Alert>
 * <Alert type="error" showIcon sizeType="small">
 *     Please fix the errors below.
 * </Alert>
 * ```
 * @keywords banner, notification, warning message, info box, status message
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The severity style of the Alert. */
    type: AlertType;
    /**
     * Attributes of an anchor element that renders as an action link.
     *
     * Pass any `HTMLAnchorElement` attributes (e.g., `href`, `onClick`, `target`)
     * to add a clickable action link inside the alert.
     */
    actionLink?: React.AnchorHTMLAttributes<HTMLAnchorElement> | undefined;
    /**
     * Specifies if the severity icon is displayed.
     *
     * @default false
     */
    showIcon?: boolean | undefined;
    /**
     * A custom icon element for the action link.
     *
     * @default `<ArrowRightIcon />`
     */
    actionLinkIcon?: JSX.Element | undefined;
    /**
     * Specifies the size of the component.
     *
     * @default "default"
     */
    sizeType?: AlertSizeType | undefined;
}
