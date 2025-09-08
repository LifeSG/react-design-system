import React, { useEffect, useState } from "react";
import { AccordionContext } from "./accordion-context";
import { AccordionItem } from "./accordion-item";
import {
    Content,
    ExpandCollapseLink,
    Title,
    TitleWrapper,
} from "./accordion.style";
import { AccordionProps } from "./types";

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
    const [isUserExpandAction, setIsUserExpandAction] = useState(false);

    useEffect(() => {
        setHasFirstLoad(true);
    }, []);

    useEffect(() => {
        if (hasFirstLoad) {
            onExpandCollapseChange?.(expandAll);
        }
    }, [expandAll, hasFirstLoad]);

    useEffect(() => {
        if (hasFirstLoad && isUserExpandAction) {
            setIsUserExpandAction(false);
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
    }, [isUserExpandAction, hasFirstLoad]);

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
        setIsUserExpandAction(true);
        setItemState((prev) => ({ ...prev, [id]: isExpanded }));
    };

    const onItemDelete = (id: string) => {
        setItemState((prev) => {
            const newState = { ...prev };
            delete newState[id];
            return newState;
        });
    };

    const renderCollapseExpandAll = () => {
        return (
            <ExpandCollapseLink
                data-testid="accordion-expand-collapse-button"
                onClick={handleExpandCollapseClick}
                styleType="link"
                type="button"
            >
                {expandAll ? "Hide all" : "Show all"}
            </ExpandCollapseLink>
        );
    };

    const renderTitleWrapper = () => {
        if (!title && !enableExpandAll) {
            return null;
        }

        return (
            <TitleWrapper
                $showTitleInMobile={showTitleInMobile}
                $hasExpandAll={enableExpandAll}
            >
                {title && (
                    <Title
                        $showInMobile={showTitleInMobile}
                        data-testid="accordion-title"
                        aria-level={headingLevel}
                    >
                        {title}
                    </Title>
                )}
                {enableExpandAll && renderCollapseExpandAll()}
            </TitleWrapper>
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
                onItemDelete,
                itemState,
            }}
        >
            <Content id={id} data-testid={testId} className={className}>
                {renderTitleWrapper()}
                {children}
            </Content>
        </AccordionContext.Provider>
    );
};

export const Accordion = Object.assign(AccordionBase, {
    Item: AccordionItem,
});
