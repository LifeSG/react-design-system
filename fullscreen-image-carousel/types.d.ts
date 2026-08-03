import { ModalProps } from "../modal";
import { Insets } from "../shared/types";
export interface FullscreenImageCarouselRef {
    currentItemIndex: number;
    setCurrentItem: (currentItemIndex: number) => void;
    goToPrevItem: () => void;
    goToNextItem: () => void;
}
export interface FullscreenImageCarouselProps extends Pick<ModalProps, "show" | "rootComponentId" | "animationFrom" | "zIndex"> {
    items: FullscreenImageCarouselItemProps[];
    /** The index of the visible item, starts from 0 */
    initialActiveItemIndex?: number | undefined;
    hideThumbnail?: boolean | undefined;
    hideNavigation?: boolean | undefined;
    hideCounter?: boolean | undefined;
    hideMagnifier?: boolean | undefined;
    onDelete?: ((item: FullscreenImageCarouselItemProps, index: number) => void) | undefined;
    onClose?: (() => void) | undefined;
    insets?: Insets | undefined;
}
interface FullscreenImageCarouselBaseItemProps {
    fileName?: string | undefined;
    fileSize?: string | undefined;
}
export interface FullscreenImageCarouselImageItemProps extends FullscreenImageCarouselBaseItemProps {
    type?: "image" | undefined;
    src: string;
    alt?: string | undefined;
    thumbnailSrc?: string | undefined;
    renderContent?: never;
}
/** @deprecated Use FullscreenImageCarouselImageItemProps instead */
export type FullscreenCarouselItemProps = FullscreenImageCarouselImageItemProps;
export interface FullscreenImageCarouselCustomItemProps extends FullscreenImageCarouselBaseItemProps {
    type: "custom";
    /** The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip. */
    thumbnailSrc?: string | undefined;
    /** Label for this item used in aria-labels (e.g. "PDF"). Defaults to "image". When any item sets this, carousel-level aria-labels use generic "item" wording. */
    itemLabel?: string | undefined;
    /** Render prop for the full slide area. Consumer is responsible for the entire slide content (e.g. an iframe, embed, or custom viewer). */
    renderContent: () => React.ReactNode;
}
export type FullscreenImageCarouselItemProps = FullscreenImageCarouselImageItemProps | FullscreenImageCarouselCustomItemProps;
export interface ImageDimension {
    width: number;
    height: number;
}
export {};
