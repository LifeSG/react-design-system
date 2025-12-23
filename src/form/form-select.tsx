import { useState } from "react";
import { InputSelect } from "../input-select";
import { FormWrapper } from "./form-wrapper";
import { FormInputSelectProps } from "./types";
import { SimpleIdGenerator } from "../util";

export const FormSelect = <T, V>({
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
}: FormInputSelectProps<T, V>): JSX.Element => {
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
            <InputSelect
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
