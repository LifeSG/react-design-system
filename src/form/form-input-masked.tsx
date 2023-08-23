import React from "react";
import { FormWrapper } from "./form-wrapper";
import { FormInputMaskProps } from "./types";
import { InputMask } from "../input-mask/input-mask";

const Component = <T, V>(
    props: FormInputMaskProps<T, V>,
    ref: React.Ref<HTMLInputElement>
): JSX.Element => {
    const {
        label,
        errorMessage,
        id = "form-field-mask",
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
            <InputMask
                ref={ref}
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormInputMask = React.forwardRef(Component);
