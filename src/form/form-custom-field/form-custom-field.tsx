import { useId } from "../../util";
import { FormWrapper } from "../form-wrapper";
import type { FormCustomFieldProps } from "./types";

export const FormCustomField = ({
    id,
    "data-error-testid": errorTestId,
    "data-testid": testId,
    children,
    ...otherProps
}: FormCustomFieldProps): JSX.Element => {
    const internalId = useId();

    const inputId = id ?? `form-custom-field-${internalId}`;

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
