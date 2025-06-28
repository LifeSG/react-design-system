import { DateInput } from "../date-input";
import { FormWrapper } from "./form-wrapper";
import { FormDateInputProps } from "./types";

export const FormDateInput = ({
    label,
    errorMessage,
    id = "form-date-input",
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
}: FormDateInputProps): JSX.Element => {
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
            <DateInput
                id={`${id}-base`}
                data-testid={testId || id}
                aria-labelledby={`${id}-label`}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
