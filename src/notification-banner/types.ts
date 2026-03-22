import { TextLinkProps, TextProps } from "../text/types";

/**
 * Props for the NotificationBanner component - dismissible top-of-page banner.
 *
 * Renders a full-width banner with optional sticky positioning and a dismiss
 * button. Toggle visibility with the `visible` prop.
 *
 * @example
 * ```tsx
 * <NotificationBanner visible={showBanner} sticky dismissible onDismiss={() => setShowBanner(false)}>
 *     System maintenance on 1 Jan. <NotificationBanner.Link href="/info">Learn more</NotificationBanner.Link>
 * </NotificationBanner>
 * ```
 * @keywords announcement bar, system message, info bar, top banner, alert banner
 */
export interface NotificationBannerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    /** The content to display inside the banner. */
    children?: JSX.Element | JSX.Element[] | string | undefined;
    /** When `true`, a dismiss (×) button is rendered. */
    dismissible?: boolean | undefined;
    /** Controls the visibility of the banner. */
    visible?: boolean | undefined;
    /** When `true`, the banner sticks to the top of the viewport on scroll. */
    sticky?: boolean | undefined;
    /** Called when the user dismisses the banner. */
    onDismiss?: (() => void) | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
}

export interface NotificationBannerWithForwardedRefProps
    extends NotificationBannerProps {
    forwardedRef?: React.Ref<HTMLDivElement> | undefined;
}

export type ContentType = "text" | "link";

export interface ContentLinkAttributes extends TextLinkProps {}
export interface ContentTextAttributes extends TextProps {}

export interface NotificationContentAttributes {
    type: ContentType;
    content: string;
    otherAttributes?: TextLinkProps | TextProps | undefined;
}
