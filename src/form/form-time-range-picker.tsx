import { useState } from "react";
import { TimeRangePicker } from "../time-range-picker";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";
import { FormTimeRangePickerProps } from "./types";

/**
 * A form field that wraps `TimeRangePicker` with a label, error message, and responsive layout.
 *
 * Use as `Form.TimeRangePicker` to present a start/end time range picker within a form.
 * @example
 * ```tsx
 * <Form.TimeRangePicker
 *     label="Operating hours"
 *     errorMessage={errors.hours}
 * />
 * ```
 */
export const FormTimeRangePicker = ({
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
}: FormTimeRangePickerProps): JSX.Element => {
    const [internalId] = useState(
        () => `form-time-range-picker-${SimpleIdGenerator.generate()}`
    );
    const inputId = id ?? internalId;
    return (
        <FormWrapper
            id={inputId}
            label={label}
            errorMessage={errorMessage}
            disabled={otherProps.disabled}
            data-error-testid={errorTestId}
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
            <TimeRangePicker
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
