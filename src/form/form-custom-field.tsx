import { FormWrapper } from "./form-wrapper";
import { FormCustomFieldProps } from "./types";

/**
 * A form field wrapper that renders arbitrary content with a label, error message, and responsive layout.
 *
 * Use as `Form.CustomField` when none of the other `Form.*` components fit the input type needed.
 * @example
 * ```tsx
 * <Form.CustomField label="Custom field">
 *     <input type="text" placeholder="Enter value" />
 * </Form.CustomField>
 * ```
 */
export const FormCustomField = ({
    id = "form-custom-field",
    "data-error-testid": errorTestId,
    children,
    ...otherProps
}: FormCustomFieldProps): JSX.Element => {
    return (
        <FormWrapper id={id} data-error-testid={errorTestId} {...otherProps}>
            {children}
        </FormWrapper>
    );
};
