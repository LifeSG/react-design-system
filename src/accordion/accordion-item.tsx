import React, {
    forwardRef,
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
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
import { AccordionItemHandle, AccordionItemProps } from "./types";

function Component(
    {
        title,
        children,
        expanded,
        type = "default",
        collapsible = true,
        ...otherProps
    }: AccordionItemProps,
    ref: React.Ref<AccordionItemHandle>
) {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const elementRef = useRef<HTMLDivElement>();
    const expandAll = useContext(AccordionContext);
    const [expand, setExpand] = useState<boolean>(
        collapsible ? expanded ?? expandAll : true
    );
    const [hasFirstLoad, setHasFirstLoad] = useState<boolean>(false);

    const testId = otherProps["data-testid"] || "accordion-item";

    const resizeDetector = useResizeDetector();
    const childRef = resizeDetector.ref;

    useImperativeHandle(
        ref,
        () =>
            Object.assign(elementRef.current, {
                expand(): void {
                    setExpand(true);
                },
                collapse(): void {
                    setExpand(false);
                },
                isExpanded() {
                    return expand;
                },
            }),
        [expand]
    );

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        if (hasFirstLoad) {
            setExpand(collapsible ? expandAll : true);
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
        if (typeof title !== "string") {
            return title;
        }

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
            ref={elementRef}
        >
            <TitleContainer onClick={handleExpandCollapseClick}>
                {renderTitle()}
                {collapsible && (
                    <ExpandCollapseButton
                        data-testid={`${testId}-expand-collapse-button`}
                        $isCollapsed={expand}
                        focusHighlight={false}
                        focusOutline="browser"
                        aria-label={expand ? "Collapse" : "Expand"}
                    >
                        <ChevronIcon />
                    </ExpandCollapseButton>
                )}
            </TitleContainer>
            {renderContent()}
        </Container>
    );
}

export const AccordionItem = forwardRef<
    AccordionItemHandle,
    AccordionItemProps
>(Component);
