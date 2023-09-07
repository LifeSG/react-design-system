import { TextLinkProps, TextProps } from "../text/types";

export interface NotificationBannerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: JSX.Element | JSX.Element[] | string | undefined;
    dismissible?: boolean | undefined;
    visible?: boolean | undefined;
    sticky?: boolean | undefined;
    onDismiss?: (() => void) | undefined;
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
