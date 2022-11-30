export interface SmartAppBannerProps {
    show: boolean;
    link: string;
    content: SmartAppBannerContentProps;
    offset?: number | undefined;
    icon?: string | undefined;
    isAnimated?: boolean | undefined;
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
