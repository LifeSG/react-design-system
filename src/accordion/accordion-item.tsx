import React, { useContext, useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import { AccordionContext } from "./accordion-context";
import {
    ChevronIcon,
    Container,
    DescriptionContainer,
    ExpandCollapseButton,
    Expandable,
    Title,
    TitleContainer,
    TitleH4,
} from "./accordion-item.style";
import { AccordionItemProps } from "./types";

export const AccordionItem = ({
    title,
    children,
    expanded = true,
    type = "default",
    ...otherProps
}: AccordionItemProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const expandAll = useContext(AccordionContext);
    const [expand, setExpand] = useState<boolean>(expandAll || expanded);
    const testId = otherProps["data-testid"] || "accordion-item";

    const resizeDetector = useResizeDetector();
    const childRef = resizeDetector.ref;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setExpand(expandAll);
    }, [expandAll]);

    useEffect(() => {
        setExpand(expanded);
    }, [expanded]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleExpandCollapseClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setExpand((prevExpand) => !prevExpand);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    // React spring animation configuration
    const expandableStyles = useSpring({
        height: expand ? resizeDetector.height : 0,
    });

    const renderContent = () => {
        return (
            <Expandable style={expandableStyles} $isCollapsed={expand}>
                <DescriptionContainer ref={childRef} id="content-container">
                    {children}
                </DescriptionContainer>
            </Expandable>
        );
    };

    const renderTitle = () => {
        switch (type) {
            case "small":
                return (
                    <TitleH4
                        data-testid={`${testId}-title`}
                        $isCollapsed={expand}
                    >
                        {title}
                    </TitleH4>
                );
            default:
                return (
                    <Title
                        data-testid={`${testId}-title`}
                        $isCollapsed={expand}
                    >
                        {title}
                    </Title>
                );
        }
    };

    return (
        <Container
            data-testid={testId}
            className={otherProps.className}
            $isCollapsed={expand}
        >
            <TitleContainer>
                {renderTitle()}
                <ExpandCollapseButton
                    data-testid={`${testId}-expand-collapse-button`}
                    onClick={handleExpandCollapseClick}
                    $isCollapsed={expand}
                    aria-label={expand ? "Collapse" : "Expand"}
                >
                    <ChevronIcon type="chevron-up" />
                </ExpandCollapseButton>
            </TitleContainer>
            {renderContent()}
        </Container>
    );
};
