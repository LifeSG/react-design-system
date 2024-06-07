import React, { HTMLAttributes } from "react";

export type ToastType = "success" | "warning" | "error" | "info";

export interface ActionButtonProps {
    label: string;
    onClick: () => void;
}

export interface ToastProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /** The type of Toast. Control the display */
    type: ToastType;
    /** The content of the Toast. If a `title` is provided, this will act as a description label  */
    label: string | React.ReactNode;
    /** The title of the Toast  */
    title?: string | React.ReactNode | undefined;
    /** If specified, the Toast will be automatically dismissed after 4 seconds */
    autoDismiss?: boolean | undefined;
    /** Time until auto dismissal in milliseconds. Requires `autoDismiss` to be `true` */
    autoDismissTime?: number | undefined;
    /** If given, the function will be called when the Toast is dismissed */
    onDismiss?: (() => void) | undefined;
    /** Specifies if Toast should be fixed to top. Defaults to true */
    fixed?: boolean | undefined;
    /** If given, will display an actionButton with the given title and run the given function upon clicking of the button */
    actionButton?: ActionButtonProps | undefined;
}
