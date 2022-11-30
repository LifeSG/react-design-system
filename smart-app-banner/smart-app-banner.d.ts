import React from "react";
interface SmartAppBannerProps {
    show: boolean;
    link: string;
    content: Content;
    offset?: number | undefined;
    icon?: string | undefined;
    isAnimated?: boolean | undefined;
    className?: string | undefined;
    onBannerDismiss: () => void;
    onBannerPress?: () => void | undefined;
}
interface Content {
    title: string;
    buttonLabel: string;
    buttonAriaLabel: string;
    message?: string | undefined;
    numberOfStars: number;
}
export declare const SmartAppBanner: React.ForwardRefExoticComponent<SmartAppBannerProps & React.RefAttributes<HTMLDivElement>>;
export {};
