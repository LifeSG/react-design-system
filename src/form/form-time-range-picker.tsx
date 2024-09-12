import { TimeRangePicker, TimeRangePickerAlt } from "../time-range-picker";
import { FormWrapper } from "./form-wrapper";
import { FormTimeRangePickerProps } from "./types";

export const FormTimeRangePicker = ({
    label,
    errorMessage,
    id = "form-timepicker",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    variant,
    layoutType,
    mobileCols,
    tabletCols,
    desktopCols,
    ...otherProps
}: FormTimeRangePickerProps): JSX.Element => {
    const renderTimeRangePicker = () => {
        if (variant === "alt") {
            return (
                <TimeRangePickerAlt
                    id={`${id}-base`}
                    data-testid={testId || id}
                    error={!!errorMessage}
                    {...otherProps}
                />
            );
        } else {
            return (
                <TimeRangePicker
                    id={`${id}-base`}
                    data-testid={testId || id}
                    error={!!errorMessage}
                    {...otherProps}
                />
            );
        }
    };

    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            disabled={otherProps.disabled}
            data-error-testid={errorTestId}
            layoutType={layoutType}
            mobileCols={mobileCols}
            tabletCols={tabletCols}
            desktopCols={desktopCols}
        >
            {renderTimeRangePicker()}
        </FormWrapper>
    );
};
