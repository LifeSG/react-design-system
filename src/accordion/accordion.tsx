import clsx from "clsx";
import type React from "react";
import { useEffect, useState } from "react";

import { Button } from "../button";
import * as styles from "./accordion.styles";
import { AccordionContext } from "./accordion-context";
import { AccordionItem } from "./accordion-item";
import type { AccordionProps } from "./types";

const AccordionBase = ({
    children,
    title,
    enableExpandAll = true,
    initialDisplay = "expand-all",
    showTitleInMobile = false,
    id,
    "data-testid": testId,
    className,
    headingLevel = 2,
    onExpandCollapseChange,
}: AccordionProps): JSX.Element => {
    const [expandAll, setExpandAll] = useState<boolean>(
        initialDisplay === "expand-all"
    );
    const [hasFirstLoad, setHasFirstLoad] = useState<boolean>(false);
    const [itemState, setItemState] = useState<Record<string, boolean>>({});

    useEffect(() => {
        setHasFirstLoad(true);
    }, []);

    useEffect(() => {
        if (hasFirstLoad) {
            onExpandCollapseChange?.(expandAll);
        }
    }, [expandAll, hasFirstLoad]);

    useEffect(() => {
        if (hasFirstLoad) {
            const itemStates = Object.values(itemState);
            if (itemStates.length > 0) {
                const allExpanded = itemStates.every((state) => state === true);
                const allCollapsed = itemStates.every(
                    (state) => state === false
                );

                if (allExpanded && !expandAll) {
                    setExpandAll(true);
                } else if (allCollapsed && expandAll) {
                    setExpandAll(false);
                }
            }
        }
    }, [itemState, expandAll, hasFirstLoad]);

    const handleExpandCollapseClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setExpandAll((prevExpandValue) => {
            const expandValue = !prevExpandValue;

            const updatedChildState = Object.keys(itemState).reduce(
                (acc, key) => {
                    acc[key] = expandValue;
                    return acc;
                },
                {} as typeof itemState
            );

            setItemState(updatedChildState);
            return expandValue;
        });
    };

    const onItemStateChange = (id: string, isExpanded: boolean) => {
        setItemState((prev) => ({ ...prev, [id]: isExpanded }));
    };

    const onItemDeregister = (id: string) => {
        setItemState((prev) => {
            const newState = { ...prev };
            delete newState[id];
            return newState;
        });
    };

    const renderCollapseExpandAll = () => {
        return (
            <Button
                className={styles.expandCollapseLink}
                data-testid="accordion-expand-collapse-button"
                onClick={handleExpandCollapseClick}
                styleType="link"
                type="button"
                sizeType="small"
            >
                {expandAll ? "Hide all" : "Show all"}
            </Button>
        );
    };

    const renderTitleWrapper = () => {
        if (!title && !enableExpandAll) {
            return null;
        }

        return (
            <div
                className={clsx(
                    styles.titleWrapper,
                    !showTitleInMobile &&
                        !enableExpandAll &&
                        styles.titleWrapperHidden
                )}
            >
                {title && (
                    <h2
                        className={clsx(
                            styles.title,
                            !showTitleInMobile && styles.titleHidden
                        )}
                        data-testid="accordion-title"
                        aria-level={headingLevel}
                    >
                        {title}
                    </h2>
                )}
                {enableExpandAll && renderCollapseExpandAll()}
            </div>
        );
    };

    return (
        <AccordionContext.Provider
            value={{
                expandAll,
                itemHeadingLevel: headingLevel
                    ? title
                        ? headingLevel + 1
                        : headingLevel
                    : undefined,
                onItemStateChange,
                onItemDeregister,
                itemState,
            }}
        >
            <div
                id={id}
                data-testid={testId}
                className={clsx(styles.accordionWrapper, className)}
            >
                {renderTitleWrapper()}
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

// @catalog
/**
 * A vertically stacked set of collapsible content panels.
 *
 * Use `Accordion` to organise related content into independently expandable
 * sections with shared expand/collapse state. The container synchronises item
 * states and maintains correct heading-level hierarchy.
 *
 * Sub-components:
 * - `Accordion.Item` — a single collapsible panel with an imperative ref handle.
 */
export const Accordion = Object.assign(AccordionBase, {
    /**
     * Renders an individual collapsible section within an `Accordion`.
     *
     * Each item has a clickable header that toggles its content panel. The expanded
     * state can be individually controlled via the `expanded` prop, or left to the
     * parent `Accordion` to manage through its "Show all" / "Hide all" mechanism.
     * Exposes an imperative ref handle (`AccordionItemHandle`) for programmatic
     * expand/collapse control.
     */
    Item: AccordionItem,
});
