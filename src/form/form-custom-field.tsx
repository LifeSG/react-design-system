import { FormWrapper } from "./form-wrapper";
import { FormCustomFieldProps } from "./types";

export const FormCustomField = ({
    id = "form-custom-field",
    "data-error-testid": errorTestId,
    children,
    ...otherProps
}: FormCustomFieldProps): React.JSX.Element => {
    return (
        <FormWrapper id={id} data-error-testid={errorTestId} {...otherProps}>
            {children}
        </FormWrapper>
    );
};
