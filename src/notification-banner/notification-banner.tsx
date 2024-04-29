import React, { useEffect, useRef, useState } from "react";
import {
    Container,
    Content,
    ContentLink as NBLink,
    StyledIcon,
    StyledIconButton,
    TextContainer,
    TextWrapperContainer,
    ViewMoreText,
    ViewMoreWrapper,
    Wrapper,
} from "./notification-banner.styles";
import {
    NotificationBannerProps,
    NotificationBannerWithForwardedRefProps,
} from "./types";
import { ArrowRightIcon } from "@lifesg/react-icons";

export const NBComponent = ({
    children,
    visible = true,
    dismissible = true,
    sticky = true,
    onDismiss,
    id,
    forwardedRef,
    maxLines,
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
    const handleDismiss = () => {
        setVisible(false);

        if (dismissible && onDismiss) onDismiss();
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    if (!isVisible) return null;

    return (
        <Wrapper
            ref={forwardedRef}
            $sticky={sticky}
            $onClickEnabled={!!onClick}
            onClickCapture={(event: React.MouseEvent<HTMLInputElement>) => {
                if (!onClick) return;
                event.preventDefault();
                event.stopPropagation();
                onClick();
            }}
            {...otherProps}
        >
            <Container id={formatId("container", id)}>
                <TextContainer>
                    <Content data-testid={formatId("text-content", testId)}>
                        <TextWrapperContainer $maxNoOfLines={maxLines}>
                            {children}
                        </TextWrapperContainer>
                        {maxLines !== undefined && (
                            <ViewMoreText weight="semibold">
                                <ViewMoreWrapper>
                                    View more
                                    <ArrowRightIcon />
                                </ViewMoreWrapper>
                            </ViewMoreText>
                        )}
                    </Content>
                </TextContainer>
                {dismissible && (
                    <StyledIconButton
                        onClick={(
                            event: React.MouseEvent<HTMLButtonElement>
                        ) => {
                            event.stopPropagation();
                            handleDismiss();
                        }}
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
