import React from "react";
import styled from "styled-components";
import { v2_MediaQuery } from "../../src/v2_media";
import { V2_Text } from "../../src/v2_text";

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(13rem, 1fr));
    gap: 2rem;
    align-items: center;

    ${v2_MediaQuery.MaxWidth.tablet} {
        grid-template-columns: min-content 1fr;
        grid-template-rows: repeat(5, 1fr);
        grid-auto-flow: column dense;
    }
`;

export const HeadingLabel = styled(V2_Text.H6)`
    text-align: center;

    ${v2_MediaQuery.MaxWidth.mobileL} {
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
