import React from "react";
import { Container } from "./container";
import { GridContainer } from "./grid-container";
import { Section } from "./section";
import { LayoutProps } from "./types";

const Component = (props: LayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, className, ...otherProps } = props;

    return (
        <Section {...otherProps} ref={ref}>
            <Container>
                <GridContainer className={className}>{children}</GridContainer>
            </Container>
        </Section>
    );
};

export const GridContent = React.forwardRef(Component);
