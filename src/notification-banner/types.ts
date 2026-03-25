import { TypographyLinkProps, TypographyProps } from "../typography";

/**
 * A component that remains sticky at the top of the page and provides the user
 * with important notifications or notices.
 *
 * @keywords notification, banner, alert, sticky, announcement, dismiss
 */
export interface NotificationBannerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    /** The content of the banner. */
    children?: React.ReactNode | undefined;
    /** Specifies if the NotificationBanner can be dismissed. */
    dismissible?: boolean | undefined;
    /** Specifies if the NotificationBanner is to be displayed. */
    visible?: boolean | undefined;
    /** Specifies if the NotificationBanner is to remain displayed at the top of the page even though a scroll has happened. */
    sticky?: boolean | undefined;
    /** Specifies the icon to be displayed in the banner. If not specified, no icon will be displayed. */
    icon?: JSX.Element | undefined;
    /** Called when the NotificationBanner is dismissed. */
    onDismiss?: (() => void) | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Specifies the maximum visible height of the NotificationBanner content, after which it is collapsed. */
    maxCollapsedHeight?: number | undefined;
    /** The properties of the action button that appears at the bottom of the component. */
    actionButton?: React.ButtonHTMLAttributes<HTMLButtonElement> | undefined;
}

export interface NotificationBannerWithForwardedRefProps
    extends NotificationBannerProps {
    forwardedRef?: React.Ref<HTMLDivElement> | undefined;
}

export type ContentType = "text" | "link";

export interface ContentLinkAttributes extends TypographyLinkProps {}
export interface ContentTextAttributes extends TypographyProps {}

/**
 * Attributes for content items used with the `withNotificationBanner` HOC.
 *
 * @keywords notification, content, text, link, hoc
 */
export interface NotificationContentAttributes {
    /** The type of content. */
    type: ContentType;
    /** The text content of the banner. */
    content: string;
    /** Additional properties to be passed to the component displaying the content. */
    otherAttributes?: TypographyLinkProps | TypographyProps | undefined;
}
