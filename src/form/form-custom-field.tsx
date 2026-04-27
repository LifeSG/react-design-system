import { useState } from "react";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";
import { FormCustomFieldProps } from "./types";

export const FormCustomField = ({
    id,
    "data-error-testid": errorTestId,
    "data-testid": testId,
    children,
    ...otherProps
}: FormCustomFieldProps): JSX.Element => {
    const [internalId] = useState(
        () => `form-custom-field-${SimpleIdGenerator.generate()}`
    );

    const inputId = id ?? internalId;

    return (
        <FormWrapper
            id={inputId}
            data-testid={testId}
            data-error-testid={errorTestId}
            {...otherProps}
        >
            {children}
        </FormWrapper>
    );
};
