import React from "react";

export type NotificationType = "success" | "warning" | "error" | "info";
export interface NotificationToastProps
    extends React.HTMLAttributes<HTMLDivElement> {
    type?: NotificationType;
    title?: string | undefined;
    description?: string | undefined;
}
