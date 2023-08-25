import React from "react";
import { FormWrapper } from "./form-wrapper";
import { FormMaskedInputProps } from "./types";
import { MaskedInput } from "../masked-input/masked-input";

const Component = (
    props: FormMaskedInputProps,
    ref: React.Ref<HTMLInputElement>
): JSX.Element => {
    const {
        label,
        errorMessage,
        id = "form-field-masked-input",
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
            <MaskedInput
                ref={ref}
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormMaskedInput = React.forwardRef(Component);
