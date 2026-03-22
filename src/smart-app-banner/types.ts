/**
 * Props for the SmartAppBanner component - mobile app download prompt.
 *
 * Renders a banner that prompts users to download the mobile app. Supports
 * optional slide-down animation and a dismiss callback.
 *
 * @example
 * ```tsx
 * <SmartAppBanner
 *     show={showBanner}
 *     href="https://app.example.com"
 *     content={{ title: "MyApp", buttonLabel: "Open", buttonAriaLabel: "Open in app", numberOfStars: 5 }}
 *     onDismiss={() => setShowBanner(false)}
 * />
 * ```
 * @keywords app download prompt, install banner, app store banner, mobile app CTA, open in app
 */
export interface SmartAppBannerProps {
    /** Controls whether the banner is visible. */
    show: boolean;
    /** The destination URL when the banner body is tapped. */
    href: string;
    /** The content displayed in the banner (title, button label, star rating). */
    content: SmartAppBannerContentProps;
    /**
     * The CSS `top` offset in pixels when the banner is sticky.
     *
     * @default 0
     */
    offset?: number | undefined;
    /** URL of the app icon image displayed on the left side. */
    icon?: string | undefined;
    /**
     * When `true`, adds a slide-down animation on first appearance.
     *
     * @default false
     */
    animated?: boolean | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** Called when the user taps the dismiss (×) button. */
    onDismiss: () => void;
    /** Called when the user taps the banner (non-dismiss area). Opens the link in a new tab by default. */
    onClick?: (() => void) | undefined;
}

export interface SmartAppBannerContentProps {
    title: string;
    buttonLabel: string;
    buttonAriaLabel: string;
    message?: string | undefined;
    numberOfStars: number;
}
