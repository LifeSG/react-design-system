import { useState } from "react";
import { SimpleIdGenerator } from "src/util";
import { PredictiveTextInput } from "../predictive-text-input";
import { FormWrapper } from "./form-wrapper";
import { FormPredictiveTextInputProps } from "./types";

export const FormPredictiveTextInput = <T, V>({
    label,
    errorMessage,
    id,
    "data-error-testid": errorTestId,
    "data-testid": testId,
    layoutType,
    mobileCols,
    tabletCols,
    desktopCols,
    xxsCols,
    xsCols,
    smCols,
    mdCols,
    lgCols,
    xlCols,
    xxlCols,
    ...otherProps
}: FormPredictiveTextInputProps<T, V>): JSX.Element => {
    const [internalId] = useState(
        () => `form-field-${SimpleIdGenerator.generate()}`
    );

    const inputId = id ?? internalId;

    return (
        <FormWrapper
            id={inputId}
            data-testid={testId}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
            layoutType={layoutType}
            mobileCols={mobileCols}
            tabletCols={tabletCols}
            desktopCols={desktopCols}
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
