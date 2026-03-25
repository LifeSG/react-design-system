import { ButtonProps } from "src/button";

/**
 * A component to handle the entry of the one-time password (OTP) for
 * multi-factored authentication methods.
 *
 * @keywords otp, one-time password, authentication, mfa, input, verification
 */
export interface OtpInputProps extends React.AriaAttributes {
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** The array of input values */
    value?: string[] | undefined;
    /** Indicates if an error message is to be displayed. */
    errorMessage?: string | React.ReactNode | undefined;
    /** The duration (in seconds) to disable the submit button after a click is made */
    cooldownDuration: number;
    /** The props for the submit button */
    actionButtonProps?: ButtonProps | undefined;
    /** Flag to indicate if only OTP inputs should be rendered without the action button */
    otpOnly?: boolean | undefined;
    /** The number of characters for the Otp */
    numOfInput: number;
    prefix?:
        | {
              /** Optional OTP prefix, usually consisting of a few alphabetic characters */
              value: string;
              /** separator between prefix and otp digits. Only "-" supported for now */
              separator: "-";
          }
        | undefined;
    /** Called when one of the input is changed. Returns an array of all the input values */
    onChange?: ((value: string[]) => void) | undefined;
    /** Called when the countdown changes. Returns the remaining time in seconds */
    onCountdownChange?: ((remaining: number) => void) | undefined;
    /** Called when the cooldown begins */
    onCooldownStart?: (() => void) | undefined;
    /** Called when the cooldown ends */
    onCooldownEnd?: (() => void) | undefined;
}

export type OtpInputRef = {
    startCooldown: () => void;
};
