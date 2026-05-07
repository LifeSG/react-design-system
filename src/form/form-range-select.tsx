import { InputRangeSelect } from "../input-range-select/input-range-select";
import { useId } from "../util";
import { FormWrapper } from "./form-wrapper";
import type { FormInputRangeSelectProps } from "./types";

export const FormRangeSelect = <T, V>({
    label,
    errorMessage,
    id,
    "data-error-testid": errorTestId,
    "data-testid": testId,
    enableSearch = false,
    layoutType,
    xxsCols,
    xsCols,
    smCols,
    mdCols,
    lgCols,
    xlCols,
    xxlCols,
    ...otherProps
}: FormInputRangeSelectProps<T, V>): JSX.Element => {
    const internalId = useId();
    const inputId = id ?? `form-field-range-select-${internalId}`;

    return (
        <FormWrapper
            id={inputId}
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
