import { ModalProps } from "../modal";
import { Insets } from "../shared/types";

export interface FullscreenImageCarouselRef {
    currentItemIndex: number;
    setCurrentItem: (currentItemIndex: number) => void;
    goToPrevItem: () => void;
    goToNextItem: () => void;
}

/** Custom button rendered in the carousel's top bar */
export interface FullscreenImageCarouselCustomAction {
    /** Icon element rendered inside the button */
    icon: JSX.Element;
    /** Accessible name for the button */
    ariaLabel: string;
    /** Called when the action is activated */
    onClick: (item: FullscreenImageCarouselItemProps, index: number) => void;
    "data-testid"?: string | undefined;
}

export interface FullscreenImageCarouselProps
    extends Pick<
        ModalProps,
        "show" | "rootComponentId" | "animationFrom" | "zIndex"
    > {
    items: FullscreenImageCarouselItemProps[];
    /** The index of the visible item, starts from 0 */
    initialActiveItemIndex?: number | undefined;
    hideThumbnail?: boolean | undefined;
    hideNavigation?: boolean | undefined;
    hideCounter?: boolean | undefined;
    hideMagnifier?: boolean | undefined;
    /** Additional icon buttons rendered in the top bar, before the default buttons. An item's own `customActions` replaces this list for that item */
    customActions?: FullscreenImageCarouselCustomAction[] | undefined;
    onDelete?:
        | ((item: FullscreenImageCarouselItemProps, index: number) => void)
        | undefined;
    onClose?: (() => void) | undefined;
    insets?: Insets | undefined;
    /** Ref to the top bar element, which holds the file info and the action buttons */
    topBarRef?: React.Ref<HTMLDivElement> | undefined;
}

interface FullscreenImageCarouselBaseItemProps {
    fileName?: string | undefined;
    fileSize?: string | undefined;
    /** Replaces the component-level `customActions` while this item is active. Leave `undefined` to inherit the component-level list; pass `[]` to render none */
    customActions?: FullscreenImageCarouselCustomAction[] | undefined;
}

export interface FullscreenImageCarouselImageItemProps
    extends FullscreenImageCarouselBaseItemProps {
    type?: "image" | undefined;
    src: string;
    alt?: string | undefined;
    thumbnailSrc?: string | undefined;
    renderContent?: never;
}

/** @deprecated Use FullscreenImageCarouselImageItemProps instead */
export type FullscreenCarouselItemProps = FullscreenImageCarouselImageItemProps;

export interface FullscreenImageCarouselCustomItemProps
    extends FullscreenImageCarouselBaseItemProps {
    type: "custom";
    /** The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip. */
    thumbnailSrc?: string | undefined;
    /** Label for this item used in aria-labels (e.g. "PDF"). Defaults to "image". When any item sets this, carousel-level aria-labels use generic "item" wording. */
    itemLabel?: string | undefined;
    /** Render prop for the full slide area. Consumer is responsible for the entire slide content (e.g. an iframe, embed, or custom viewer). */
    renderContent: () => React.ReactNode;
}

export type FullscreenImageCarouselItemProps =
    | FullscreenImageCarouselImageItemProps
    | FullscreenImageCarouselCustomItemProps;

export interface ImageDimension {
    width: number;
    height: number;
}
