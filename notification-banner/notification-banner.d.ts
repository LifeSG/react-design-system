import React from "react";
import { NotificationBannerProps, NotificationBannerWithForwardedRefProps } from "./types";
export declare const NBComponent: ({ children, visible, dismissible, sticky, onDismiss, id, forwardedRef, maxCollapsedHeight, onClick, actionButton, ...otherProps }: NotificationBannerWithForwardedRefProps) => import("react/jsx-runtime").JSX.Element | null;
export declare const NotificationBanner: ((props: NotificationBannerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null) & {
    Link: import("styled-components").StyledComponent<{
        ({ external, children, ...rest }: import("..").TypographyLinkProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    }, import("styled-components").DefaultTheme, {}, never>;
};
