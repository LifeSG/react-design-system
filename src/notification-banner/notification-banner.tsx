import React, { NamedExoticComponent, useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import {
    AccessibleBannerButton,
    ActionButton,
    Container,
    Content,
    ContentContainer,
    ContentText,
    IconContainer,
    ContentLink as NBLink,
    StyledIcon,
    StyledIconButton,
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
    icon,
    ...otherProps
}: NotificationBannerWithForwardedRefProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"];

    const [isVisible, setVisible] = useState<boolean>(visible);
    const { height: contentHeight = 0, ref: contentRef } = useResizeDetector();

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

    const handleActionButtonOnClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        if (!actionButton?.onClick) {
            // let it bubble
            return;
        }
        event.stopPropagation();
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
            type="button"
            aria-label="Dismiss notification"
        >
            <StyledIcon aria-hidden />
        </StyledIconButton>
    );

    const renderActionButton = () => {
        if (!actionButton) return null;

        return (
            <ActionButton
                id={formatId("action-button", id)}
                data-testid={formatId("action-button", testId)}
                type="button"
                {...actionButton}
                onClick={handleActionButtonOnClick}
            >
                {actionButton.children}
            </ActionButton>
        );
    };

    const renderContent = () => (
        <Content
            data-testid={formatId("text-content", testId)}
            $maxCollapsedHeight={
                maxCollapsedHeight && contentHeight > maxCollapsedHeight
                    ? maxCollapsedHeight
                    : undefined
            }
        >
            {icon && <IconContainer aria-label="Icon" role="img">{icon}</IconContainer>}
            <ContentText ref={contentRef}>{children}</ContentText>
        </Content>
    );

    const renderAccessibleBannerButton = () => (
        <AccessibleBannerButton aria-label={"Clickable banner"} type="button" />
    );

    return (
        <Wrapper
            ref={forwardedRef}
            $sticky={sticky}
            $clickable={!!onClick}
            onClick={onClick}
            role="marquee"
            aria-live="polite"
            aria-atomic="true"
            aria-label="Notification banner"
            aria-describedby={dismissible ? formatId("dismiss-button", id) : undefined}
            {...otherProps}
        >
            <Container id={formatId("container", id)}>
                <ContentContainer>
                    {renderContent()}
                    {renderActionButton()}
                </ContentContainer>
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
(Base as NamedExoticComponent).displayName = "NotificationBanner";
export const NotificationBanner = Object.assign(Base, {
    Link: NBLink,
});
