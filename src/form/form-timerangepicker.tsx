import { TimeRangePicker } from "../timeRangePicker";
import { FormWrapper } from "./form-wrapper";
import { FormTimeRangePickerProps } from "./types";

export const FormTimeRangePicker = ({
    label,
    errorMessage,
    id = "form-timepicker",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    ...otherProps
}: FormTimeRangePickerProps): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            disabled={otherProps.disabled}
            data-error-testid={errorTestId}
        >
            <TimeRangePicker
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
