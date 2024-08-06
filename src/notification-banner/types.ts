import { v2_TextLinkProps, v2_TextProps } from "../v2_text/types";

export interface NotificationBannerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: JSX.Element | JSX.Element[] | string | undefined;
    dismissible?: boolean | undefined;
    visible?: boolean | undefined;
    sticky?: boolean | undefined;
    onDismiss?: (() => void) | undefined;
    "data-testid"?: string | undefined;
    /** Specifies the maximum height of content, after which it is collapsed */
    maxCollapsedHeight?: number | undefined;
    /** Action button that will be displayed */
    actionButton?: React.ButtonHTMLAttributes<HTMLButtonElement> | undefined;
}

export interface NotificationBannerWithForwardedRefProps
    extends NotificationBannerProps {
    forwardedRef?: React.Ref<HTMLDivElement> | undefined;
}

export type ContentType = "text" | "link";

export interface ContentLinkAttributes extends v2_TextLinkProps {}
export interface ContentTextAttributes extends v2_TextProps {}

export interface NotificationContentAttributes {
    type: ContentType;
    content: string;
    otherAttributes?: v2_TextLinkProps | v2_TextProps | undefined;
}
