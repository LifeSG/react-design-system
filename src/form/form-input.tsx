import React, { useState } from "react";
import { Input } from "../input";
import { InputRef } from "../input/types";
import { FormWrapper } from "./form-wrapper";
import { FormInputProps } from "./types";
import { SimpleIdGenerator } from "../util";

const Component = (props: FormInputProps, ref: InputRef): JSX.Element => {
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
            data-testid={testId}
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
