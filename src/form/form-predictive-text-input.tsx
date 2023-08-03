import { PredictiveTextInput } from "../predictive-text-input";
import { FormWrapper } from "./form-wrapper";
import { FormPredictiveTextInputProps } from "./types";

export const FormPredictiveTextInput = <T, V>({
    label,
    errorMessage,
    id = "form-predictive-text",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    ...otherProps
}: FormPredictiveTextInputProps<T, V>): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
        >
            <PredictiveTextInput
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
