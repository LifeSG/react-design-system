/** Props for the `Drawer` component. */
export interface DrawerProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    /**
     * Text rendered as the drawer title and used as the accessible label for
     * the dialog.
     */
    heading?: string | undefined;
    /**
     * Controls whether the drawer is visible.
     *
     * @remarks This is a controlled prop; the parent is responsible for
     * updating it in response to `onClose` and `onOverlayClick`.
     */
    show?: boolean | undefined;
    /**
     * Called when the user requests to close the drawer via the close button
     * or the Escape key.
     */
    onClose?: (() => void) | undefined;
    /** Called when the user clicks the background overlay. */
    onOverlayClick?: (() => void) | undefined;
}
