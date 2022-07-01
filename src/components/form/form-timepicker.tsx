import React from "react";
import { Timepicker } from "../timepicker/timepicker";
import { FormWrapper } from "./form-basic";
import { FormTimepickerProps } from "./types";

export const FormTimepicker = ({
    label,
    errorMessage,
    ...otherProps
}: FormTimepickerProps) => {
    const id = otherProps.id || "form-timepicker";

    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            disabled={otherProps.disabled}
        >
            <Timepicker
                id={`${id}-base`}
                data-testid="timepicker"
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
