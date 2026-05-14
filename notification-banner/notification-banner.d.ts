import React from "react";
import type { NotificationBannerProps, NotificationBannerWithForwardedRefProps } from "./types";
export declare const NBComponent: ({ children, visible, dismissible, sticky, onDismiss, id, forwardedRef, maxCollapsedHeight, onClick, actionButton, icon, ...otherProps }: NotificationBannerWithForwardedRefProps) => import("react/jsx-runtime").JSX.Element | null;
export declare const NotificationBanner: ((props: NotificationBannerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null) & {
    Link: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").TypographyLinkProps & React.RefAttributes<HTMLAnchorElement>, never> & Partial<Pick<import("..").TypographyLinkProps & React.RefAttributes<HTMLAnchorElement>, never>>> & string & Omit<(props: import("..").TypographyLinkProps & React.RefAttributes<HTMLAnchorElement>) => React.ReactElement | null, keyof React.Component<any, {}, any>>;
};
