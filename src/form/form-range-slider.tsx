import { InputRangeSlider } from "../input-range-slider";
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
    ...otherProps
}: FormRangeSliderProps): JSX.Element => {
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
            <InputRangeSlider
                id={`${id}-base`}
                data-testid={testId || id}
                {...otherProps}
            />
        </FormWrapper>
    );
};
