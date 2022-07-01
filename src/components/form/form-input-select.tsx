import React from "react";
import { InputSelect } from "../input-select";
import { FormWrapper } from "./form-basic";
import { FormInputSelectProps } from "./types";

export const FormInputSelect = <T,>({
    label,
    errorMessage,
    errorMessageTestId,
    id = "form-input-select",
    enableSearch = false,
    ...otherProps
}: FormInputSelectProps<T>) => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            errorMessageTestId={errorMessageTestId}
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
