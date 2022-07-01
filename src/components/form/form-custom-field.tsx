import React from "react";
import { FormWrapper } from "./form-basic";
import { FormCustomFieldProps } from "./types";

export const FormCustomField = ({
    children,
    id = "form-custom-field",
    ...otherProps
}: FormCustomFieldProps) => {
    return (
        <FormWrapper id={id} {...otherProps}>
            {children}
        </FormWrapper>
    );
};
