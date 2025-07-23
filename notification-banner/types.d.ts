import { TypographyLinkProps, TypographyProps } from "../typography";
export interface NotificationBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode | undefined;
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
export interface NotificationBannerWithForwardedRefProps extends NotificationBannerProps {
    forwardedRef?: React.Ref<HTMLDivElement> | undefined;
}
export type ContentType = "text" | "link";
export interface ContentLinkAttributes extends TypographyLinkProps {
}
export interface ContentTextAttributes extends TypographyProps {
}
export interface NotificationContentAttributes {
    type: ContentType;
    content: string;
    otherAttributes?: TypographyLinkProps | TypographyProps | undefined;
}
