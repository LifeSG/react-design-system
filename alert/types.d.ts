import React from "react";
export type AlertType = "success" | "warning" | "error" | "info" | "description";
export type AlertSizeType = "default" | "small";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type: AlertType;
    "data-testid"?: string | undefined;
    actionLink?: React.AnchorHTMLAttributes<HTMLAnchorElement> | undefined;
    showIcon?: boolean | undefined;
    actionLinkIcon?: JSX.Element | undefined;
    sizeType?: AlertSizeType | undefined;
    /** Custom alert icon to be rendered, replacing the default alert icons */
    customIcon?: JSX.Element | undefined;
    /** Specifies the maximum height of content, after which it is collapsed */
    maxCollapsedHeight?: number | undefined;
}
