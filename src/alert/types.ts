import React from "react";

export type AlertType =
    | "success"
    | "warning"
    | "error"
    | "info"
    | "description";

export type LinkIconType = "internalLink" | "externalLink";

export type AlertSizeType = "default" | "small";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type: AlertType;
    actionLink?: React.AnchorHTMLAttributes<HTMLAnchorElement> | undefined;
    external?: boolean | undefined;
    enableIcon?: boolean | undefined;
    linkIconType?: LinkIconType | undefined;
    sizeType: AlertSizeType;
}
