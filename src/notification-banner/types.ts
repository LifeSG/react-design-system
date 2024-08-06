import { V2_TextLinkProps, V2_TextProps } from "../v2_text/types";

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

export interface ContentLinkAttributes extends V2_TextLinkProps {}
export interface ContentTextAttributes extends V2_TextProps {}

export interface NotificationContentAttributes {
    type: ContentType;
    content: string;
    otherAttributes?: V2_TextLinkProps | V2_TextProps | undefined;
}
