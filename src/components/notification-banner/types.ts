import { TextLinkProps, TextProps } from "../text/types";

export interface NotificationBannerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children?: JSX.Element | JSX.Element[] | string;
    dismissible?: boolean;
    visible?: boolean;
    sticky?: boolean;
    onDismiss?: () => void;
}

export interface NotificationBannerWithForwardedRefProps
    extends NotificationBannerProps {
    forwardedRef?: React.Ref<HTMLDivElement>;
}

export type ContentType = "text" | "link";

export interface ContentLinkAttributes extends TextLinkProps {}
export interface ContentTextAttributes extends TextProps {}

export interface NotificationContentAttributes {
    type: ContentType;
    content: string;
    otherAttributes?: TextLinkProps | TextProps;
}
