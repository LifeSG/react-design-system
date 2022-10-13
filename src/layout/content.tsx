import React from "react";
import { Container } from "./container";
import { Section } from "./section";
import { ContentProps, DivRef } from "./types";

const Component = (props: ContentProps, ref: DivRef): JSX.Element => {
    const {
        children,
        "data-testid": testId = "content",
        className,
        type = "flex",
        ...otherProps
    } = props;

    return (
        <Section
            ref={ref}
            data-testid={testId}
            className={className}
            {...otherProps}
        >
            <Container
                data-testid={`${testId}-container`}
                type={type}
                data-id="container"
            >
                {children}
            </Container>
        </Section>
    );
};

// =============================================================================
// EXPORT
// =============================================================================
export const Content = React.forwardRef(Component);
