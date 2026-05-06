import { useSpring } from "@react-spring/web";
import clsx from "clsx";
import isNil from "lodash/isNil";
import { useContext, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { PopoverAddon } from "../form/form-label-addon";
import { inertValue, VisuallyHidden } from "../shared/accessibility";
import { useApplyStyle } from "../theme";
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
    const minimisableContentRef = useRef<HTMLDivElement | null>(null);

    useApplyStyle(minimisableContentRef, {
        [styles.tokens.minimisableContent.height]: contentHeight
            ? `${contentHeight}px`
            : null,
    });

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
            aria-labelledby={titleId}
            className={clsx(
                collapsible && "filterItemWrapperCollapsible",
                isMobile && "filterItemWrapperMobile"
            )}
        >
            <styles.Divider
                className={clsx(
                    (isMobile ? showMobileDivider : showDivider) &&
                        "dividerVisible",
                    isMobile && "dividerMobile"
                )}
            />
            {(title || collapsible) && (
                <styles.FilterItemHeader
                    className={clsx(isMobile && "filterItemHeaderMobile")}
                >
                    {title && (
                        <styles.FilterItemTitle
                            id={titleId}
                            data-testid="filter-item-title"
                            className={clsx(
                                isMobile && "filterItemTitleMobile"
                            )}
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
                                aria-hidden
                                className={clsx(
                                    expanded && "chevronIconExpanded"
                                )}
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
                            ref={minimisableContentRef}
                            data-testid="minimisable-container"
                            className={clsx(
                                minimisable && "minimisableContentMinimisable"
                            )}
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
