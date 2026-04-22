import { useState } from "react";
import { InputNestedSelect } from "../input-nested-select";
import { FormWrapper } from "./form-wrapper";
import { FormNestedSelectProps } from "./types";
import { SimpleIdGenerator } from "../util";

/**
 * A form field that wraps `InputNestedSelect` with a label, error message, and responsive layout.
 *
 * Use as `Form.NestedSelect` to present a hierarchical single-select dropdown within a form.
 * @example
 * ```tsx
 * <Form.NestedSelect
 *     label="Location"
 *     options={options}
 *     errorMessage={errors.location}
 * />
 * ```
 */
export const FormNestedSelect = <V1, V2, V3>({
    label,
    errorMessage,
    id,
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
}: FormNestedSelectProps<V1, V2, V3>): JSX.Element => {
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
            <InputNestedSelect
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
