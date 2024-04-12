import React from "react";
export type AlertType = "success" | "warning" | "error" | "info" | "description";
export type AlertSizeType = "default" | "small";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type: AlertType;
    actionLink?: React.AnchorHTMLAttributes<HTMLAnchorElement> | undefined;
    showIcon?: boolean | undefined;
    actionLinkIcon?: JSX.Element | undefined;
    sizeType?: AlertSizeType | undefined;
}
