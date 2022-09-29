import React from "react";
import { Input } from "../input";
import { InputRef } from "../input/types";
import { FormWrapper } from "./form-wrapper";
import { FormFieldProps } from "./types";

const Component = (
    {
        label,
        errorMessage,
        "data-error-testid": testId,
        id = "form-field",
        ...otherProps
    }: FormFieldProps,
    ref: InputRef
): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            disabled={otherProps.disabled}
            data-error-testid={testId}
        >
            <Input
                id={`${id}-base`}
                data-testid={id || "input"}
                ref={ref}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormField = React.forwardRef(Component);
