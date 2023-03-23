import React from "react";

export type ToastType = "success" | "warning" | "error" | "info";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    type: ToastType;
    title?: string | undefined;
    description: string;
    autoDismiss?: boolean | undefined;
}
