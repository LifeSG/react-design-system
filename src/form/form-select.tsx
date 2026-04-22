import { useState } from "react";
import { InputSelect } from "../input-select";
import { FormWrapper } from "./form-wrapper";
import { FormInputSelectProps } from "./types";
import { SimpleIdGenerator } from "../util";

/**
 * A form field that wraps `InputSelect` with a label, error message, and responsive layout.
 *
 * Use as `Form.Select` to present a dropdown selector within a form.
 * @example
 * ```tsx
 * <Form.Select
 *     label="Country"
 *     options={countries}
 *     onSelectOption={handleSelect}
 * />
 * ```
 */
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
            data-testid={testId}
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
