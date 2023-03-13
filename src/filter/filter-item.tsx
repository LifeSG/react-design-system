import { ChevronDownIcon } from "@lifesg/react-icons";
import { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { animated, useSpring } from "react-spring";
import { Button } from "../button/button";
import { FilterItemProps } from "./types";

interface FilterItemComponentProps extends FilterItemProps {
    mode: "default" | "mobile";
}

export const FilterItem = ({
    collapsible = true,
    mode,
    title,
    render,
}: FilterItemComponentProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [expanded, setExpanded] = useState(!collapsible);

    const resizeDetector = useResizeDetector();
    const expandableStyles = useSpring({
        height: expanded ? resizeDetector.height : 0,
        overflow: "hidden",
    });

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <div>
            {title && <div>{title}</div>}
            {collapsible && (
                <Button.Default
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                >
                    <ChevronDownIcon />
                </Button.Default>
            )}
            <animated.div style={expandableStyles}>
                <div ref={resizeDetector.ref}>{render(mode)}</div>
            </animated.div>
        </div>
    );
};
