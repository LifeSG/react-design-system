import clsx from "clsx";
import type React from "react";
import { useEffect, useState } from "react";

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
            <styles.ExpandCollapseLink
                data-testid="accordion-expand-collapse-button"
                onClick={handleExpandCollapseClick}
                styleType="link"
                type="button"
                sizeType="small"
            >
                {expandAll ? "Hide all" : "Show all"}
            </styles.ExpandCollapseLink>
        );
    };

    const renderTitleWrapper = () => {
        if (!title && !enableExpandAll) {
            return null;
        }

        return (
            <styles.TitleWrapper
                className={clsx(
                    !showTitleInMobile &&
                        !enableExpandAll &&
                        "titleWrapperHidden"
                )}
            >
                {title && (
                    <styles.Title
                        className={clsx(!showTitleInMobile && "titleHidden")}
                        data-testid="accordion-title"
                        aria-level={headingLevel}
                    >
                        {title}
                    </styles.Title>
                )}
                {enableExpandAll && renderCollapseExpandAll()}
            </styles.TitleWrapper>
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
            <styles.Content id={id} data-testid={testId} className={className}>
                {renderTitleWrapper()}
                {children}
            </styles.Content>
        </AccordionContext.Provider>
    );
};

export const Accordion = Object.assign(AccordionBase, {
    Item: AccordionItem,
});
