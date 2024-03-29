import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../../src/color";
import { MediaQuery } from "../../src/media";
import { withPopover } from "../../src/popover";
import { Text } from "../../src/text";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0;

    ${MediaQuery.MaxWidth.mobileL} {
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

    ${MediaQuery.MaxWidth.mobileL} {
        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 2.5rem;
        }
    }
`;

export const CustomDiv = styled.div`
    padding: 1rem;
    background: ${Color.Neutral[6]};
    border-radius: 4px;
`;

// =============================================================================
// POPOVER HOC
// =============================================================================
const Trigger = () => (
    <CustomDiv>
        <Text.Body>Hover me</Text.Body>
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
