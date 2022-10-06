import { Timepicker } from "../timepicker";
import { FormWrapper } from "./form-wrapper";
import { FormTimepickerProps } from "./types";

export const FormTimepicker = ({
    label,
    errorMessage,
    id = "form-timepicker",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    ...otherProps
}: FormTimepickerProps): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            disabled={otherProps.disabled}
            data-error-testid={errorTestId}
        >
            <Timepicker
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
