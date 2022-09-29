import React from "react";
import { InputSelect } from "../input-select";
import { FormWrapper } from "./form-wrapper";
import { FormInputSelectProps } from "./types";

export const FormSelect = <T, V>({
    label,
    errorMessage,
    "data-error-testid": testId,
    id = "form-select",
    enableSearch = false,
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
                {...otherProps}
            />
        </FormWrapper>
    );
};
