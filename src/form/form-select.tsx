import React from "react";
import { InputSelect } from "../input-select";
import { FormWrapper } from "./form-wrapper";
import { FormInputSelectProps } from "./types";

export const FormSelect = <T, V>({
    label,
    errorMessage,
    "data-error-testid": testId,
    id = "form-input-select",
    enableSearch = false,
    placeholder = "Select",
    ...otherProps
}: FormInputSelectProps<T, V>): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={testId}
            disabled={otherProps.disabled}
        >
            <InputSelect
                id={`${id}-base`}
                data-testid="input-select"
                error={!!errorMessage}
                enableSearch={enableSearch}
                placeholder={placeholder}
                {...otherProps}
            />
        </FormWrapper>
    );
};
