import { TimeRangePicker } from "../time-range-picker";
import { useId } from "../util";
import { FormWrapper } from "./form-wrapper";
import type { FormTimeRangePickerProps } from "./types";

export const FormTimeRangePicker = ({
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
}: FormTimeRangePickerProps): JSX.Element => {
    const internalId = useId();
    const inputId = id ?? `form-time-range-picker-${internalId}`;
    return (
        <FormWrapper
            id={inputId}
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
            <TimeRangePicker
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
