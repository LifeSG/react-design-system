import { PhoneNumberInput } from "../phone-number-input/phone-number-input";
import { FormWrapper } from "./form-wrapper";
import { FormPhoneNumberInputProps } from "./types";

export const FormPhoneNumberInput = ({
    label,
    errorMessage,
    id = "form-phone-number-input",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    ...otherProps
}: FormPhoneNumberInputProps): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
        >
            <PhoneNumberInput
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
