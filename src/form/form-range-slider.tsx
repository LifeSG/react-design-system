import { useState } from "react";
import { InputRangeSlider } from "../input-range-slider";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";
import { FormRangeSliderProps } from "./types";

/**
 * A form field that wraps `InputRangeSlider` with a label, error message, and responsive layout.
 *
 * Use as `Form.RangeSlider` to present a dual-handle numeric range slider within a form.
 * @example
 * ```tsx
 * <Form.RangeSlider
 *     label="Budget"
 *     value={[0, 100]}
 *     min={0}
 *     max={100}
 * />
 * ```
 */
export const FormRangeSlider = ({
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
}: FormRangeSliderProps): JSX.Element => {
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const inputId = id ?? `form-range-slider-${internalId}`;

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
            <InputRangeSlider
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                {...otherProps}
            />
        </FormWrapper>
    );
};
