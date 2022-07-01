import React from "react";
import styled from "styled-components";
import { LayoutProps } from "./types";

const Component = (props: LayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const { className, children, ...otherProps } = props;
    const libClassName = "sgds-section";
    const mergedClassName = className
        ? `${libClassName} ${className}`
        : libClassName;

    return (
        <Wrapper {...otherProps} className={mergedClassName} ref={ref}>
            {children}
        </Wrapper>
    );
};

export const Section = React.forwardRef(Component);

// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.section`
    padding: 0 1.5rem;
    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`;
