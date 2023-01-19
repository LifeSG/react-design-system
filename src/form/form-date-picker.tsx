import React from "react";
import { DatePicker } from "src/date-picker";
import { FormWrapper } from "./form-wrapper";
import { FormDatePickerProps } from "./types";

export const FormDatePicker = ({
    label,
    errorMessage,
    id = "form-date-picker",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    ...otherProps
}: FormDatePickerProps): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
        >
            <DatePicker
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
