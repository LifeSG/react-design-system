import React from "react";
import { NotificationBannerProps, NotificationBannerWithForwardedRefProps } from "./types";
export declare const NBComponent: ({ children, visible, dismissible, sticky, onDismiss, id, forwardedRef, ...otherProps }: NotificationBannerWithForwardedRefProps) => JSX.Element;
export declare const NotificationBanner: ((props: NotificationBannerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & {
    Link: import("styled-components").StyledComponent<(props: import("..").TextLinkProps) => JSX.Element, any, {}, never>;
};
