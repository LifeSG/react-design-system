import { useState } from "react";
import { InputRangeSelect } from "../input-range-select/input-range-select";
import { FormWrapper } from "./form-wrapper";
import { FormInputRangeSelectProps } from "./types";
import { SimpleIdGenerator } from "../util";

/**
 * A form field that wraps `InputRangeSelect` with a label, error message, and responsive layout.
 *
 * Use as `Form.RangeSelect` to present a two-handle range selector within a form.
 * @example
 * ```tsx
 * <Form.RangeSelect
 *     label="Price range"
 *     options={options}
 *     errorMessage={errors.range}
 * />
 * ```
 */
export const FormRangeSelect = <T, V>({
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
    ...otherProps
}: FormInputRangeSelectProps<T, V>): JSX.Element => {
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const inputId = id ?? `form-field-range-select-${internalId}`;

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
            <InputRangeSelect
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                error={!!errorMessage}
                enableSearch={enableSearch}
                {...otherProps}
            />
        </FormWrapper>
    );
};
