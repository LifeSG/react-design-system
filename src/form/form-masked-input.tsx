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

    const [formInputId] = useState(() => SimpleIdGenerator.generate());
    const uniqueId = id ?? `form-field-masked-input-${formInputId}`;

    return (
        <FormWrapper
            id={uniqueId}
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
                id={`${uniqueId}-base`}
                data-testid={testId || uniqueId}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormMaskedInput = React.forwardRef(Component);
