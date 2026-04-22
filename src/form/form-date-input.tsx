import { useState } from "react";
import { DateInput } from "../date-input";
import { FormWrapper } from "./form-wrapper";
import { FormDateInputProps } from "./types";
import { SimpleIdGenerator } from "../util";

/**
 * A form field that wraps `DateInput` with a label, error message, and responsive layout.
 *
 * Use as `Form.DateInput` to present a date picker within a form.
 * @example
 * ```tsx
 * <Form.DateInput
 *     label="Date of birth"
 *     errorMessage={errors.dob}
 * />
 * ```
 */
export const FormDateInput = ({
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
}: FormDateInputProps): JSX.Element => {
    const [internalId] = useState(
        () => `form-date-input-${SimpleIdGenerator.generate()}`
    );
    const inputId = id ?? internalId;

    return (
        <FormWrapper
            id={inputId}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
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
