import { DateInput } from "../../date-input";
import { useId } from "../../util";
import { FormWrapper } from "../form-wrapper";
import type { FormDateInputProps } from "./types";

export const FormDateInput = ({
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
}: FormDateInputProps): JSX.Element => {
    const internalId = useId();
    const inputId = id ?? `form-date-input-${internalId}`;

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
            <DateInput
                id={`${inputId}-base`}
                data-testid={testId || id}
                aria-labelledby={`${inputId}-label`}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
