import React from "react";
import { Input } from "../input";
import { InputRef } from "../input/types";
import { FormWrapper } from "./form-wrapper";
import { FormFieldProps } from "./types";

const Component = (props: FormFieldProps, ref: InputRef): JSX.Element => {
    const {
        label,
        errorMessage,
        id = "form-field",
        "data-error-testid": errorTestId,
        "data-testid": testId,
        ...otherProps
    } = props;

    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            disabled={otherProps.disabled}
            data-error-testid={errorTestId}
        >
            <Input
                id={`${id}-base`}
                data-testid={testId || id}
                ref={ref}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormField = React.forwardRef(Component);
