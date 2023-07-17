import { InputNestedSelect } from "../input-nested-select";
import { FormWrapper } from "./form-wrapper";
import { FormNestedSelectProps } from "./types";

export const FormNestedSelect = <V1, V2, V3>({
    label,
    errorMessage,
    id = "form-multi-select",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    ...otherProps
}: FormNestedSelectProps<V1, V2, V3>): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
        >
            <InputNestedSelect
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
