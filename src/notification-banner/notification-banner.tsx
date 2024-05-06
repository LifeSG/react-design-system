import { ArrowRightIcon } from "@lifesg/react-icons";
import { isNil } from "lodash";
import React, { useEffect, useState } from "react";
import {
    Container,
    Content,
    ContentWrapperContainer,
    ContentLink as NBLink,
    StyledIcon,
    StyledIconButton,
    TextContainer,
    ViewMoreButton,
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
    collapsedHeight,
    onClick,
    ...otherProps
}: NotificationBannerWithForwardedRefProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"];

    const [isVisible, setVisible] = useState<boolean>(visible);

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

    const handleBannerClick = (event: React.MouseEvent<HTMLInputElement>) => {
        if (!onClick) return;
        event.stopPropagation();
        onClick();
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    if (!isVisible) return null;

    const renderViewMore = () => (
        <ViewMoreButton>
            View more
            <ArrowRightIcon />
        </ViewMoreButton>
    );

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
                    <Content data-testid={formatId("text-content", testId)}>
                        <ContentWrapperContainer
                            $collapsedHeight={collapsedHeight}
                        >
                            {children}
                        </ContentWrapperContainer>
                        {!isNil(collapsedHeight) && renderViewMore()}
                    </Content>
                </TextContainer>
                {dismissible && (
                    <StyledIconButton
                        onClick={handleDismiss}
                        id={formatId("dismiss-button", id)}
                        data-testid={formatId("dismiss-button", testId)}
                        focusHighlight={false}
                    >
                        <StyledIcon />
                    </StyledIconButton>
                )}
            </Container>
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
