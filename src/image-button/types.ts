/**
 * Props for `ImageButton`.
 */
export interface ImageButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    "data-testid"?: string | undefined;
    /** URL of the image to display inside the button. */
    imgSrc: string;
    /** Applies a selected visual style to indicate the button is the active choice. */
    selected?: boolean | undefined;
    /** Applies an error visual style to indicate a validation or selection error. */
    error?: boolean | undefined;
    /**
     * Keeps the button reachable via keyboard focus when `disabled` is `true`.
     *
     * @default false
     */
    focusableWhenDisabled?: boolean | undefined;
}
