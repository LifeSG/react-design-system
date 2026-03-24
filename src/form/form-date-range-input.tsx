import { useState } from "react";
import { DateRangeInput } from "../date-range-input";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";
import { FormDateRangeInputProps } from "./types";

export const FormDateRangeInput = ({
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
}: FormDateRangeInputProps): JSX.Element => {
    const [internalId] = useState(
        () => `form-date-range-input-${SimpleIdGenerator.generate()}`
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
            <DateRangeInput
                id={`${id}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                aria-labelledby={`${inputId}-label`}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
