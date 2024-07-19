import React, { useState } from "react";
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
    ...otherProps
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
            <TitleWrapper
                $showTitleInMobile={showTitleInMobile}
                $hasExpandAll={enableExpandAll}
            >
                {title && (
                    <Title
                        $showInMobile={showTitleInMobile}
                        data-testid="accordion-title"
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
            <Content {...otherProps}>
                {renderTitleWrapper()}
                {children}
            </Content>
        </AccordionContext.Provider>
    );
};

export const Accordion = Object.assign(AccordionBase, {
    Item: AccordionItem,
});
