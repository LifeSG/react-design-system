import React from "react";
import type { NotificationBannerProps, NotificationBannerWithForwardedRefProps } from "./types";
export declare const NBComponent: ({ children, visible, dismissible, sticky, onDismiss, id, forwardedRef, maxCollapsedHeight, onClick, actionButton, icon, className, ...otherProps }: NotificationBannerWithForwardedRefProps) => import("react/jsx-runtime").JSX.Element | null;
/**
 * A full-width informational banner that sits at the top of the page.
 *
 * Use `NotificationBanner` to surface important or persistent messages that
 * should remain visible until the user dismisses them.
 * @keywords alert, announcement, banner, message
 */
export declare const NotificationBanner: ((props: NotificationBannerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null) & {
    /** Renders an inline link styled for use inside a `NotificationBanner`. */
    Link: (props: import("..").TypographyLinkProps & React.RefAttributes<HTMLAnchorElement>) => React.ReactElement | null;
};
