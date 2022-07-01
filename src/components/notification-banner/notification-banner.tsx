import React, { useEffect, useState } from "react";
import {
    NotificationBannerProps,
    NotificationBannerWithForwardedRefProps,
} from "./types";
import { Label as NBLabel, Link as NBLink } from "./notification-banner-label";
import {
    Container,
    StyledIconButton,
    TextContainer,
    TextContent,
    Wrapper,
} from "./notification-banner.styles";
import crossIcon from "../../assets/img/icons/icon-cross.svg";

export const NBComponent = ({
    children,
    visible = true,
    dismissible = true,
    sticky = true,
    onDismiss,
    id,
    forwardedRef,
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
    const handleDismiss = () => {
        setVisible(false);

        if (dismissible && onDismiss) onDismiss();
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderContent = () => {
        if (typeof children === "string") {
            return <NBLabel>{children}</NBLabel>;
        } else {
            return children;
        }
    };

    if (!isVisible) return null;

    return (
        <Wrapper ref={forwardedRef} sticky={sticky} {...otherProps}>
            <Container id={formatId("container", id)}>
                <TextContainer>
                    <TextContent data-testid={formatId("text-content", testId)}>
                        {renderContent()}
                    </TextContent>
                </TextContainer>
                {dismissible && (
                    <StyledIconButton
                        onClick={handleDismiss}
                        id={formatId("dismiss-button", id)}
                        data-testid={formatId("dismiss-button", testId)}
                    >
                        <img src={crossIcon} alt="close-icon" />
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

export namespace NotificationBanner {
    export const Base = React.forwardRef(NBWithRef);
    export const Label = NBLabel;
    export const Link = NBLink;
}
