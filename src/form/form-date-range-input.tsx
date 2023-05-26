import { DateRangeInput } from "../date-range-input";
import { FormWrapper } from "./form-wrapper";
import { FormDateRangeInputProps } from "./types";

export const FormDateRangeInput = ({
    label,
    errorMessage,
    id = "form-date-range-input",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    ...otherProps
}: FormDateRangeInputProps): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
        >
            <DateRangeInput
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
