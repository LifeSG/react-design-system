import { SelectHistogram } from "../select-histogram/select-histogram";
import { useId } from "../util";
import { FormWrapper } from "./form-wrapper";
import type { FormSelectHistogramProps } from "./types";

export const FormSelectHistogram = ({
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
    histogramSlider,
    ...otherProps
}: FormSelectHistogramProps): JSX.Element => {
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
            <SelectHistogram
                histogramSlider={histogramSlider}
                error={!!errorMessage}
                data-testid={testId ? `${testId}-base` : undefined}
                id={`${inputId}-base`}
                {...otherProps}
            />
        </FormWrapper>
    );
};
