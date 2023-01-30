import { TimeRangepicker } from "../timerange-picker";
import { FormWrapper } from "./form-wrapper";
import { FormTimerangePickerProps } from "./types";

export const FormTimerangePicker = ({
    label,
    errorMessage,
    id1 = "form-timerange-picker",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    ...otherProps
}: FormTimerangePickerProps): JSX.Element => {
    return (
        <FormWrapper
            id={id1}
            label={label}
            errorMessage={errorMessage}
            disabled={otherProps.disabled}
            data-error-testid={errorTestId}
        >
            <TimeRangepicker
                id1={`${id1}-base`}
                data-testid={testId || id1}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
