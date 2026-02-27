import React from "react";
import { NotificationBannerProps, NotificationBannerWithForwardedRefProps } from "./types";
export declare const NBComponent: ({ children, visible, dismissible, sticky, onDismiss, id, forwardedRef, maxCollapsedHeight, onClick, actionButton, icon, ...otherProps }: NotificationBannerWithForwardedRefProps) => import("react/jsx-runtime").JSX.Element | null;
export declare const NotificationBanner: ((props: NotificationBannerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null) & {
    Link: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").TypographyLinkProps & {
        ref?: React.RefObject<HTMLAnchorElement> | undefined;
    }, never>> & string;
};
