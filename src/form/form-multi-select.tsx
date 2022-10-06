import { InputMultiSelect } from "../input-select/input-multi-select";
import { FormWrapper } from "./form-wrapper";
import { FormMultiSelectProps } from "./types";

export const FormMultiSelect = <T, V>({
    label,
    errorMessage,
    id = "form-multi-select",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    enableSearch = false,
    ...otherProps
}: FormMultiSelectProps<T, V>): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
        >
            <InputMultiSelect
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                enableSearch={enableSearch}
                {...otherProps}
            />
        </FormWrapper>
    );
};
