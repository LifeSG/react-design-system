import React from "react";
import { DateInput } from "../date-input";
import { FormWrapper } from "./form-basic";
import { FormDateInputProps } from "./types";

export const FormDateInput = ({
    label,
    errorMessage,
    ...otherProps
}: FormDateInputProps) => {
    const id = otherProps.id || "form-date-input";

    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
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
