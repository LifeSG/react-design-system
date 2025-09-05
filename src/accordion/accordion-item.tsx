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
        "data-testid": testId = "accordion-item",
    }: AccordionItemProps,
    ref: React.Ref<AccordionItemHandle>
) {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const elementRef = useRef<HTMLDivElement>(null);
    const { expandAll, itemHeadingLevel, onChildStateChange, childState } =
        useContext(AccordionContext);
    const [hasFirstLoad, setHasFirstLoad] = useState<boolean>(false);
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const contentId = `${internalId}-content`;
    const resizeDetector = useResizeDetector();

    useImperativeHandle(
        ref,
        () =>
            Object.assign<HTMLDivElement, AccordionItemApi>(
                elementRef.current!,
                {
                    expand(): void {
                        onChildStateChange(internalId, true);
                    },
                    collapse(): void {
                        onChildStateChange(internalId, false);
                    },
                    isExpanded() {
                        return childState[internalId];
                    },
                }
            ),
        [childState[internalId]]
    );

    // =========================================================================
    // EFFECTS
    // =========================================================================

    useEffect(() => {
        setHasFirstLoad(true);
        if (collapsible) {
            onChildStateChange(internalId, expandAll);
        }
    }, []);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================

    const handleExpandCollapseClick = (event: React.MouseEvent) => {
        event.preventDefault();
        onChildStateChange(internalId, !childState[internalId]);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    // React spring animation configuration
    const resizeHeight = {
        height: childState[internalId] ? resizeDetector.height : 0,
    };
    const expandableStyles = useSpring(resizeHeight);

    const renderContent = () => {
        return (
            <Expandable
                id={contentId}
                style={hasFirstLoad ? expandableStyles : resizeHeight}
                data-testid={`${testId}-expandable-container`}
                inert={inertValue(!childState[internalId])}
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
                $isCollapsed={childState[internalId]}
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
                    $expanded={childState[internalId]}
                    $collapsible={collapsible}
                    aria-controls={contentId}
                    aria-disabled={!collapsible} // remains focusable
                    aria-expanded={childState[internalId]}
                >
                    {renderTitleText()}
                    {collapsible && (
                        <IconContainer
                            data-testid={`${testId}-expand-collapse-icon`}
                            $expanded={childState[internalId]}
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
            $expanded={childState[internalId]}
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
