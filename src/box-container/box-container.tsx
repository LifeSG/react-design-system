import { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useMediaQuery } from "react-responsive";
import { useSpring } from "react-spring";
import { useTheme } from "styled-components";
import { Breakpoint } from "../theme";
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
    LabelWrapper,
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
    clickableHeader,
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
    const theme = useTheme();
    const mobileBreakpoint = Breakpoint["sm-max"]({ theme });
    const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });
    const interactiveHeader = clickableHeader && collapsible;
    const contentId = "content-container";
    const headerId = "header-title";

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const onHandleClick = (event: React.MouseEvent) => {
        // to prevent it triggers twice when click on button as clickableHeader enable
        event.stopPropagation();
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
                    data-testid={contentId}
                    id={contentId}
                    aria-labelledby={headerId}
                    role="region"
                >
                    <ChildContainer ref={childRef}>{children}</ChildContainer>
                </Expandable>
            );
        }

        return (
            <NonExpandable
                data-testid="non-expandable-container"
                id={contentId}
                aria-labelledby={headerId}
                role="region"
            >
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
                        aria-label={displayState}
                    >
                        <AlertIcon />
                    </LabelIcon>
                );
            default:
                return null;
        }
    };

    const renderHandleIcon = () => {
        return (
            collapsible && (
                <Handle
                    onClick={onHandleClick}
                    type="button"
                    aria-label={
                        showExpanded
                            ? `${title} expanded`
                            : `${title} collapsed`
                    }
                    aria-controls={contentId}
                    aria-disabled={!collapsible} // remains focusable
                    aria-expanded={expanded}
                    data-testid={subComponentTestIds?.handle || "handle"}
                >
                    <HandleIconContainer $expanded={showExpanded}>
                        <HandleIcon aria-hidden />
                    </HandleIconContainer>
                </Handle>
            )
        );
    };

    return (
        <Container
            {...otherProps}
            role={displayState !== "default" ? "status" : undefined}
            aria-live={displayState !== "default" ? "polite" : undefined}
            aria-labelledby={headerId}
        >
            <Header
                data-testid="header"
                onClick={interactiveHeader ? onHandleClick : undefined}
                $interactive={interactiveHeader}
                role="group"
            >
                <LabelWrapper>
                    <LabelText
                        data-testid={subComponentTestIds?.title || "title"}
                        id={headerId}
                    >
                        {title}
                    </LabelText>
                    {renderDisplayIcon()}
                    {isMobile && renderHandleIcon()}
                </LabelWrapper>
                {callToActionComponent && (
                    <CallToActionContainer
                        $collapsible={collapsible}
                        data-testid="call-to-action-container"
                    >
                        {callToActionComponent}
                    </CallToActionContainer>
                )}

                {!isMobile && renderHandleIcon()}
            </Header>
            {renderChildContent()}
        </Container>
    );
};
