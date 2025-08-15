import { useSpring } from "@react-spring/web";
import { useContext, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
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
    LabelText,
    LabelWrapper,
    NonExpandable,
} from "./box-container.styles";
import { BoxContainerProps } from "./types";
import { SimpleIdGenerator } from "../util";
import { VisuallyHidden } from "../shared/accessibility";

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
    const theme = useContext(ThemeContext);
    const mobileBreakpoint = Breakpoint["sm-max"]({ theme });
    const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });
    const interactiveHeader = clickableHeader && collapsible;
    const internalId = useRef(SimpleIdGenerator.generate());
    const contentId = `${internalId.current}-content`;
    const headerId = `${internalId.current}-header`;

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
                    data-testid={"expandable-container"}
                    id={contentId}
                    aria-labelledby={headerId}
                    role="region"
                >
                    <ChildContainer ref={childRef} inert={!showExpanded}>
                        {children}
                    </ChildContainer>
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
                    <AlertIcon
                        $displayState={displayState}
                        data-testid={
                            subComponentTestIds?.displayStateIcon ||
                            `${displayState}-icon`
                        }
                        aria-label={displayState}
                    />
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
                    aria-labelledby={headerId}
                    aria-controls={contentId}
                    aria-disabled={!collapsible} // remains focusable
                    aria-expanded={showExpanded}
                    data-testid={subComponentTestIds?.handle || "handle"}
                >
                    <HandleIconContainer $expanded={showExpanded} aria-hidden>
                        <HandleIcon />
                    </HandleIconContainer>
                </Handle>
            )
        );
    };

    return (
        <Container {...otherProps} aria-labelledby={headerId}>
            <Header
                data-testid="header"
                onClick={interactiveHeader ? onHandleClick : undefined}
                $interactive={interactiveHeader}
            >
                <LabelWrapper role={"status"}>
                    <LabelText
                        data-testid={subComponentTestIds?.title || "title"}
                    >
                        {title}
                        {displayState !== "default" && (
                            <VisuallyHidden>{`${displayState} state`}</VisuallyHidden>
                        )}
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
