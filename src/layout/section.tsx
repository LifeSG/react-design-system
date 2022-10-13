import React from "react";
import styled from "styled-components";
import { DivRef, SectionProps } from "./types";

const Component = (props: SectionProps, ref: DivRef): JSX.Element => {
    const {
        children,
        "data-testid": testId = "section",
        ...otherProps
    } = props;

    return (
        <StyledSection ref={ref} data-testid={testId} {...otherProps}>
            {children}
        </StyledSection>
    );
};

// =============================================================================
// EXPORT
// =============================================================================
export const Section = React.forwardRef(Component);

// =============================================================================
// STYLING
// =============================================================================
const StyledSection = styled.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`;
