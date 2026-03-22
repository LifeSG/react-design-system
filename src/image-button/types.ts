/**
 * Props for the ImageButton component - image thumbnail button.
 *
 * Renders a clickable image tile with selected and error visual states.
 * Extends all `HTMLButtonElement` attributes.
 *
 * @example
 * ```tsx
 * <ImageButton
 *     imgSrc="/images/option-1.png"
 *     selected={selected === "option-1"}
 *     onClick={() => setSelected("option-1")}
 * />
 * ```
 * @keywords photo button, image tile, thumbnail selector, image picker, picture button
 */
export interface ImageButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** The URL of the image to render inside the button. */
    imgSrc: string;
    /** Shows the selected highlight state when `true`. */
    selected?: boolean | undefined;
    /** Shows the error border state when `true`. */
    error?: boolean | undefined;
}
