export interface SmartAppBannerProps {
    show: boolean;
    href: string;
    content: SmartAppBannerContentProps;
    offset?: number | undefined;
    icon?: string | undefined;
    animated?: boolean | undefined;
    className?: string | undefined;
    onDismiss: () => void;
    onClick?: (() => void) | undefined;
}

export interface SmartAppBannerContentProps {
    title: string;
    buttonLabel: string;
    buttonAriaLabel: string;
    message?: string | undefined;
    numberOfStars: number;
}
