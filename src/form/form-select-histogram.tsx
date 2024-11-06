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
    histogramSlider,
    ...otherProps
}: FormSelectHistogramProps): JSX.Element => {
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
