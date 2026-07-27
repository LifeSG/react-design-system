import { Timepicker } from "../../timepicker";
import { useId } from "../../util";
import { FormWrapper } from "../form-wrapper";
import type { FormTimepickerProps } from "./types";

export const FormTimepicker = ({
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
}: FormTimepickerProps): JSX.Element => {
    const internalId = useId();
    const inputId = id ?? `form-timepicker-input-${internalId}`;

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
            <Timepicker
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
