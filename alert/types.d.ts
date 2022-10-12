import React from "react";
export declare type AlertType = "success" | "warning" | "error";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type: AlertType;
    actionLink?: React.AnchorHTMLAttributes<HTMLAnchorElement> | undefined;
}
