import { HistogramSlider } from "../histogram-slider";
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
}: FormHistogramSliderProps): React.JSX.Element => {
    return (
        <FormWrapper
            id={id}
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
                id={`${id}-base`}
                data-testid={testId || id}
                {...otherProps}
            />
        </FormWrapper>
    );
};
