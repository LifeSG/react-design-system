import { useState } from "react";
import { SelectHistogram } from "../select-histogram/select-histogram";
import { FormWrapper } from "./form-wrapper";
import { FormSelectHistogramProps } from "./types";
import { SimpleIdGenerator } from "../util";

/**
 * A form field that wraps `SelectHistogram` with a label, error message, and responsive layout.
 *
 * Use as `Form.SelectHistogram` to present a histogram-backed dropdown filter within a form.
 * @example
 * ```tsx
 * <Form.SelectHistogram
 *     label="Price range"
 *     options={options}
 *     histogramSlider={{
 *         bins: [{ count: 5, minValue: 0 }, { count: 3, minValue: 100 }],
 *         interval: 100,
 *     }}
 * />
 * ```
 */
export const FormSelectHistogram = ({
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
    histogramSlider,
    ...otherProps
}: FormSelectHistogramProps): JSX.Element => {
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
