import React, { useState } from "react";
import { FormWrapper } from "./form-wrapper";
import { FormMaskedInputProps } from "./types";
import { MaskedInput } from "../masked-input/masked-input";
import { SimpleIdGenerator } from "../util";

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
        mobileCols,
        tabletCols,
        desktopCols,
        ...otherProps
    } = props;

    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const inputId = id ?? `form-field-masked-input-${internalId}`;

    return (
        <FormWrapper
            id={inputId}
            label={label}
            errorMessage={errorMessage}
            disabled={otherProps.disabled}
            data-error-testid={errorTestId}
            layoutType={layoutType}
            mobileCols={mobileCols}
            tabletCols={tabletCols}
            desktopCols={desktopCols}
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
