import React, { forwardRef, useContext, useEffect, useState } from "react";
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


function _AccordionItem(
    {
        title,
        children,
        expanded,
        type = "default",
        ...otherProps
    }: AccordionItemProps,
    ref: React.Ref<HTMLDivElement>
) {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const expandAll = useContext(AccordionContext);
    const [expand, setExpand] = useState<boolean>(expanded ?? expandAll);
    const [hasFirstLoad, setHasFirstLoad] = useState<boolean>(false);

    const testId = otherProps["data-testid"] || "accordion-item";

    const resizeDetector = useResizeDetector();
    const childRef = resizeDetector.ref;

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        if (hasFirstLoad) {
            setExpand(expandAll);
        }
    }, [expandAll]);

    useEffect(() => {
        if (hasFirstLoad) {
            setExpand(expanded);
        }
    }, [expanded]);

    useEffect(() => {
        setHasFirstLoad(true);
    }, []);

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
    const resizeHeight = { height: expand ? resizeDetector.height : 0 };
    const expandableStyles = useSpring(resizeHeight);

    const renderContent = () => {
        return (
            <Expandable
                style={hasFirstLoad ? expandableStyles : resizeHeight}
                $isCollapsed={expand}
                data-testid={`${testId}-expandable-container`}
            >
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
            ref={ref}
        >
            <TitleContainer>
                {renderTitle()}
                <ExpandCollapseButton
                    data-testid={`${testId}-expand-collapse-button`}
                    onClick={handleExpandCollapseClick}
                    $isCollapsed={expand}
                    focusHighlight={false}
                    focusOutline="browser"
                    aria-label={expand ? "Collapse" : "Expand"}
                >
                    <ChevronIcon />
                </ExpandCollapseButton>
            </TitleContainer>
            {renderContent()}
        </Container>
    );
}

export const AccordionItem = forwardRef(_AccordionItem);
