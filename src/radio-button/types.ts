/** Visual size variant for the radio button. */
export type RadioButtonSize = "small" | "default";

/** Props for the `RadioButton` component. */
export interface RadioButtonProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /** The selected state of the component */
    checked?: boolean | undefined;
    /** The state in which an action is allowed to be executed */
    disabled?: boolean | undefined;
    /**
     * Visual size of the radio button icon.
     *
     * @default "default"
     */
    displaySize?: RadioButtonSize | undefined;
    /**
     * When `true` and `disabled` is also `true`, the radio button remains
     * keyboard-focusable. `onChange` is still suppressed.
     */
    focusableWhenDisabled?: boolean | undefined;
}
