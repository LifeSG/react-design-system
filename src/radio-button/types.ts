export type RadioButtonSize = "small" | "default";

/**
 * A field that allows a user to select from a predefined set of mutually
 * exclusive options, shown with a graphical circle indicator when active.
 *
 * @keywords radio, button, selection, form, input, choice
 */
export interface RadioButtonProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /** The display size of the component. @default "default" */
    displaySize?: RadioButtonSize | undefined;
}
