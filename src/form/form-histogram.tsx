import { useState } from "react";
import { HistogramSlider } from "../histogram-slider";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";
import { FormHistogramSliderProps } from "./types";

/**
 * A form field that wraps `HistogramSlider` with a label, error message, and responsive layout.
 *
 * Use as `Form.HistogramSlider` to present a histogram-based range slider within a form.
 * @example
 * ```tsx
 * <Form.HistogramSlider
 *     label="Price range"
 *     bins={[{ count: 5, minValue: 0 }, { count: 3, minValue: 100 }]}
 *     interval={100}
 * />
 * ```
 */
export const FormHistogramSlider = ({
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
}: FormHistogramSliderProps): JSX.Element => {
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const inputId = id ?? `form-histogram-slider-${internalId}`;

    return (
        <FormWrapper
            id={inputId}
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
            <HistogramSlider
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                {...otherProps}
            />
        </FormWrapper>
    );
};
