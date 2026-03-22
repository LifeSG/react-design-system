import { ButtonProps } from "src/button";

/**
 * Props for the OtpInput component - one-time password entry field.
 *
 * Renders a row of individual character inputs for OTP entry, with a
 * configurable submit button and a cooldown timer that re-disables the
 * button after each submission.
 *
 * @example
 * ```tsx
 * <OtpInput
 *     numOfInput={6}
 *     cooldownDuration={30}
 *     value={otpValues}
 *     onChange={(val) => setOtpValues(val)}
 *     onCooldownEnd={handleResend}
 * />
 * ```
 * @keywords one-time password, verification code, PIN entry, SMS code, 6-digit input
 */
export interface OtpInputProps extends React.AriaAttributes {
    /** The unique id attribute of the component. */
    id?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The array of current input character values. */
    value?: string[] | undefined;
    /** An error message displayed below the inputs when set. */
    errorMessage?: string | undefined;
    /**
     * The cooldown duration in seconds after which the action button is
     * re-enabled.
     */
    cooldownDuration: number;
    /** Custom props for the action (submit) button. */
    actionButtonProps?: ButtonProps | undefined;
    /** The number of individual character input fields to render. */
    numOfInput: number;
    /**
     * Called when any input field value changes.
     *
     * @param value - The complete array of all input values.
     */
    onChange?: ((value: string[]) => void) | undefined;
    /** Called when the cooldown begins (immediately after a submit). */
    onCooldownStart?: () => void;
    /** Called when the cooldown period expires and the button is re-enabled. */
    onCooldownEnd?: () => void;
}
