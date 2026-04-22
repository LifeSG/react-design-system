/**
 * Props for the Drawer component - slide-in side panel.
 *
 * Renders a panel that slides in from the side of the screen, overlaying
 * the page content. Toggled via the `show` prop and dismissed via the
 * close button or overlay click callbacks.
 *
 * @example
 * ```tsx
 * <Drawer show={isOpen} heading="Filters" onClose={() => setIsOpen(false)}>
 *     <FilterForm />
 * </Drawer>
 * ```
 * @keywords side panel, sidebar, flyout, off-canvas, slide out
 */
export interface DrawerProps {
    /** The content rendered inside the drawer body. */
    children?: React.ReactNode | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** The unique id attribute for the component. */
    id?: string | undefined;
    /** The header text of the Drawer. */
    heading?: string | undefined;
    /** Toggles the visibility of the Drawer. */
    show?: boolean | undefined;
    /** Called when the close button is clicked. */
    onClose?: (() => void) | undefined;
    /** Called when the backdrop overlay is clicked. */
    onOverlayClick?: (() => void) | undefined;
}
