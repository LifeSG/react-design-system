import React, { useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import {
    AccessibleBannerButton,
    ActionButton,
    Container,
    Content,
    ContentLink as NBLink,
    StyledIcon,
    StyledIconButton,
    TextContainer,
    Wrapper,
} from "./notification-banner.styles";
import {
    NotificationBannerProps,
    NotificationBannerWithForwardedRefProps,
} from "./types";

export const NBComponent = ({
    children,
    visible = true,
    dismissible = true,
    sticky = true,
    onDismiss,
    id,
    forwardedRef,
    maxCollapsedHeight,
    onClick,
    actionButton,
    ...otherProps
}: NotificationBannerWithForwardedRefProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"];

    const [isVisible, setVisible] = useState<boolean>(visible);
    const { height: contentHeight, ref: contentRef } = useResizeDetector();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setVisible(visible);
    }, [visible]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDismiss = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setVisible(false);

        if (dismissible && onDismiss) onDismiss();
    };

    const handleBannerClick = (event: React.MouseEvent) => {
        if (!onClick) return;
        event.stopPropagation();
        onClick();
    };

    const handleActionButtonOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (!actionButton.onClick) {
            handleBannerClick(event);
            return;
        }
        actionButton.onClick(event);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    if (!isVisible) return null;

    const renderDismissButton = () => (
        <StyledIconButton
            onClick={handleDismiss}
            id={formatId("dismiss-button", id)}
            data-testid={formatId("dismiss-button", testId)}
            focusHighlight={false}
        >
            <StyledIcon />
        </StyledIconButton>
    );

    const renderActionButton = () => (
        <ActionButton
            id={formatId("action-button", id)}
            data-testid={formatId("action-button", testId)}
            onClick={handleActionButtonOnClick}
            {...actionButton}
        >
            {actionButton.children}
        </ActionButton>
    );

    const renderChildren = () => {
        if (
            !maxCollapsedHeight ||
            !contentRef.current ||
            (contentHeight && contentHeight < maxCollapsedHeight)
        ) {
            return children;
        } else {
            return (
                <div ref={contentRef}>
                    {children}
                </div>
            );
        }
    };

    const renderAccessibleBannerButton = () => (<AccessibleBannerButton onClick={handleBannerClick} aria-label={"Clickable banner"}/>);

    return (
        <Wrapper
            ref={forwardedRef}
            $sticky={sticky}
            $clickable={!!onClick}
            onClick={handleBannerClick}
            {...otherProps}
        >
            <Container id={formatId("container", id)}>
                <TextContainer>
                    <Content
                        data-testid={formatId("text-content", testId)}
                        $maxCollapsedHeight={maxCollapsedHeight} 
                    >
                        {renderChildren()}
                        {actionButton && renderActionButton()}
                    </Content>
                </TextContainer>
                {dismissible && renderDismissButton()}
            </Container>
            {onClick && renderAccessibleBannerButton()}
        </Wrapper>
    );
};

/**
 * Intermediate component to handle passing the ref as a prop
 */
const NBWithRef = (
    props: NotificationBannerProps,
    ref: React.Ref<HTMLDivElement>
) => {
    return <NBComponent {...props} forwardedRef={ref} />;
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const formatId = (componentName: string, id = "wrapper"): string => {
    return `${id}-${componentName}`;
};

// =============================================================================
// EXPORTABLE
// =============================================================================
const Base = React.forwardRef(NBWithRef);
export const NotificationBanner = Object.assign(Base, {
    Link: NBLink,
});
