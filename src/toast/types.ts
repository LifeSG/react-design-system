import React from "react";

export type ToastType = "success" | "warning" | "error" | "info";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The type of Toast. Control the display */
    type: ToastType;
    /** The content of the Toast. If a `title` is provided, this will act as a description label  */
    label: string;
    /** The title of the Toast  */
    title?: string | undefined;
    /** If specified, the Toast will be automatically dismissed after 4 seconds */
    autoDismiss?: boolean | undefined;
    /** Time until auto dismissal in milliseconds. Requires `autoDismiss` to be `true` */
    autoDismissTime?: number | undefined;
    /** If given, the function will be called when the Toast is dismissed */
    onDismiss?: () => void;
    /** Specifies if Toast should be fixed to left. Defaults to true */
    fixed?: boolean | undefined;
}
