export interface SmartAppBannerProps {
    show: boolean;
    link: string;
    content: SmartAppBannerContentProps;
    offset?: number | undefined;
    className?: string | undefined;
    onBannerDismiss: () => void;
    onBannerPress?: () => void | undefined;
}

export interface SmartAppBannerContentProps {
    title: string;
    buttonLabel: string;
    buttonAriaLabel: string;
    message?: string | undefined;
    numberOfStars: number;
}
