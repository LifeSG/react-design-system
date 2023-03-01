import { ButtonProps } from "src/button";

export interface OtpInputProps extends React.AriaAttributes {
    value?: string | undefined;
    error?: boolean | undefined;
    errorMessage?: string | undefined;
    "data-testid"?: string | undefined;
    cooldownDuration: number | undefined;
    ctaProps: ButtonProps | undefined;
    numOfInput: number | undefined;
    onChange?: ((value: string) => void) | undefined;

    // Input props
    disabled?: boolean | undefined;
    name?: string | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    id?: string | undefined;
}
