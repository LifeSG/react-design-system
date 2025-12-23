import { useState } from "react";
import { InputMultiSelect } from "../input-multi-select/input-multi-select";
import { FormWrapper } from "./form-wrapper";
import { FormMultiSelectProps } from "./types";
import { SimpleIdGenerator } from "../util";

export const FormMultiSelect = <T, V>({
    label,
    errorMessage,
    id,
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
    const [internalId] = useState(
        () => `form-field-${SimpleIdGenerator.generate()}`
    );
    const inputId = id ?? internalId;
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
            <InputMultiSelect
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                error={!!errorMessage}
                enableSearch={enableSearch}
                variant={variant}
                {...otherProps}
            />
        </FormWrapper>
    );
};
