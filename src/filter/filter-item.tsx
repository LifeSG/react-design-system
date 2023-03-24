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
    FilterItemMinimiseButton,
    FilterItemTitle,
    FilterItemWrapper,
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
    id,
    ...otherProps
}: FilterItemProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { mode } = useContext(FilterContext);
    const [uuid] = useState(() => crypto.randomUUID());
    const isMobile = mode === "mobile";
    const [collapsed, setCollapsed] = useState(
        isMobile ? false : desktopCollapsible
    );
    const [minimised, setMinimised] = useState(minimisable);
    const collapsible = !isMobile && desktopCollapsible;
    const contentId = (id ?? uuid) + "-content";

    const itemResizeDetector = useResizeDetector();
    const contentResizeDetector = useResizeDetector();
    const itemAnimationStyles = useSpring({
        height: collapsed ? 0 : itemResizeDetector.height,
    });
    const contentHeight = minimised
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
                            aria-label={title}
                            aria-expanded={!collapsed}
                            aria-controls={contentId}
                        >
                            <ChevronIcon $expanded={!collapsed} />
                        </FilterItemExpandButton>
                    )}
                </FilterItemHeader>
            )}
            <Expandable
                id={contentId}
                style={isMobile ? undefined : itemAnimationStyles}
            >
                <div
                    ref={itemResizeDetector.ref}
                    inert={collapsed ? "" : undefined}
                >
                    <FilterItemBody id={id} {...otherProps}>
                        <Expandable $height={contentHeight}>
                            <div ref={contentResizeDetector.ref}>
                                <div data-id="content-container">
                                    {typeof children === "function"
                                        ? children(mode, { minimised })
                                        : children}
                                </div>
                            </div>
                        </Expandable>
                        {minimisable && (
                            <FilterItemMinimiseButton
                                data-id="minimise-button"
                                styleType="link"
                                onClick={() => {
                                    setMinimised(!minimised);
                                }}
                            >
                                View {minimised ? "more" : "less"}
                            </FilterItemMinimiseButton>
                        )}
                    </FilterItemBody>
                </div>
            </Expandable>
        </FilterItemWrapper>
    );
};
