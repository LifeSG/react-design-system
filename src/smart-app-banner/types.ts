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
    iconAriaLabel?: string | undefined;
    buttonAriaLabel?: string | undefined;
    message?: string | undefined;
    numberOfStars: number;
}
