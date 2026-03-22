export type CheckboxSize = "small" | "default";

/**
 * Props for the Checkbox component - binary selection control.
 *
 * Renders a styled checkbox with optional indeterminate state.
 * Inherits all standard `HTMLInputElement` attributes.
 *
 * @example
 * ```tsx
 * <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
 *     Agree to terms
 * </Checkbox>
 * ```
 * @keywords tick box, multi-select control, boolean input, check mark
 */
export interface CheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * The display size of the Checkbox.
     *
     * @default "default"
     */
    displaySize?: CheckboxSize | undefined;
    /** Sets the indeterminate (partially checked) visual state. */
    indeterminate?: boolean | undefined;
}
