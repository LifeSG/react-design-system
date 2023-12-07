import { InputSlider } from "../input-slider/input-slider";
import { FormWrapper } from "./form-wrapper";
import { FormSliderProps } from "./types";

export const FormSlider = ({
    label,
    errorMessage,
    id = "form-select",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    layoutType,
    mobileCols,
    tabletCols,
    desktopCols,
    ...otherProps
}: FormSliderProps): JSX.Element => {
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
            <InputSlider
                id={`${id}-base`}
                data-testid={testId || id}
                {...otherProps}
            />
        </FormWrapper>
    );
};
