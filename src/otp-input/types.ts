import { ButtonProps } from "src/button";

export interface OtpInputProps extends React.AriaAttributes {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    /** The value of the Otp inputs */
    value?: string[] | undefined;
    errorMessage?: string | undefined;
    /** The duration (in seconds) to disable the submit button after a click is made */
    cooldownDuration: number;
    /** The props for the submit button */
    actionButtonProps?: ButtonProps | undefined;
    /** The number of characters for the Otp */
    numOfInput: number;
    /** Called when one of the input is changed. Returns the value of all Otp inputs */
    onChange?: ((value: string[]) => void) | undefined;
    /** Called when the cooldown begins */
    onCooldownStart?: () => void;
    /** Called when the cooldown ends */
    onCooldownEnd?: () => void;
}
