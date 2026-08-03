import type { FullscreenImageCarouselProps, FullscreenImageCarouselRef } from "./types";
export declare const Component: ({ items, initialActiveItemIndex, hideThumbnail, hideNavigation, hideCounter, hideMagnifier, onDelete, onClose, insets, show, ...otherProps }: FullscreenImageCarouselProps, ref: React.Ref<FullscreenImageCarouselRef>) => import("react/jsx-runtime").JSX.Element;
/**
 * A fullscreen modal carousel for browsing images and custom media items.
 *
 * Use to present a collection of images or custom content in an overlay with
 * navigation controls, zoom support, and an optional thumbnail strip.
 * The top info bar is rendered only when at least one item provides some file metadata.
 */
export declare const FullscreenImageCarousel: (props: FullscreenImageCarouselProps & import("react").RefAttributes<FullscreenImageCarouselRef>) => React.ReactElement | null;
