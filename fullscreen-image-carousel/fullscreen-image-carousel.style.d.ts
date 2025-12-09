/// <reference types="react" />
interface ArrowButtonStyleProps {
    $position: "left" | "right";
}
interface ThumbnailItemStyleProps {
    $active?: boolean;
}
export declare const CloseButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const MagnifierButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const ArrowButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, ArrowButtonStyleProps, never>;
export declare const ImageGalleryContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ImageGalleryWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ImageGallerySwipe: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ImageGallerySlides: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ImageGallerySlide: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const SlideImage: import("styled-components").StyledComponent<({ src, className, alt, fit, placeholder, retrieveImageDimension, setDimension, }: import("./stateful-image").StatefulImageProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const SlidePlaceholderImage: import("styled-components").StyledComponent<(props: import("../shared/image-placeholder").ImagePlaceholderProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const BoxChip: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Chip: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, import("../text").TextProps, never>;
export declare const ThumbnailContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ThumbnailWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ThumbnailItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ThumbnailItemStyleProps, never>;
export declare const ThumbnailImage: import("styled-components").StyledComponent<({ src, className, alt, fit, placeholder, retrieveImageDimension, setDimension, }: import("./stateful-image").StatefulImageProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
