import React, { useState } from "react";
import { InputGroup } from "../input-group";
import { FormWrapper } from "./form-wrapper";
import { FormInputGroupProps } from "./types";
import { SimpleIdGenerator } from "../util";

const Component = <T, V>(
    props: FormInputGroupProps<T, V>,
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
        xxsCols,
        xsCols,
        smCols,
        mdCols,
        lgCols,
        xlCols,
        xxlCols,
        ...otherProps
    } = props;

    const [internalId] = useState(
        () => `form-field-${SimpleIdGenerator.generate()}`
    );

    const inputId = id ?? internalId;

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
            xxsCols={xxsCols}
            xsCols={xsCols}
            smCols={smCols}
            mdCols={mdCols}
            lgCols={lgCols}
            xlCols={xlCols}
            xxlCols={xxlCols}
        >
            <InputGroup
                ref={ref}
                id={`${inputId}-base`}
                data-testid={testId ? `${testId}-base` : undefined}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormInputGroup = React.forwardRef(Component);
