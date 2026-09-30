export interface DrawerProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    /** The drawer header text */
    heading?: string | undefined;
    /** Toggles the visibility of the drawer */
    show?: boolean | undefined;
    /** Called when the close button is clicked */
    onClose?: (() => void) | undefined;
    /** Called when the overlay is clicked */
    onOverlayClick?: (() => void) | undefined;
    /**
     * Optional element rendered in the header, e.g. a link or button.
     *
     * Sits beside the title on wider drawers, and wraps onto its own line
     * below the title once the drawer is narrow.
     */
    customCallToAction?: React.ReactNode | undefined;
}
