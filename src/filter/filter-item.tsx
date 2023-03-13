import { ChevronDownIcon } from "@lifesg/react-icons";
import { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import {
    Expandable,
    FilterItemBody,
    FilterItemExpandButton,
    FilterItemHeader,
    FilterItemTitle,
    FilterItemWrapper,
} from "./filter-item.styles";
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
        <FilterItemWrapper>
            <FilterItemHeader>
                {title && <FilterItemTitle>{title}</FilterItemTitle>}
                {collapsible && (
                    <FilterItemExpandButton
                        onClick={() => {
                            setExpanded(!expanded);
                        }}
                    >
                        <ChevronDownIcon />
                    </FilterItemExpandButton>
                )}
            </FilterItemHeader>
            <Expandable style={expandableStyles}>
                <FilterItemBody ref={resizeDetector.ref}>
                    {render(mode)}
                </FilterItemBody>
            </Expandable>
        </FilterItemWrapper>
    );
};
