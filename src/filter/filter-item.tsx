import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { animated, useSpring } from "@react-spring/web";
import clsx from "clsx";
import isNil from "lodash/isNil";
import { useContext, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { Button } from "../button";
import { PopoverAddon } from "../form/form-label-addon";
import { inertValue, VisuallyHidden } from "../shared/accessibility";
import { ClickableIcon } from "../shared/clickable-icon";
import { useApplyStyle } from "../theme";
import { useId } from "../util";
import { FilterContext } from "./filter-context";
import * as styles from "./filter-item.styles";
import type { FilterItemProps } from "./types";

const DEFAULT_MINIMISED_HEIGHT_CAP = 216;

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
    className,
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
          Math.min(
              (contentResizeDetector.height ?? 0) * 0.5,
              DEFAULT_MINIMISED_HEIGHT_CAP
          )
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
        <div
            aria-labelledby={titleId}
            className={clsx(
                styles.filterItemWrapper,
                (collapsible || isMobile) && styles.filterItemWrapperDarker
            )}
        >
            <div
                className={clsx(
                    styles.divider,
                    (isMobile ? showMobileDivider : showDivider) &&
                        styles.dividerVisible,
                    isMobile && styles.dividerMobile
                )}
            />
            {(title || collapsible) && (
                <div
                    className={clsx(
                        styles.filterItemHeader,
                        isMobile && styles.filterItemHeaderMobile
                    )}
                >
                    {title && (
                        <h3
                            id={titleId}
                            data-testid="filter-item-title"
                            className={clsx(
                                styles.filterItemTitle,
                                isMobile && styles.filterItemTitleMobile
                            )}
                        >
                            {title} {addon && renderAddon()}
                        </h3>
                    )}
                    {collapsible && (
                        <ClickableIcon
                            className={styles.filterItemExpandButton}
                            data-testid={"expand-collapse-button"}
                            focusHighlight={false}
                            focusOutline="browser"
                            onClick={handleExpandCollapse}
                            aria-expanded={expanded}
                            aria-disabled={!collapsible}
                            aria-controls={contentId}
                        >
                            {title && <VisuallyHidden>{title}</VisuallyHidden>}
                            <ChevronDownIcon
                                aria-hidden
                                className={clsx(
                                    styles.chevronIcon,
                                    expanded && styles.chevronIconExpanded
                                )}
                            />
                        </ClickableIcon>
                    )}
                </div>
            )}
            <animated.div
                className={styles.expandableItem}
                id={contentId}
                data-testid={"expandable-container"}
                data-expanded={expanded}
                style={itemAnimationStyles}
                inert={inertValue(!expanded)}
            >
                <div ref={itemResizeDetector.ref}>
                    <div
                        className={clsx(styles.filterItemBody, className)}
                        {...otherProps}
                    >
                        <div
                            ref={minimisableContentRef}
                            data-testid="minimisable-container"
                            className={clsx(
                                styles.minimisableContent,
                                minimisable &&
                                    styles.minimisableContentMinimisable
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
                        </div>
                        {minimisable && (
                            <Button
                                className={styles.filterItemMinimiseButton}
                                data-id="minimise-button"
                                sizeType="small"
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
                            </Button>
                        )}
                    </div>
                </div>
            </animated.div>
        </div>
    );
};

FilterItem.displayName = "Filter.Item";
