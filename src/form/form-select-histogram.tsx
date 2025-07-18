import { SelectHistogram } from "../select-histogram/select-histogram";
import { FormWrapper } from "./form-wrapper";
import { FormSelectHistogramProps } from "./types";

export const FormSelectHistogram = ({
    label,
    errorMessage,
    id = "form-select-histogram",
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
    histogramSlider,
    ...otherProps
}: FormSelectHistogramProps): React.JSX.Element => {
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
            <SelectHistogram
                histogramSlider={histogramSlider}
                error={!!errorMessage}
                data-testid={testId || id}
                id={`${id}-base`}
                {...otherProps}
            />
        </FormWrapper>
    );
};
