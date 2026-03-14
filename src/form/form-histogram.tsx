import { useState } from "react";
import { HistogramSlider } from "../histogram-slider";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";
import { FormHistogramSliderProps } from "./types";

export const FormHistogramSlider = ({
    label,
    errorMessage,
    id = "form-histogram-slider",
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
}: FormHistogramSliderProps): JSX.Element => {
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const inputId = id ?? `form-field-masked-input-${internalId}`;

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
            <HistogramSlider
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                {...otherProps}
            />
        </FormWrapper>
    );
};
