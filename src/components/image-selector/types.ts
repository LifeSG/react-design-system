import { TextWeight } from "src/types";

export type ImageSelectorType = "default" | "video-thumbnail";
export type ImageSelectorStyleType = "faded" | "block";
export interface ImageSelectorProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    type?: ImageSelectorType;
    styleType?: ImageSelectorStyleType;
    imgSrc?: string;
    mobileImgSrc?: string;
    title?: string;
    description?: string;
    hoverAnimation?: boolean;
}
