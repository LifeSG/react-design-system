import React, { useState } from "react";
import styled from "styled-components";
import { v2_Color } from "../../src/v2_color";
import { v2_MediaQuery } from "../../src/v2_media";
import { withPopover } from "../../src/popover";
import { v2_Text } from "../../src/v2_text";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: auto;
    }
`;

export const Item = styled.div`
    position: relative;
    :not(:last-of-type) {
        margin-right: 2.5rem;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 2.5rem;
        }
    }
`;

export const CustomDiv = styled.div`
    padding: 1rem;
    background: ${v2_Color.Neutral[6]};
    border-radius: 4px;
`;

// =============================================================================
// POPOVER HOC
// =============================================================================
const Trigger = () => (
    <CustomDiv>
        <v2_Text.Body>Hover me</v2_Text.Body>
    </CustomDiv>
);

const HOC = withPopover(Trigger, {
    content: "This is the popover content",
    trigger: "hover",
});

export const PopoverHOCExample = () => {
    return (
        <Container>
            <HOC />
        </Container>
    );
};
