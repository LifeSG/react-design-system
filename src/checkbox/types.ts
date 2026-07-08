export type CheckboxSize = "small" | "default";

/**
 * Props for the `Checkbox` component, with indeterminate state and accessible
 * disabled behavior.
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
     */
    indeterminate?: boolean | undefined;
    /**
     * Allows the checkbox to receive focus when `disabled` is true.
     *
     * When set alongside `disabled`, the native `disabled` attribute is omitted
     * in favor of `aria-disabled="true"` and `tabIndex={0}`, keeping the element
     * keyboard-reachable. `onChange` is still suppressed.
     */
    focusableWhenDisabled?: boolean | undefined;
}
