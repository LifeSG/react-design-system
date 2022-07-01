import React from "react";
import { InputGroup } from "../input-group";
import { FormWrapper } from "./form-basic";
import { FormFieldGroupProps } from "./types";

const Component = <T,>(
    props: FormFieldGroupProps<T>,
    ref: React.Ref<HTMLInputElement>
) => {
    const {
        label,
        errorMessage,
        id = "form-field-group",
        ...otherProps
    } = props;

    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            disabled={otherProps.disabled}
        >
            <InputGroup
                ref={ref}
                id={`${id}-base`}
                data-testid="input-group"
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormFieldGroup = React.forwardRef(Component);
