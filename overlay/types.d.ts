export interface OverlayProps {
    children?: JSX.Element | undefined;
    show?: boolean | undefined;
    /** The id of the root element to attach the overlay to */
    rootId?: string | undefined;
    /** @deprecated no longer has effect */
    backgroundOpacity?: number | undefined;
    backgroundBlur?: boolean | undefined;
    disableTransition?: boolean | undefined;
    enableOverlayClick?: boolean | undefined;
    zIndex?: number | undefined;
    onOverlayClick?: (() => void) | undefined;
    id?: string | undefined;
    /** The container that defines the boundaries for overlay click detection */
    containerRef?: React.RefObject<HTMLElement> | undefined;
}
/**
 * @deprecated For library internal use only
 */
export interface StyleProps {
    $show: boolean;
    $backgroundBlur?: boolean | undefined;
    $disableTransition?: boolean | undefined;
    $enableOverlayClick?: boolean | undefined;
    zIndex?: number | undefined;
    $stacked?: boolean | undefined;
}
