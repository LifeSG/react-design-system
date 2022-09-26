import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../src/button";
import { MediaQuery } from "../../src/media";
import { withTooltip } from "../../src/tooltip";

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

// =============================================================================
// TOOLTIP HOC
// =============================================================================
interface ComponentProps {
    onHover: (type: "in" | "out") => void;
}

const Component = (props: ComponentProps) => (
    <Button.Default
        onMouseEnter={() => props.onHover("in")}
        onMouseLeave={() => props.onHover("out")}
    >
        Hover over me
    </Button.Default>
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
        <div style={{ display: "flex" }}>
            <WrappedComponent
                onHover={handleHover}
                tooltipVisible={tooltipVisible}
                position="right"
            />
        </div>
    );
};
