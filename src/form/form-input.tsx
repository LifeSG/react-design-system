import React from "react";
import { Input } from "../input";
import { InputRef } from "../input/types";
import { FormWrapper } from "./form-wrapper";
import { FormInputProps } from "./types";

const Component = (props: FormInputProps, ref: InputRef): JSX.Element => {
    const {
        label,
        errorMessage,
        id = "form-field",
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

    return (
        <FormWrapper
            id={id}
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
                id={`${id}-base`}
                data-testid={testId || id}
                ref={ref}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};

export const FormInput = React.forwardRef(Component);
