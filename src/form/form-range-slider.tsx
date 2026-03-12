import { useState } from "react";
import { InputRangeSlider } from "../input-range-slider";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";
import { FormRangeSliderProps } from "./types";

export const FormRangeSlider = ({
    label,
    errorMessage,
    id = "form-range-slider",
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
}: FormRangeSliderProps): JSX.Element => {
    const [internalId] = useState(
        () => `form-field-${SimpleIdGenerator.generate()}`
    );
    const inputId = id ?? internalId;
    const errorId = `${inputId}-error-message`;

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
            <InputRangeSlider
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                ariaErrorMessage={errorMessage ? errorId : undefined}
                ariaInvalid={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
