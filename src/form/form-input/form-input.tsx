import React from "react";

import { Input } from "../../input";
import type { InputRef } from "../../input/types";
import { useId } from "../../util";
import { FormWrapper } from "../form-wrapper";
import type { FormInputProps } from "./types";

const Component = (props: FormInputProps, ref: InputRef): JSX.Element => {
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
            <Input
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                ref={ref}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormInput = React.forwardRef(Component);
