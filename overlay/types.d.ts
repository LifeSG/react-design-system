/**
 * Props for the `Overlay` component.
 */
export interface OverlayProps {
    children?: JSX.Element | undefined;
    /**
     * Controls the visible state of the overlay.
     *
     * @default false
     */
    show?: boolean | undefined;
    /**
     * The root element that contains the overlay element, specified by its `id`.
     *
     * @remarks
     * - If `rootId` is provided but no matching element exists, the overlay is not rendered.
     * - If a parent has a higher `z-index` than the overlay, the overlay may be
     * obscured.
     *
     * @default document.body
     */
    rootId?: string | undefined;
    /**
     * Applies a blur effect to the background behind the overlay.
     *
     * @default true
     */
    backgroundBlur?: boolean | undefined;
    /**
     * Disables the enter and exit transition animations.
     *
     * @default false
     */
    disableTransition?: boolean | undefined;
    /**
     * Enables `onOverlayClick` to fire when the user clicks outside the
     * modal content.
     *
     * @default false
     */
    enableOverlayClick?: boolean | undefined;
    /**
     * Overrides the CSS `z-index` of the overlay root element.
     *
     * @remarks
     * When omitted, the z-index is auto-assigned: `99999` for stacked overlays (opened on
     * top of another) and `99998` for the base overlay.
     */
    zIndex?: number | undefined;
    /**
     * Called when the user clicks outside the modal content area. Only fires
     * when `enableOverlayClick` is `true`.
     */
    onOverlayClick?: (() => void) | undefined;
    /**
     * Sets the `id` attribute of the overlay root element as
     * `lifesg-ds-overlay-root-${id}`.
     *
     * @default "lifesg-ds-overlay-root"
     */
    id?: string | undefined;
    /**
     * A ref to an element that defines the boundary for outside-click
     * detection.
     *
     * @remarks Falls back to the internal wrapper element when omitted.
     */
    containerRef?: React.RefObject<HTMLElement> | undefined;
}
