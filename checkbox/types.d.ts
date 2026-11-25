export type CheckboxSize = "small" | "default";
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** The display sizes of the Checkbox. "small" | "default" */
    displaySize?: CheckboxSize | undefined;
    /** The indeterminate state of the Checkbox */
    indeterminate?: boolean | undefined;
    /** Allows the component to receive focus when disabled. Interaction remains blocked. */
    focusableWhenDisabled?: boolean | undefined;
}
