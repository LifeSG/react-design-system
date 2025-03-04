import React from "react";
import styled from "styled-components";

interface Props {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

/** @deprecated */
export const PreviewBox = ({ children, className }: Props) => {
    return (
        <Container className={className}>
            <Inner>{children}</Inner>
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================

const Container = styled.div`
    position: relative;
    overflow: hidden;
    margin: 25px 0 4px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 1.25rem;
`;

const Inner = styled.div`
    position: relative;
    overflow: hidden;
    max-height: 21rem;
`;
