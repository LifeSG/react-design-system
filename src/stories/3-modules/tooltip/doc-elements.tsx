import React, { useState } from "react";
import { Button, MediaQuery, Tooltip, withTooltip } from "src/components";
import { TooltipPosition } from "src/components/types";
import styled from "styled-components";

// =============================================================================
// TOOLTIP DISPLAY
// =============================================================================

export const TooltipDisplay = () => {
    const [tooltip1Visible, setTooltip1Visible] = useState<boolean>(false);
    const [tooltip2Visible, setTooltip2Visible] = useState<boolean>(false);
    const [tooltip3Visible, setTooltip3Visible] = useState<boolean>(false);
    const [tooltip4Visible, setTooltip4Visible] = useState<boolean>(false);

    const handleClick = (id: number) => {
        switch (id) {
            case 0:
                setTooltip1Visible(!tooltip1Visible);
                break;
            case 1:
                setTooltip2Visible(!tooltip2Visible);
                break;
            case 2:
                setTooltip3Visible(!tooltip3Visible);
                break;
            case 3:
                setTooltip4Visible(!tooltip4Visible);
                break;
            default:
                break;
        }
    };

    const renderTooltipComponents = () => {
        return TOOLTIP_ATTRS.map((attrs, index) => {
            let visibleState;

            switch (index) {
                case 0:
                    visibleState = tooltip1Visible;
                    break;
                case 1:
                    visibleState = tooltip2Visible;
                    break;
                case 2:
                    visibleState = tooltip3Visible;
                    break;
                case 3:
                    visibleState = tooltip4Visible;
                    break;
                default:
                    break;
            }

            return (
                <Item key={index}>
                    <Tooltip
                        key={`tooltip-${index}`}
                        id={`tooltip-${index}`}
                        visible={visibleState}
                        position={attrs.position}
                    >
                        {attrs.tooltipText}
                    </Tooltip>
                    <TestButton
                        key={index}
                        id={`button-${index}`}
                        onClick={() => handleClick(index)}
                    >
                        {attrs.title}
                    </TestButton>
                </Item>
            );
        });
    };

    return <Container>{renderTooltipComponents()}</Container>;
};

// =============================================================================
// TOOLTIP HOC
// =============================================================================
interface ComponentProps {
    onHover: (type: "in" | "out") => void;
}

const Component = (props: ComponentProps) => (
    <TestButton
        onMouseEnter={() => props.onHover("in")}
        onMouseLeave={() => props.onHover("out")}
    >
        Hover over me
    </TestButton>
);

const WrappedComponent = withTooltip(Component, {
    content: "This is my tooltip",
});

export const TooltipHOCExample = () => {
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

    const handleHover = (type: "in" | "out") => {
        if (type === "in" && !tooltipVisible) {
            setTooltipVisible(true);
        } else if (type === "out" && tooltipVisible) {
            setTooltipVisible(false);
        } else {
            // Do nothing
        }
    };

    return (
        <HOCContainer>
            <WrappedComponent
                onHover={handleHover}
                tooltipVisible={tooltipVisible}
                position="right"
            />
        </HOCContainer>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Container = styled.div`
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

const Item = styled.div`
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

const TestButton = styled(Button.Default)``;

const HOCContainer = styled.div`
    display: flex;
`;

// =============================================================================
// CONSTANT
// =============================================================================
interface TooltipAttrs {
    title: string;
    position: TooltipPosition;
    tooltipText: string;
}

const TOOLTIP_ATTRS: TooltipAttrs[] = [
    {
        title: "Left",
        tooltipText: "Left position tooltip",
        position: "left",
    },
    {
        title: "Top",
        tooltipText: "Top position tooltip",
        position: "top",
    },
    {
        title: "Bottom",
        tooltipText: "Bottom position tooltip",
        position: "bottom",
    },
    {
        title: "Right",
        tooltipText: "Right position tooltip",
        position: "right",
    },
];
