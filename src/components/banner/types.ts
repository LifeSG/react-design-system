// =============================================================================
// BANNER
// =============================================================================
interface ImgSet {
    desktop: string;
    mobile: string;
    foreground?: string;
}

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: JSX.Element | JSX.Element[] | string;
    imgset?: ImgSet;
}

// =============================================================================
// VIDEO BANNER
// =============================================================================

export type VideoBannerType = "default" | "custom";

export interface VideoBannerActionProps
    extends React.HTMLAttributes<HTMLAnchorElement> {
    children: string;
    type?: VideoBannerType;
}

export interface DefaultVideoBannerProps {
    title: string;
    description?: string | JSX.Element;
    action?: VideoBannerActionProps;
}

export interface CustomVideoBannerProps {
    children: JSX.Element | JSX.Element[] | string | null;
}

export interface VideoBannerDesktopStyle {
    backgroundOpacity: number;
}

export interface VideoBannerMobileStyle {
    backgroundImageSrc: string;
}
export interface VideoBannerStyle {
    desktop?: VideoBannerDesktopStyle;
    mobile?: VideoBannerMobileStyle;
}

export interface VideoBannerMobilePlayerControlProps {
    isPlaying?: boolean;
    onPlay?: () => void;
    onPause?: () => void;
}

export interface VideoBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: VideoBannerType;
    videoSrc: string;
    backgroundOpacity?: number;
    mobileBackgroundImageSrc?: string;
    content: DefaultVideoBannerProps | CustomVideoBannerProps;
    mobilePlayerControls?: VideoBannerMobilePlayerControlProps;
}

export interface VideoTitleProps
    extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface VideoDescriptionProps
    extends React.HTMLAttributes<HTMLSpanElement> {}
