import type { TypographyLinkProps, TypographyProps } from "../typography";

/**
 * Props for the `NotificationBanner` component.
 *
 * When `onClick` is provided, the entire banner becomes interactive and a
 * visually hidden accessible button is rendered for keyboard and screen-reader
 * users.
 */
export interface NotificationBannerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode | undefined;
    /**
     * Whether the dismiss button is rendered. The caller is responsible
     * for dismissing the banner in the callback.
     *
     * @default true
     */
    dismissible?: boolean | undefined;
    /**
     * Controls the visibility of the banner.
     *
     * @default true
     */
    visible?: boolean | undefined;
    /**
     * Whether the banner sticks to the top of the viewport while the page
     * scrolls.
     *
     * @default true
     */
    sticky?: boolean | undefined;
    /**
     * An optional icon element rendered at the leading edge of the banner.
     */
    icon?: JSX.Element | undefined;
    /**
     * Called when the user activates the dismiss button and `dismissible` is `true`.
     */
    onDismiss?: (() => void) | undefined;
    "data-testid"?: string | undefined;
    /**
     * Maximum height in pixels for the content area. When the rendered content
     * exceeds this value, the overflow is clipped.
     */
    maxCollapsedHeight?: number | undefined;
    /**
     * An action button rendered inside the content area. When
     * `actionButton.onClick` is provided it stops propagation to the banner's
     * own `onClick` handler.
     */
    actionButton?: React.ButtonHTMLAttributes<HTMLButtonElement> | undefined;
}

/**
 * Props for the `withNotificationBanner` HOC wrapper,
 * extending `NotificationBannerProps` with a forwarded ref.
 */
export interface NotificationBannerWithForwardedRefProps
    extends NotificationBannerProps {
    forwardedRef?: React.Ref<HTMLDivElement> | undefined;
}

/** Discriminant for `NotificationContentAttributes` content items. */
export type ContentType = "text" | "link";

/** Props for a `"link"` content item inside a notification banner. */
export interface ContentLinkAttributes extends TypographyLinkProps {}
/** Props for a `"text"` content item inside a notification banner. */
export interface ContentTextAttributes extends TypographyProps {}

/**
 * A single content item for use with `withNotificationBanner`.
 */
export interface NotificationContentAttributes {
    /**
     * Determines how `content` is rendered inside the banner.
     * - `"text"` items are sanitized and injected as HTML paragraphs
     * - `"link"` items are rendered as `NotificationBanner.Link` elements
     */
    type: ContentType;
    /** The text string or link label to display. */
    content: string;
    /** Additional props forwarded to the rendered text or link element. */
    otherAttributes?: TypographyLinkProps | TypographyProps | undefined;
}
