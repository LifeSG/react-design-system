import { useState } from "react";

import { TimeRangePicker } from "../time-range-picker";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";
import type { FormTimeRangePickerProps } from "./types";

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
