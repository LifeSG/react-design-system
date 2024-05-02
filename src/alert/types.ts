import React from "react";

export type AlertType =
    | "success"
    | "warning"
    | "error"
    | "info"
    | "description";

export type AlertSizeType = "default" | "small";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type: AlertType;
    actionLink?: React.AnchorHTMLAttributes<HTMLAnchorElement> | undefined;
    showIcon?: boolean | undefined;
    actionLinkIcon?: JSX.Element | undefined;
    sizeType?: AlertSizeType | undefined;
    /** Custom alert icon to be rendered, replacing the default alert icons */
    customAlertIcon?: JSX.Element | undefined;
    /** Specifies the maximum number of lines to be displayed outside of the collapsible zone */
    maxLines?: number | undefined;
}
