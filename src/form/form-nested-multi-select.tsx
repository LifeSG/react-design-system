import { InputNestedMultiSelect } from "../input-nested-multi-select";
import { FormWrapper } from "./form-wrapper";
import { FormNestedMultiSelectProps } from "./types";

export const FormNestedMultiSelect = <V1, V2, V3>({
    label,
    errorMessage,
    id = "form-nested-select",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    ...otherProps
}: FormNestedMultiSelectProps<V1, V2, V3>): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
        >
            <InputNestedMultiSelect
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
