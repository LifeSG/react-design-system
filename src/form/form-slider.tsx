import { useState } from "react";
import { InputSlider } from "../input-slider";
import { SimpleIdGenerator } from "../util";
import { FormWrapper } from "./form-wrapper";
import { FormSliderProps } from "./types";

export const FormSlider = ({
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
}: FormSliderProps): JSX.Element => {
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const inputId = id ?? `form-slider-${internalId}`;

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
            <InputSlider
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                {...otherProps}
            />
        </FormWrapper>
    );
};
