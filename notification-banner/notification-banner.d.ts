import React from "react";
import { NotificationBannerProps, NotificationBannerWithForwardedRefProps } from "./types";
export declare const NBComponent: ({ children, visible, dismissible, sticky, onDismiss, id, forwardedRef, ...otherProps }: NotificationBannerWithForwardedRefProps) => JSX.Element;
export declare const NotificationBanner: React.ForwardRefExoticComponent<NotificationBannerProps & React.RefAttributes<HTMLDivElement>> & {
    Link: import("styled-components").StyledComponent<(props: import("..").TextLinkProps) => JSX.Element, any, {}, never>;
};
