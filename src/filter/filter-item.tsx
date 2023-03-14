import { useContext, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import { FilterContext } from "./filter-context";
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

export const FilterItem = ({
    collapsible: desktopCollapsible = true,
    showDivider = true,
    showMobileDivider = true,
    title,
    children,
    ...otherProps
}: FilterItemProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { mode } = useContext(FilterContext);
    const isMobile = mode === "mobile";
    const [expanded, setExpanded] = useState(
        isMobile ? true : !desktopCollapsible
    );
    const collapsible = !isMobile && desktopCollapsible;

    const resizeDetector = useResizeDetector();
    const expandableStyles = useSpring({
        height: expanded ? resizeDetector.height : 0,
    });

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
        <FilterItemWrapper $collapsible={collapsible}>
            <Divider
                $showDivider={showDivider}
                $showMobileDivider={showMobileDivider}
            />
            {(title || collapsible) && (
                <FilterItemHeader>
                    {title && (
                        <FilterItemTitle weight="semibold">
                            {title}
                        </FilterItemTitle>
                    )}
                    {collapsible && (
                        <FilterItemExpandButton
                            focusHighlight={false}
                            focusOutline="browser"
                            onClick={() => {
                                setExpanded(!expanded);
                            }}
                            aria-label={expanded ? "Collapse" : "Expand"}
                        >
                            <ChevronIcon $expanded={expanded} />
                        </FilterItemExpandButton>
                    )}
                </FilterItemHeader>
            )}
            <Expandable style={isMobile ? undefined : expandableStyles}>
                <div ref={resizeDetector.ref}>
                    <FilterItemBody {...otherProps}>
                        {typeof children === "function"
                            ? children(mode)
                            : children}
                    </FilterItemBody>
                </div>
            </Expandable>
        </FilterItemWrapper>
    );
};
