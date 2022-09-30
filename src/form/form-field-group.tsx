import React from "react";
import { InputGroup } from "../input-group";
import { FormWrapper } from "./form-wrapper";
import { FormFieldGroupProps } from "./types";

const Component = <T, V>(
    props: FormFieldGroupProps<T, V>,
    ref: React.Ref<HTMLInputElement>
): JSX.Element => {
    const {
        label,
        errorMessage,
        id = "form-field-group",
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
            <InputGroup
                ref={ref}
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormFieldGroup = React.forwardRef(Component);
