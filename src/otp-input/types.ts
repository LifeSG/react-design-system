import { ButtonProps } from "src/button";

export interface OtpInputProps extends React.AriaAttributes {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    /** The combined value of the Otp inputs */
    value?: string | undefined;
    errorMessage?: string | undefined;
    /** The duration to disable the submit button after a click is made */
    cooldownDuration: number;
    /** The props for the submit button */
    actionButtonProps: ButtonProps;
    /** The number of characters for the Otp */
    numOfInput: number;
    /** Called when one of the input is changed. Returns the combined value of all Otp inputs */
    onChange?: ((value: string) => void) | undefined;
}
