import { useSpring } from "@react-spring/web";
import isNil from "lodash/isNil";
import { useContext, useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { PopoverAddon } from "../form/form-label-addon";
import { inertValue, VisuallyHidden } from "../shared/accessibility";
import { useId } from "../util";
import { FilterContext } from "./filter-context";
import * as styles from "./filter-item.styles";
import type { FilterItemProps } from "./types";

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
    const internalId = useId();
    const contentId = `${internalId}-content`;
    const titleId = `${internalId}-title`;

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
        <styles.FilterItemWrapper
            $isMobile={isMobile}
            $collapsible={collapsible}
            aria-labelledby={titleId}
        >
            <styles.Divider
                $isMobile={isMobile}
                $showDivider={showDivider}
                $showMobileDivider={showMobileDivider}
            />
            {(title || collapsible) && (
                <styles.FilterItemHeader $isMobile={isMobile}>
                    {title && (
                        <styles.FilterItemTitle
                            id={titleId}
                            data-testid="filter-item-title"
                            $isMobile={isMobile}
                        >
                            {title} {addon && renderAddon()}
                        </styles.FilterItemTitle>
                    )}
                    {collapsible && (
                        <styles.FilterItemExpandButton
                            data-testid={"expand-collapse-button"}
                            focusHighlight={false}
                            focusOutline="browser"
                            onClick={handleExpandCollapse}
                            aria-expanded={expanded}
                            aria-disabled={!collapsible}
                            aria-controls={contentId}
                        >
                            {title && <VisuallyHidden>{title}</VisuallyHidden>}
                            <styles.ChevronIcon
                                $expanded={expanded}
                                aria-hidden
                            />
                        </styles.FilterItemExpandButton>
                    )}
                </styles.FilterItemHeader>
            )}
            <styles.ExpandableItem
                id={contentId}
                data-testid={"expandable-container"}
                data-expanded={expanded}
                style={itemAnimationStyles}
                inert={inertValue(!expanded)}
            >
                <div ref={itemResizeDetector.ref}>
                    <styles.FilterItemBody {...otherProps}>
                        <styles.MinimisableContent
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
                        </styles.MinimisableContent>
                        {minimisable && (
                            <styles.FilterItemMinimiseButton
                                data-id="minimise-button"
                                styleType="link"
                                type="button"
                                onClick={handleMinimise}
                            >
                                <VisuallyHidden>{`view ${
                                    contentMinimised ? "more" : "less"
                                } in ${title}`}</VisuallyHidden>
                                <span aria-hidden>
                                    View {contentMinimised ? "more" : "less"}
                                </span>
                            </styles.FilterItemMinimiseButton>
                        )}
                    </styles.FilterItemBody>
                </div>
            </styles.ExpandableItem>
        </styles.FilterItemWrapper>
    );
};

FilterItem.displayName = "Filter.Item";
