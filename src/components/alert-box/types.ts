import React from "react";

export type AlertBoxType = "success" | "warning" | "error";

export interface AlertBoxBaseProps {
    children: React.ReactNode;
    type: AlertBoxType;
    actionLink?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    className?: string;
    "data-testid"?: string;
}

export interface AlertBoxStyleProps {
    type: AlertBoxType;
}
