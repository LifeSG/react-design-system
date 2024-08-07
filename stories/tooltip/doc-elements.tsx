import React, { useState } from "react";
import styled from "styled-components";
import { Button, ButtonProps } from "../../src/button";
import { V2_MediaQuery } from "../../src/v2_media";
import { TooltipPosition, withTooltip } from "../../src/tooltip";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0;

    ${V2_MediaQuery.MaxWidth.mobileL} {
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

    ${V2_MediaQuery.MaxWidth.mobileL} {
        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 2.5rem;
        }
    }
`;

// =============================================================================
// TOOLTIP HOC
// =============================================================================
const Component = (props: ButtonProps) => (
    <Button.Default {...props}>Click on me</Button.Default>
);

const WrappedComponent = withTooltip(Component, {
    content: "This is my tooltip",
});

export const TooltipHOCExample = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div style={{ display: "flex" }}>
            <WrappedComponent
                onClick={() => setVisible(!visible)}
                position="right"
                tooltipVisible={visible}
            />
        </div>
    );
};

// =============================================================================
// POSITION TOOLTIPS
// =============================================================================
const LeftTrigger = (props: ButtonProps) => (
    <Button.Default {...props}>Left</Button.Default>
);

const RightTrigger = (props: ButtonProps) => (
    <Button.Default {...props}>Right</Button.Default>
);

const TopTrigger = (props: ButtonProps) => (
    <Button.Default {...props}>Top</Button.Default>
);

const BottomTrigger = (props: ButtonProps) => (
    <Button.Default {...props}>Bottom</Button.Default>
);

const LeftWrapper = withTooltip(LeftTrigger, {
    content: "I am a left positioned",
});

const RightWrapper = withTooltip(RightTrigger, {
    content: "I am a right positioned",
});

const TopWrapper = withTooltip(TopTrigger, {
    content: "I am a top positioned",
});

const BottomWrapper = withTooltip(BottomTrigger, {
    content: "I am a bottom positioned",
});

const WrapperArray = [LeftWrapper, TopWrapper, BottomWrapper, RightWrapper];
const PositionsArray: TooltipPosition[] = ["left", "top", "bottom", "right"];

export const PositionalTooltips = () => {
    const [tooltip1Visible, setTooltip1Visible] = useState(false);
    const [tooltip2Visible, setTooltip2Visible] = useState(false);
    const [tooltip3Visible, setTooltip3Visible] = useState(false);
    const [tooltip4Visible, setTooltip4Visible] = useState(false);

    const handleClick = (index: number) => () => {
        switch (index) {
            case 1:
                setTooltip1Visible(!tooltip1Visible);
                break;
            case 2:
                setTooltip2Visible(!tooltip2Visible);
                break;
            case 3:
                setTooltip3Visible(!tooltip3Visible);
                break;
            case 4:
                setTooltip4Visible(!tooltip4Visible);
                break;
        }
    };

    const getVisibility = (index: number) => {
        switch (index) {
            case 1:
                return tooltip1Visible;
            case 2:
                return tooltip2Visible;
            case 3:
                return tooltip3Visible;
            case 4:
                return tooltip4Visible;
        }
    };

    return (
        <Container>
            {WrapperArray.map((Component, index) => {
                return (
                    <Item key={`item-${index}`}>
                        <Component
                            onClick={handleClick(index + 1)}
                            tooltipVisible={getVisibility(index + 1)}
                            position={PositionsArray[index]}
                        />
                    </Item>
                );
            })}
        </Container>
    );
};
