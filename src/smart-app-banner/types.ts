/**
 * Props for the `SmartAppBanner` component.
 */
export interface SmartAppBannerProps {
    /**
     * Controls whether the banner is visible.
     */
    show: boolean;
    /**
     * Destination URL opened in a new tab when the banner or CTA button is clicked.
     */
    href: string;
    /**
     * Text, labels, and rating content rendered inside the banner.
     */
    content: SmartAppBannerContentProps;
    /**
     * Top offset in pixels applied to the banner's position.
     *
     * @default 0
     */
    offset?: number | undefined;
    /**
     * URL of the app icon image displayed in the banner.
     *
     * @default "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png"
     */
    icon?: string | undefined;
    /**
     * Applies a slide-in entrance animation to the banner.
     *
     * @default false
     */
    animated?: boolean | undefined;
    className?: string | undefined;
    /**
     * Called when the user clicks the dismiss button.
     */
    onDismiss: () => void;
    /**
     * Called when the user clicks on the banner or the CTA button.
     */
    onClick?: (() => void) | undefined;
}

/**
 * Text content and accessible labels rendered inside `SmartAppBanner`.
 */
export interface SmartAppBannerContentProps {
    /**
     * Primary heading text, typically the app name.
     */
    title: string;
    /**
     * Label text for the CTA button.
     */
    buttonLabel: string;
    /**
     * Alt text for the app icon image.
     *
     * @default ""
     */
    iconAriaLabel?: string | undefined;
    /**
     * Accessible label for the CTA button. Falls back to `buttonLabel` when omitted.
     */
    buttonAriaLabel?: string | undefined;
    /**
     * Secondary description text displayed beneath the title.
     */
    message?: string | undefined;
    /**
     * App store rating rendered as up to 5 star icons.
     */
    numberOfStars: number;
}
