export type CheckboxSize = "small" | "default";

/**
 * Props for the Checkbox input component.
 */
export interface CheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Controls the visual size of the checkbox.
     *
     * @default "default"
     */
    displaySize?: CheckboxSize | undefined;
    /**
     * Puts the checkbox into an indeterminate visual and accessibility state.
     *
     * Sets the underlying `<input>` element's `indeterminate` DOM property and
     * `aria-checked="mixed"`.
     */
    indeterminate?: boolean | undefined;
    /**
     * Allows the checkbox to receive focus when `disabled` is true.
     *
     * When set, the native `disabled` attribute is replaced with
     * `aria-disabled="true"` and `tabIndex` is set to `0`. `onChange` is still
     * suppressed.
     */
    focusableWhenDisabled?: boolean | undefined;
}
