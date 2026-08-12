import React from "react";

import { Textarea } from "../../input-textarea/textarea";
import type { TextareaRef } from "../../input-textarea/types";
import { useId } from "../../util";
import { FormWrapper } from "../form-wrapper";
import type { FormTextareaProps } from "./types";

const FormTextareaComponent = (
    props: FormTextareaProps,
    ref: TextareaRef
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
    const inputId = id ?? `form-textarea-${internalId}`;

    return (
        <FormWrapper
            id={inputId}
            data-testid={testId}
            label={label}
            layoutType={layoutType}
            xxsCols={xxsCols}
            xsCols={xsCols}
            smCols={smCols}
            mdCols={mdCols}
            lgCols={lgCols}
            xlCols={xlCols}
            xxlCols={xxlCols}
        >
            <Textarea
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                data-error-testid={errorTestId ?? `${inputId}-error-message`}
                errorMessage={errorMessage}
                ref={ref}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormTextarea = React.forwardRef(FormTextareaComponent);
