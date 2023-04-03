import React from "react";

export type toastType = "success" | "warning" | "error" | "info";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    type: toastType;
    label?: string | undefined;
    secondaryLabel: string;
    autoDismiss?: boolean | undefined;
}
