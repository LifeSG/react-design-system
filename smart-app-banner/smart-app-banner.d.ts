/// <reference types="react" />
interface SmartAppBannerProps {
    show: boolean;
    link: string;
    content: Content;
    offset?: number | undefined;
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
export declare const SmartAppBanner: ({ className, show, link, content, offset, onBannerDismiss, onBannerPress, }: SmartAppBannerProps) => JSX.Element;
export {};
