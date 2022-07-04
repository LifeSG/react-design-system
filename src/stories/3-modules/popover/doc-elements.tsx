import React from "react";
import { Button, withPopover } from "src/components";
import { MediaQuery } from "src/components/styles/spec";
import styled from "styled-components";

// =============================================================================
// POPOVER DISPLAY
// =============================================================================
interface TriggerComponentProps {
    children?: string;
}

const TriggerComponent = (props: TriggerComponentProps) => (
    <TestButton>{props.children || "Click me"}</TestButton>
);

const HOCComponent1 = withPopover(TriggerComponent, {
    content: "Popover with a left offset",
    trigger: "hover",
});

const HOCComponent2 = withPopover(TriggerComponent, {
    content: "Popover with no offset",
});

const HOCComponent3 = withPopover(TriggerComponent, {
    content: "Popover with a right offset",
});

export const PopoverDisplay = () => {
    return (
        <Container>
            <Item key="left">
                <HOCComponent1 key="left-hoc">Hover over me</HOCComponent1>
            </Item>
            <Item key="center">
                <HOCComponent2 key="center-hoc" />
            </Item>
            <Item key="right">
                <HOCComponent3 key="right-hoc" />
            </Item>
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: center;
        width: auto;
        margin-top: 1rem;
    }
`;

const Item = styled.div`
    position: relative;

    ${MediaQuery.MaxWidth.mobileL} {
        :not(:last-of-type) {
            margin-bottom: 1rem;
        }
    }
`;

const TestButton = styled(Button.Default)``;
