import { useSpring } from "@react-spring/web";
import isNil from "lodash/isNil";
import { useContext, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { PopoverAddon } from "../form/form-label-addon";
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
import { VisuallyHidden, inertValue } from "../shared/accessibility";
import { SimpleIdGenerator } from "../util";

export const FilterItem = ({
    collapsible: desktopCollapsible = true,
    initialExpanded = false,
    expanded: controlledExpanded,
    onExpandChange,
    minimisable = false,
    minimisedHeight,
    showDivider = true,
    showMobileDivider = true,
    title,
    addon,
    children,
    ...otherProps
}: FilterItemProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { mode, rootNode } = useContext(FilterContext);
    const isMobile = mode === "mobile";
    const [expanded, setExpanded] = useState(getInitialExpandState());
    const [contentMinimised, setContentMinimised] = useState(minimisable);
    const collapsible = !isMobile && desktopCollapsible;

    const itemResizeDetector = useResizeDetector();
    const contentResizeDetector = useResizeDetector();
    const itemAnimationStyles = useSpring({
        height: expanded ? itemResizeDetector.height : 0,
    });
    const contentHeight = contentMinimised
        ? minimisedHeight ??
          Math.min((contentResizeDetector.height ?? 0) * 0.5, 216)
        : contentResizeDetector.height;
    const internalId = useRef(SimpleIdGenerator.generate());
    const contentId = `${internalId.current}-content`;
    const titleId = `${internalId.current}-title`;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setExpanded(getInitialExpandState());
    }, [desktopCollapsible, controlledExpanded]);

    useEffect(() => {
        setContentMinimised(minimisable);
    }, [minimisable]);
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleExpandCollapse = () => {
        const nextState = !expanded;

        if (isNil(controlledExpanded)) {
            setExpanded(nextState);
        }

        if (onExpandChange) {
            onExpandChange(nextState);
        }
    };

    const handleMinimise = () => {
        setContentMinimised(!contentMinimised);
    };

    // =============================================================================
    // HELPERS
    // =============================================================================
    function getInitialExpandState() {
        if (isMobile) {
            return true;
        }
        if (isNil(controlledExpanded)) {
            return !desktopCollapsible || initialExpanded;
        }
        return controlledExpanded;
    }

    // =============================================================================
    // RENDER
    // =============================================================================

    const renderAddon = () => {
        switch (addon?.type) {
            case "popover":
                return (
                    <PopoverAddon
                        addon={addon}
                        rootNode={isMobile ? rootNode : undefined}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <FilterItemWrapper
            $isMobile={isMobile}
            $collapsible={collapsible}
            aria-labelledby={titleId}
        >
            <Divider
                $isMobile={isMobile}
                $showDivider={showDivider}
                $showMobileDivider={showMobileDivider}
            />
            {(title || collapsible) && (
                <FilterItemHeader $isMobile={isMobile}>
                    {title && (
                        <FilterItemTitle
                            id={titleId}
                            data-testid="filter-item-title"
                            $isMobile={isMobile}
                        >
                            {title} {addon && renderAddon()}
                        </FilterItemTitle>
                    )}
                    {collapsible && (
                        <FilterItemExpandButton
                            data-testid={"expand-collapse-button"}
                            focusHighlight={false}
                            focusOutline="browser"
                            onClick={handleExpandCollapse}
                            aria-expanded={expanded}
                            aria-disabled={!collapsible}
                            aria-controls={contentId}
                        >
                            {title && (
                                <VisuallyHidden as="span">
                                    {title}
                                </VisuallyHidden>
                            )}
                            <ChevronIcon $expanded={expanded} aria-hidden />
                        </FilterItemExpandButton>
                    )}
                </FilterItemHeader>
            )}
            <ExpandableItem
                id={contentId}
                data-testid={"expandable-container"}
                data-expanded={expanded}
                style={itemAnimationStyles}
                inert={inertValue(!expanded)}
            >
                <div ref={itemResizeDetector.ref}>
                    <FilterItemBody {...otherProps}>
                        <MinimisableContent
                            data-testid="minimisable-container"
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
                                type="button"
                                onClick={handleMinimise}
                            >
                                <VisuallyHidden as="span">{`view ${
                                    contentMinimised ? "more" : "less"
                                } in ${title}`}</VisuallyHidden>
                                <span aria-hidden>
                                    View {contentMinimised ? "more" : "less"}
                                </span>
                            </FilterItemMinimiseButton>
                        )}
                    </FilterItemBody>
                </div>
            </ExpandableItem>
        </FilterItemWrapper>
    );
};

FilterItem.displayName = "Filter.Item";
