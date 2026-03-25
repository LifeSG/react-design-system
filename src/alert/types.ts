import React from "react";

export type AlertType =
    | "success"
    | "warning"
    | "error"
    | "info"
    | "description";

export type AlertSizeType = "default" | "small";

/**
 * The primary call to action component.
 *
 * Displays messages of different types (success, warning, error, info, description)
 * with optional icons and action links.
 *
 * @keywords alert, notification, message, warning, error, info
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Indicates the style type of the component */
    type: AlertType;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The attributes of an action link that performs an action on click */
    actionLink?: React.AnchorHTMLAttributes<HTMLAnchorElement> | undefined;
    /** Specifies if the icon will be displayed. @default false */
    showIcon?: boolean | undefined;
    /** Specifies a custom icon for the action link. @default <ArrowRightIcon /> */
    actionLinkIcon?: JSX.Element | undefined;
    /** Specifies the size of the component. @default "default" */
    sizeType?: AlertSizeType | undefined;
    /** Specifies a custom replacement icon for the alert */
    customIcon?: JSX.Element | undefined;
    /** Specifies the maximum visible height of the content in px */
    maxCollapsedHeight?: number | undefined;
}
