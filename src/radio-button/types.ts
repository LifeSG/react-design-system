/** Visual size variant for the radio button. */
export type RadioButtonSize = "small" | "default";

/** Props for the `RadioButton` component. */
export interface RadioButtonProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
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
