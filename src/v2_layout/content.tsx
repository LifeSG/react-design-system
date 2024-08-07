import React from "react";
import { V2_Container } from "./container";
import { V2_Section } from "./section";
import { V2_ContentProps, V2_DivRef } from "./types";

const Component = (props: V2_ContentProps, ref: V2_DivRef): JSX.Element => {
    const {
        children,
        "data-testid": testId = "content",
        className,
        type = "flex",
        stretch = false,
        ...otherProps
    } = props;

    return (
        <V2_Section
            ref={ref}
            data-testid={testId}
            className={className}
            stretch={stretch}
            {...otherProps}
        >
            <V2_Container
                data-testid={`${testId}-container`}
                type={type}
                data-id="container"
                stretch={stretch}
            >
                {children}
            </V2_Container>
        </V2_Section>
    );
};

// =============================================================================
// EXPORT
// =============================================================================
/** @deprecated */
export const V2_Content = React.forwardRef(Component);
