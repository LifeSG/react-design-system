import React from "react";
import type { NotificationBannerProps, NotificationBannerWithForwardedRefProps } from "./types";
export declare const NBComponent: ({ children, visible, dismissible, sticky, onDismiss, id, forwardedRef, maxCollapsedHeight, onClick, actionButton, icon, className, ...otherProps }: NotificationBannerWithForwardedRefProps) => import("react/jsx-runtime").JSX.Element | null;
export declare const NotificationBanner: ((props: NotificationBannerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null) & {
    Link: (props: import("..").TypographyLinkProps & React.RefAttributes<HTMLAnchorElement>) => React.ReactElement | null;
};
