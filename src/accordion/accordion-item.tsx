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
    const expanded =
        itemState[internalId] ??
        (collapsible ? expandedControlled ?? expandAll : true); // the initial value

    useImperativeHandle(
        ref,
        () =>
            Object.assign<HTMLDivElement, AccordionItemApi>(
                elementRef.current!,
                {
                    expand(): void {
                        onItemStateChange(internalId, true);
                    },
                    collapse(): void {
                        onItemStateChange(internalId, false);
                    },
                    isExpanded() {
                        return expanded;
                    },
                }
            ),
        [expanded]
    );

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setHasFirstLoad(true);

        return () => onItemDeregister?.(internalId);
    }, []);

    useEffect(() => {
        onItemStateChange(
            internalId,
            collapsible ? expandedControlled ?? expandAll : true
        );
    }, [expandAll, expandedControlled, collapsible]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================

    const handleExpandCollapseClick = (event: React.MouseEvent) => {
        event.preventDefault();
        onItemStateChange(internalId, !expanded);
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
