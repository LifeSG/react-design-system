import { InputNestedMultiSelect } from "../input-nested-multi-select";
import { useId } from "../util";
import { FormWrapper } from "./form-wrapper";
import type { FormNestedMultiSelectProps } from "./types";

export const FormNestedMultiSelect = <V1, V2, V3>({
    label,
    errorMessage,
    id,
    "data-error-testid": errorTestId,
    "data-testid": testId,
    layoutType,
    xxsCols,
    xsCols,
    smCols,
    mdCols,
    lgCols,
    xlCols,
    xxlCols,
    ...otherProps
}: FormNestedMultiSelectProps<V1, V2, V3>): JSX.Element => {
    const internalId = useId();
    const inputId = id ?? `form-field-${internalId}`;
    return (
        <FormWrapper
            id={inputId}
            data-testid={testId}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            layoutType={layoutType}
            xxsCols={xxsCols}
            xsCols={xsCols}
            smCols={smCols}
            mdCols={mdCols}
            lgCols={lgCols}
            xlCols={xlCols}
            xxlCols={xxlCols}
        >
            <InputNestedMultiSelect
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
