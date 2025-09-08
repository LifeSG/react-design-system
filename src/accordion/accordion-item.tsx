import { useSpring } from "@react-spring/web";
import React, {
    forwardRef,
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { useResizeDetector } from "react-resize-detector";
import { inertValue } from "../shared/accessibility";
import { SimpleIdGenerator } from "../util";
import { AccordionContext } from "./accordion-context";
import {
    ChevronIcon,
    Container,
    ContentContainer,
    ExpandCollapseButton,
    Expandable,
    IconContainer,
    Title,
} from "./accordion-item.style";
import {
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
    const { expandAll, itemHeadingLevel, onItemStateChange, itemState } =
        useContext(AccordionContext);
    const [hasFirstLoad, setHasFirstLoad] = useState<boolean>(false);
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const contentId = `${internalId}-content`;
    const resizeDetector = useResizeDetector();
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
        if (collapsible) {
            onItemStateChange(internalId, expandAll);
        }
    }, []);

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
        height: expanded ? resizeDetector.height : 0,
    };
    const expandableStyles = useSpring(resizeHeight);

    const renderContent = () => {
        return (
            <Expandable
                id={contentId}
                style={hasFirstLoad ? expandableStyles : resizeHeight}
                data-testid={`${testId}-expandable-container`}
                inert={inertValue(!expanded)}
            >
                <ContentContainer
                    ref={resizeDetector.ref}
                    data-testid="content-container"
                >
                    {children}
                </ContentContainer>
            </Expandable>
        );
    };

    const renderTitleText = () => {
        if (typeof title !== "string") {
            return title;
        }

        return (
            <Title
                data-testid={`${testId}-title`}
                $type={type}
                $isCollapsed={expanded}
            >
                {title}
            </Title>
        );
    };

    const renderTitle = () => {
        return (
            <h3 aria-level={itemHeadingLevel}>
                <ExpandCollapseButton
                    data-testid={`${testId}-expand-collapse-button`}
                    onClick={
                        collapsible ? handleExpandCollapseClick : undefined
                    }
                    $expanded={expanded}
                    $collapsible={collapsible}
                    aria-controls={contentId}
                    aria-disabled={!collapsible} // remains focusable
                    aria-expanded={expanded}
                >
                    {renderTitleText()}
                    {collapsible && (
                        <IconContainer
                            data-testid={`${testId}-expand-collapse-icon`}
                            $expanded={expanded}
                        >
                            <ChevronIcon />
                        </IconContainer>
                    )}
                </ExpandCollapseButton>
            </h3>
        );
    };

    return (
        <Container
            data-testid={testId}
            className={className}
            id={id}
            $expanded={expanded}
            ref={elementRef}
        >
            {renderTitle()}
            {renderContent()}
        </Container>
    );
}

export const AccordionItem = forwardRef<
    AccordionItemHandle,
    AccordionItemProps
>(Component);
