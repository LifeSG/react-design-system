import { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import {
    ChevronIcon,
    Divider,
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
    first?: boolean | undefined;
}

export const FilterItem = ({
    collapsible: desktopCollapsible = true,
    mode,
    title,
    first = false,
    render,
}: FilterItemComponentProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [expanded, setExpanded] = useState(
        mode === "default" ? !desktopCollapsible : true
    );
    const collapsible = mode === "default" && desktopCollapsible;
    const showDivider = !first || collapsible;

    const resizeDetector = useResizeDetector();
    const expandableStyles = useSpring({
        height: expanded ? resizeDetector.height : 0,
    });

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <FilterItemWrapper $collapsible={collapsible}>
            {showDivider && <Divider />}
            {(title || collapsible) && (
                <FilterItemHeader>
                    {title && (
                        <FilterItemTitle weight="semibold">
                            {title}
                        </FilterItemTitle>
                    )}
                    {collapsible && (
                        <FilterItemExpandButton
                            onClick={() => {
                                setExpanded(!expanded);
                            }}
                        >
                            <ChevronIcon $expanded={expanded} />
                        </FilterItemExpandButton>
                    )}
                </FilterItemHeader>
            )}
            <Expandable style={expandableStyles}>
                <FilterItemBody ref={resizeDetector.ref}>
                    {render(mode)}
                </FilterItemBody>
            </Expandable>
        </FilterItemWrapper>
    );
};
