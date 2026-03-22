/**
 * Props for the Overlay component - backdrop overlay portal.
 *
 * Renders a semi-transparent backdrop injected into the DOM that can
 * optionally blur the content behind it. Used as a layer beneath modals,
 * drawers, and other floating UI elements.
 *
 * @example
 * ```tsx
 * <Overlay show={isOpen} enableOverlayClick onOverlayClick={() => setIsOpen(false)}>
 *     <DrawerContent />
 * </Overlay>
 * ```
 * @keywords backdrop, scrim, dimmer, background layer, darkened background
 */
export interface OverlayProps {
    /** The content rendered on top of the overlay. */
    children?: JSX.Element | undefined;
    /** Toggles the visibility of the overlay. */
    show?: boolean | undefined;
    /** The DOM element id to inject the overlay portal into. Defaults to `<body>` if omitted. */
    rootId?: string | undefined;
    /**
     * The opacity of the backdrop (0 to 1).
     *
     * @default 0.8
     */
    backgroundOpacity?: number | undefined;
    /**
     * When `true`, applies a blur filter to the content behind the overlay.
     *
     * @default true
     */
    backgroundBlur?: boolean | undefined;
    /**
     * When `true`, disables the fade-in/fade-out transition animation.
     *
     * @default false
     */
    disableTransition?: boolean | undefined;
    /** When `true`, clicking the overlay fires `onOverlayClick`. */
    enableOverlayClick?: boolean | undefined;
    /** Custom CSS `z-index` value for stacking overlays. */
    zIndex?: number | undefined;
    /** Called when the overlay is clicked (requires `enableOverlayClick` to be `true`). */
    onOverlayClick?: (() => void) | undefined;
    /** The unique id attribute of the overlay root element. */
    id?: string | undefined;
}

/**
 * Transient props are denoted with $
 * https://styled-components.com/docs/api#transient-props
 */
export interface StyleProps {
    $show: boolean;
    $backgroundOpacity?: number | undefined;
    $backgroundBlur?: boolean | undefined;
    $disableTransition?: boolean | undefined;
    $enableOverlayClick?: boolean | undefined;
    zIndex?: number | undefined;
    $stacked?: boolean | undefined;
}
