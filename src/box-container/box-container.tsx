import { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import {
    AlertIcon,
    CallToActionContainer,
    ChildContainer,
    Container,
    Expandable,
    Handle,
    HandleIcon,
    HandleIconContainer,
    Header,
    LabelIcon,
    LabelText,
    NonExpandable,
} from "./box-container.styles";
import { BoxContainerProps } from "./types";

export const BoxContainer = ({
    children,
    title,
    collapsible = true,
    expanded = false,
    callToActionComponent,
    displayState = "default",
    subComponentTestIds,
    ...otherProps
}: BoxContainerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showExpanded, setShowExpanded] = useState<boolean>(
        !collapsible ? true : expanded
    );
    const resizeDetector = useResizeDetector();
    const childRef = resizeDetector.ref;

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const onHandleClick = () => {
        setShowExpanded(!showExpanded);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    // React spring animation configuration
    const expandableStyles = useSpring({
        height: showExpanded ? resizeDetector.height : 0,
    });

    const renderChildContent = () => {
        if (collapsible) {
            return (
                <Expandable
                    style={expandableStyles}
                    data-testid="expandable-container"
                >
                    <ChildContainer ref={childRef}>{children}</ChildContainer>
                </Expandable>
            );
        }

        return (
            <NonExpandable data-testid="non-expandable-container">
                <ChildContainer>{children}</ChildContainer>
            </NonExpandable>
        );
    };

    const renderDisplayIcon = () => {
        switch (displayState) {
            case "error":
            case "warning":
                return (
                    <LabelIcon
                        $displayState={displayState}
                        data-testid={
                            subComponentTestIds?.displayStateIcon ||
                            `${displayState}-icon`
                        }
                    >
                        <AlertIcon />
                    </LabelIcon>
                );
            default:
                return null;
        }
    };

    return (
        <Container {...otherProps}>
            <Header data-testid="header">
                <LabelText
                    id="title"
                    data-testid={subComponentTestIds?.title || "title"}
                    weight="semibold"
                >
                    {title}
                    {renderDisplayIcon()}
                </LabelText>
                {callToActionComponent && (
                    <CallToActionContainer
                        $collapsible={collapsible}
                        data-testid="call-to-action-container"
                    >
                        {callToActionComponent}
                    </CallToActionContainer>
                )}
                {collapsible && (
                    <Handle
                        onClick={onHandleClick}
                        type="button"
                        data-testid={subComponentTestIds?.handle || "handle"}
                    >
                        <HandleIconContainer $expanded={showExpanded}>
                            <HandleIcon />
                        </HandleIconContainer>
                    </Handle>
                )}
            </Header>
            {renderChildContent()}
        </Container>
    );
};
