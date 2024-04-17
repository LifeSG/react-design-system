import React, { useEffect, useRef, useState } from "react";
import {
    Container,
    Content,
    ContentLink as NBLink,
    StyledIcon,
    StyledIconButton,
    TextContainer,
    TextWrapperContainer,
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
    maxLines,
    onClick,
    ...otherProps
}: NotificationBannerWithForwardedRefProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"];

    const [isVisible, setVisible] = useState<boolean>(visible);
    const [isViewMore, setIsViewMore] = useState(false);
    const contentContainerHeightRef = useRef<HTMLDivElement>(null);
    const [displayShowMore, setDisplayShowMore] = useState<boolean>(false);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setVisible(visible);
    }, [visible]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    useEffect(() => {
        // forces line-clamp to trigger so that we can determine if content is collapsible
        setIsViewMore(!maxLines);
        setDisplayShowMore(!!maxLines);
        if (!maxLines || !contentContainerHeightRef.current) return;

        // calculate whether to show more after line-clamp is triggered
        const clientHeight = contentContainerHeightRef.current.clientHeight;
        const scrollHeight = contentContainerHeightRef.current.scrollHeight;

        // Note: when using DS Text.H3 or Text.H1, the calculated scrollHeight and clientHeight differs by 1 without any overflow

        setDisplayShowMore(scrollHeight - clientHeight > 1);
    }, [children]);

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
            onClick={(event: React.MouseEvent<HTMLInputElement>) => {
                event.stopPropagation();
                onClick();
            }}
            {...otherProps}
        >
            <Container id={formatId("container", id)}>
                <TextContainer>
                    <Content data-testid={formatId("text-content", testId)}>
                        <TextWrapperContainer
                            $maxNoOfLines={maxLines}
                            $showMore={isViewMore}
                        >
                            {children}
                        </TextWrapperContainer>
                        {maxLines !== undefined && displayShowMore && (
                            <ViewMoreButton
                                weight="semibold"
                                onClick={(
                                    event: React.MouseEvent<HTMLInputElement>
                                ) => {
                                    event.stopPropagation();
                                    setIsViewMore(!isViewMore);
                                }}
                            >
                                {isViewMore ? "View less" : "View more"}
                            </ViewMoreButton>
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
