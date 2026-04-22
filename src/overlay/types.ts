/**
 * Props for the Overlay component - a full-screen backdrop layer.
 *
 * Renders a background overlay that can optionally blur the content behind it,
 * block scroll, and respond to click events. Supports nested (stacked) overlays.
 *
 * @keywords overlay, backdrop, modal background, blur, dismiss
 */
export interface OverlayProps {
    /** The content rendered on top of the overlay. */
    children?: JSX.Element | undefined;
    /**
     * When `true`, displays the overlay.
     *
     * @default false
     */
    show?: boolean | undefined;
    /** The id of the root DOM element to attach the overlay to. */
    rootId?: string | undefined;
    /** @deprecated no longer has effect */
    backgroundOpacity?: number | undefined;
    /**
     * When `true`, applies a blur effect to the content behind the overlay.
     *
     * @default true
     */
    backgroundBlur?: boolean | undefined;
    /**
     * When `true`, disables the enter/exit transition animation.
     *
     * @default false
     */
    disableTransition?: boolean | undefined;
    /**
     * When `true`, clicking the overlay background triggers `onOverlayClick`.
     *
     * @default false
     */
    enableOverlayClick?: boolean | undefined;
    /** The CSS z-index of the overlay. Defaults to 99998, or 99999 when stacked. */
    zIndex?: number | undefined;
    /** Called when the user clicks the overlay background (requires `enableOverlayClick`). */
    onOverlayClick?: (() => void) | undefined;
    /** Unique identifier for the overlay root element. */
    id?: string | undefined;
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
