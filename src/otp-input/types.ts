import { ButtonProps } from "src/button";

export interface OtpInputProps extends React.AriaAttributes {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    value?: string | undefined;
    errorMessage?: string | undefined;
    cooldownDuration: number;
    actionButtonProps: ButtonProps;
    numOfInput: number;
    onChange?: ((value: string) => void) | undefined;
}
