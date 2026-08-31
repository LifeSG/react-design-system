import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { animated, useSpring } from "@react-spring/web";
import clsx from "clsx";
import type React from "react";
import {
    forwardRef,
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { useResizeDetector } from "react-resize-detector";

import { inertValue } from "../shared/accessibility";
import { useId } from "../util";
import { AccordionContext } from "./accordion-context";
import * as styles from "./accordion-item.styles";
import type {
    AccordionItemApi,
    AccordionItemHandle,
    AccordionItemProps,
} from "./types";

function Component(
    {
        title,
        children,
        type = "default",
        collapsible = true,
        className,
        id,
        expanded: expandedControlled,
        onExpandChange,
        "data-testid": testId = "accordion-item",
    }: AccordionItemProps,
    ref: React.Ref<AccordionItemHandle>
) {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const elementRef = useRef<HTMLDivElement>(null);
    const {
        expandAll,
        itemHeadingLevel,
        onItemStateChange,
        itemState,
        onItemDeregister,
    } = useContext(AccordionContext);
    const [hasFirstLoad, setHasFirstLoad] = useState<boolean>(false);
    const internalId = useId();
    const contentId = `${internalId}-content`;
    const { height, ref: resizeDetectorRef } = useResizeDetector();
    const isControlled = onExpandChange !== undefined;
    const expanded = isControlled
        ? collapsible
            ? expandedControlled ?? false
            : true
        : itemState[internalId] ??
          (collapsible ? expandedControlled ?? expandAll : true);

    useImperativeHandle(
        ref,
        () =>
            Object.assign<HTMLDivElement, AccordionItemApi>(
                elementRef.current!,
                {
                    expand(): void {
                        if (isControlled) {
                            onExpandChange?.(true);
                        } else {
                            onItemStateChange(internalId, true);
                        }
                    },
                    collapse(): void {
                        if (isControlled) {
                            onExpandChange?.(false);
                        } else {
                            onItemStateChange(internalId, false);
                        }
                    },
                    isExpanded() {
                        return expanded;
                    },
                }
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [expanded]
    );

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setHasFirstLoad(true);

        return () => onItemDeregister?.(internalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Controlled mode: keep parent itemState in sync so "Show all"/"Hide all" label stays accurate
    useEffect(() => {
        if (isControlled) {
            onItemStateChange(
                internalId,
                collapsible ? expandedControlled ?? false : true
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expandedControlled, collapsible]);

    // Uncontrolled mode: sync state when expandAll button or the hint prop changes
    useEffect(() => {
        if (!isControlled) {
            onItemStateChange(
                internalId,
                collapsible ? expandedControlled ?? expandAll : true
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expandAll, expandedControlled, collapsible]);

    // Controlled mode: forward expandAll button changes to the caller
    useEffect(() => {
        if (!isControlled || !hasFirstLoad) return;
        const next = collapsible ? expandAll : true;
        if (next !== expandedControlled) {
            onExpandChange?.(next);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expandAll]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================

    const handleExpandCollapseClick = (event: React.MouseEvent) => {
        event.preventDefault();
        if (isControlled) {
            onExpandChange?.(!expanded);
        } else {
            onItemStateChange(internalId, !expanded);
        }
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    // React spring animation configuration
    const resizeHeight = {
        height: expanded ? height : 0,
    };
    const expandableStyles = useSpring(resizeHeight);

    const renderContent = () => {
        return (
            <animated.div
                id={contentId}
                className={styles.expandable}
                style={hasFirstLoad ? expandableStyles : undefined}
                data-testid={`${testId}-expandable-container`}
                inert={inertValue(!expanded)}
            >
                <div
                    ref={resizeDetectorRef}
                    className={styles.contentContainer}
                    data-testid="content-container"
                >
                    {children}
                </div>
            </animated.div>
        );
    };

    const renderTitleText = () => {
        if (typeof title !== "string") {
            return title;
        }

        return (
            <span
                data-testid={`${testId}-title`}
                className={clsx(
                    styles.title,
                    type === "small" && styles.titleSmall
                )}
            >
                {title}
            </span>
        );
    };

    const renderTitle = () => {
        return (
            <h3 aria-level={itemHeadingLevel}>
                <button
                    data-testid={`${testId}-expand-collapse-button`}
                    onClick={
                        collapsible ? handleExpandCollapseClick : undefined
                    }
                    className={clsx(
                        styles.expandCollapseButton,
                        expanded && styles.expandCollapseButtonExpanded,
                        collapsible && styles.expandCollapseButtonCollapsible
                    )}
                    aria-controls={contentId}
                    aria-disabled={!collapsible} // remains focusable
                    aria-expanded={expanded}
                >
                    {renderTitleText()}
                    {collapsible && (
                        <span
                            data-testid={`${testId}-expand-collapse-icon`}
                            className={clsx(
                                styles.iconContainer,
                                expanded && styles.iconContainerExpanded
                            )}
                        >
                            <ChevronUpIcon className={styles.chevronIcon} />
                        </span>
                    )}
                </button>
            </h3>
        );
    };

    return (
        <div
            data-testid={testId}
            className={clsx(
                styles.container,
                expanded && styles.containerExpanded,
                className
            )}
            id={id}
            ref={elementRef}
        >
            {renderTitle()}
            {renderContent()}
        </div>
    );
}

export const AccordionItem = forwardRef<
    AccordionItemHandle,
    AccordionItemProps
>(Component);
