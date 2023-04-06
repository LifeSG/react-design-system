import React from "react";

export type ToastType = "success" | "warning" | "error" | "info";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Specify the type of status */
    type: ToastType;
    /** Specify the title of toast.  */
    title: string | undefined;
    /** Specify the content of toast.  */
    label?: string;
    /** Specify action if toast will be automatically dismissed */
    autoDismiss?: boolean | undefined;
}
