import React from "react";

import { MaskedInput } from "../masked-input/masked-input";
import { useId } from "../util";
import { FormWrapper } from "./form-wrapper";
import type { FormMaskedInputProps } from "./types";

const Component = (
    props: FormMaskedInputProps,
    ref: React.Ref<HTMLInputElement>
): JSX.Element => {
    const {
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
    } = props;

    const internalId = useId();
    const inputId = id ?? `form-field-masked-input-${internalId}`;

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
            <MaskedInput
                ref={ref}
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormMaskedInput = React.forwardRef(Component);
