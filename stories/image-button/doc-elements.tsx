import React from "react";
import styled from "styled-components";
import { MediaQuery } from "../../src/media";
import { Text } from "../../src/text";

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(13rem, 1fr));
    gap: 2rem;
    align-items: center;

    ${MediaQuery.MaxWidth.tablet} {
        grid-template-columns: min-content 1fr;
        grid-template-rows: repeat(5, 1fr);
        grid-auto-flow: column dense;
    }
`;

export const HeadingLabel = styled(Text.H6)`
    text-align: center;

    ${MediaQuery.MaxWidth.mobileL} {
        text-align: left;
        align-self: center;
    }
`;

// =============================================================================
// COMPONENTS
// =============================================================================
export const Headings = () => {
    return (
        <>
            <HeadingLabel weight="semibold">Default</HeadingLabel>
            <HeadingLabel weight="semibold">Selected</HeadingLabel>
            <HeadingLabel weight="semibold">Disabled</HeadingLabel>
            <HeadingLabel weight="semibold">Error</HeadingLabel>
            <HeadingLabel weight="semibold">Error Selected</HeadingLabel>
        </>
    );
};
