export interface DrawerProps {
    children?: React.ReactNode | undefined;
    classname?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    /** The drawer header text */
    heading?: string | undefined;
    /** Toggles the visibility of the drawer */
    show?: boolean | undefined;
    /** Callback when the close button is clicked */
    onClose?: (() => void) | undefined;
    /** Callback when the overlay is clicked */
    onOverlayClick?: (() => void) | undefined;
}
