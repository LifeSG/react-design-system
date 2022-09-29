import { DateInput } from "../date-input";
import { FormWrapper } from "./form-wrapper";
import { FormDateInputProps } from "./types";

export const FormDateInput = ({
    label,
    errorMessage,
    "data-error-testid": testId,
    ...otherProps
}: FormDateInputProps): JSX.Element => {
    const id = otherProps.id || "form-date-input";

    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={testId}
            disabled={otherProps.disabled}
        >
            <DateInput
                id={`${id}-base`}
                data-testid="date-input"
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
