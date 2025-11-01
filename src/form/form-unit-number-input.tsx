import { useState } from "react";
import { UnitNumberInput } from "../unit-number";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";
import { FormUnitNumberInputProps } from "./types";

export const FormUnitNumberInput = ({
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
}: FormUnitNumberInputProps): JSX.Element => {
    const [internalId] = useState(
        () => `form-unit-number-input-${SimpleIdGenerator.generate()}`
    );
    const inputId = id ?? internalId;
    return (
        <FormWrapper
            id={inputId}
            data-testid={testId}
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
            <UnitNumberInput
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                aria-labelledby={`${inputId}-label`}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
