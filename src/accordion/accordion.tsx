import React, { useState } from "react";
import { AccordionItem } from "./accordion-item";
import {
    Content,
    ExpandCollapseLink,
    Title,
    TitleWrapper,
} from "./accordion.style";
import { AccordionProps } from "./types";
import { AccordionContext } from "./accordion-context";

const AccordionBase = ({
    children,
    title,
    enableExpandAll = true,
    initialDisplay = "expand-all",
    showTitleInMobile = false,
    className,
}: AccordionProps): JSX.Element => {
    const [expandAll, setExpandAll] = useState<boolean>(
        initialDisplay === "expand-all"
    );

    const handleExpandCollapseClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setExpandAll((prevExpandValue) => !prevExpandValue);
    };

    const renderCollapseExpandAll = () => {
        return (
            <ExpandCollapseLink
                data-testid={"accordion-expand-collapse-button"}
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
            <TitleWrapper $hasTitle={!!title || showTitleInMobile}>
                {title && (
                    <Title
                        $showInMobile={showTitleInMobile}
                        data-testid={"accordion-title"}
                    >
                        {title}
                    </Title>
                )}
                {enableExpandAll && renderCollapseExpandAll()}
            </TitleWrapper>
        );
    };

    return (
        <AccordionContext.Provider value={expandAll}>
            <Content className={className}>
                {renderTitleWrapper()}
                {children}
            </Content>
        </AccordionContext.Provider>
    );
};

export const Accordion = Object.assign(AccordionBase, {
    Item: AccordionItem,
});
