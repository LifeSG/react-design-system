import React from "react";
import { Container } from "./container";
import { ContentProps } from "./types";
import { Section } from "./section";

const Component = (
    props: ContentProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element => {
    const {
        children,
        "data-testid": testId = "content",
        className,
        type = "flex",
        stretch = false,
        ...otherProps
    } = props;

    return (
        <Section
            ref={ref}
            data-testid={testId}
            className={className}
            stretch={stretch}
            {...otherProps}
        >
            <Container
                data-testid={`${testId}-container`}
                type={type}
                data-id="container"
                stretch={stretch}
            >
                {children}
            </Container>
        </Section>
    );
};

export const Content = React.forwardRef(Component);
