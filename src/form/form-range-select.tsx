import { InputRangeSelect } from "../input-range-select/input-range-select";
import { FormWrapper } from "./form-wrapper";
import { FormInputRangeSelectProps } from "./types";

export const FormRangeSelect = <T, V>({
    label,
    errorMessage,
    id = "form-select",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    enableSearch = false,
    ...otherProps
}: FormInputRangeSelectProps<T, V>): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
        >
            <InputRangeSelect
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                enableSearch={enableSearch}
                {...otherProps}
            />
        </FormWrapper>
    );
};
