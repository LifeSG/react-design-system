import { DateInput } from "../date-input";
import { FormWrapper } from "./form-wrapper";
import { FormDateInputProps } from "./types";

export const FormDateInput = ({
    label,
    errorMessage,
    id = "form-date-input",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    ...otherProps
}: FormDateInputProps): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
        >
            <DateInput
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
