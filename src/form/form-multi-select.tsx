import { InputMultiSelect } from "../input-multi-select/input-multi-select";
import { FormWrapper } from "./form-wrapper";
import { FormMultiSelectProps } from "./types";

export const FormMultiSelect = <T, V>({
    label,
    errorMessage,
    id = "form-multi-select",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    enableSearch = false,
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
    variant,
    ...otherProps
}: FormMultiSelectProps<T, V>): JSX.Element => {
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
            <InputMultiSelect
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                enableSearch={enableSearch}
                variant={variant}
                {...otherProps}
            />
        </FormWrapper>
    );
};
