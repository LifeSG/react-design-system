import { PredictiveTextInput } from "../predictive-text-input";
import { useId } from "../util";
import { FormWrapper } from "./form-wrapper";
import type { FormPredictiveTextInputProps } from "./types";

export const FormPredictiveTextInput = <T, V>({
    label,
    errorMessage,
    id,
    "data-error-testid": errorTestId,
    "data-testid": testId,
    layoutType,
    xxsCols,
    xsCols,
    smCols,
    mdCols,
    lgCols,
    xlCols,
    xxlCols,
    ...otherProps
}: FormPredictiveTextInputProps<T, V>): JSX.Element => {
    const internalId = useId();
    const inputId = id ?? `form-field-${internalId}`;

    return (
        <FormWrapper
            id={inputId}
            data-testid={testId}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            layoutType={layoutType}
            xxsCols={xxsCols}
            xsCols={xsCols}
            smCols={smCols}
            mdCols={mdCols}
            lgCols={lgCols}
            xlCols={xlCols}
            xxlCols={xxlCols}
        >
            <PredictiveTextInput
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                aria-labelledby={`${inputId}-label`}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
