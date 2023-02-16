import React from "react";

export type NotificationType = "success" | "warning" | "error" | "info";
// | "successDark"
// | "warningDark"
// | "errorDark"
// | "infoDark";

export type NotificationTheme = "light" | "dark";

export interface NotificationToastProps
    extends React.HTMLAttributes<HTMLDivElement> {
    type?: NotificationType;
    title?: string | undefined;
    description?: string | undefined;
    theme?: NotificationTheme | undefined;
}
