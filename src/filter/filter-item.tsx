import { useContext, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import { FilterContext } from "./filter-context";
import {
    ChevronIcon,
    Divider,
    ExpandableItem,
    FilterItemBody,
    FilterItemExpandButton,
    FilterItemHeader,
    FilterItemMinimiseButton,
    FilterItemTitle,
    FilterItemWrapper,
    MinimisableContent,
} from "./filter-item.styles";
import { FilterItemProps } from "./types";

export const FilterItem = ({
    collapsible: desktopCollapsible = true,
    minimisable = false,
    minimisedHeight,
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
    const [collapsed, setCollapsed] = useState(
        isMobile ? false : desktopCollapsible
    );
    const [contentMinimised, setContentMinimised] = useState(minimisable);
    const collapsible = !isMobile && desktopCollapsible;

    const itemResizeDetector = useResizeDetector();
    const contentResizeDetector = useResizeDetector();
    const itemAnimationStyles = useSpring({
        height: collapsed ? 0 : itemResizeDetector.height,
    });
    const contentHeight = contentMinimised
        ? minimisedHeight ?? Math.min(contentResizeDetector.height * 0.5, 216)
        : contentResizeDetector.height;

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
                                setCollapsed(!collapsed);
                            }}
                            aria-label={collapsed ? "Expand" : "Collapse"}
                        >
                            <ChevronIcon $expanded={!collapsed} />
                        </FilterItemExpandButton>
                    )}
                </FilterItemHeader>
            )}
            <ExpandableItem style={isMobile ? undefined : itemAnimationStyles}>
                <div ref={itemResizeDetector.ref}>
                    <FilterItemBody {...otherProps}>
                        <MinimisableContent
                            $height={contentHeight}
                            $minimisable={minimisable}
                        >
                            <div ref={contentResizeDetector.ref}>
                                <div data-id="content-container">
                                    {typeof children === "function"
                                        ? children(mode, {
                                              minimised: contentMinimised,
                                          })
                                        : children}
                                </div>
                            </div>
                        </MinimisableContent>
                        {minimisable && (
                            <FilterItemMinimiseButton
                                data-id="minimise-button"
                                styleType="link"
                                onClick={() => {
                                    setContentMinimised(!contentMinimised);
                                }}
                            >
                                View {contentMinimised ? "more" : "less"}
                            </FilterItemMinimiseButton>
                        )}
                    </FilterItemBody>
                </div>
            </ExpandableItem>
        </FilterItemWrapper>
    );
};
