import React from "react";
import { Input } from "../input";
import { InputRef } from "../input/types";
import { FormWrapper } from "./form-basic";
import { FormFieldProps } from "./types";

const Component = (props: FormFieldProps, ref: InputRef) => {
    const { label, errorMessage, id = "form-field", ...otherProps } = props;

    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            disabled={otherProps.disabled}
        >
            <Input
                id={`${id}-base`}
                data-testid="input"
                ref={ref}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormField = React.forwardRef(Component);
