import {
    CrossIcon,
    ExclamationCircleFillIcon,
    ExclamationTriangleFillIcon,
    ICircleFillIcon,
    TickCircleFillIcon,
} from "@lifesg/react-icons";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { easings, useSpring } from "react-spring";
import { MediaWidths } from "../spec/media-spec";
import { v2_Text } from "../v2_text";
import {
    ActionButton,
    ContentWrapper,
    Description,
    DismissButton,
    TextContainer,
    TextIconWrapper,
    Title,
    Wrapper,
} from "./toast.styles";
import { ToastProps } from "./types";
import React from "react";

const DEFAULT_AUTO_DISMISS_TIME = 4000;

export const Toast = ({
    type = "success",
    title,
    label,
    autoDismiss,
    autoDismissTime = DEFAULT_AUTO_DISMISS_TIME,
    onDismiss,
    fixed = true,
    actionButton,
    ...otherProps
}: ToastProps) => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================

    const [isVisible, setVisible] = useState<boolean>(false);

    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.tablet,
    });
    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setVisible(true);
    }, []);

    useEffect(() => {
        if (!autoDismiss) return;

        const timeout = setTimeout(() => {
            setVisible(false);
        }, autoDismissTime);

        return () => clearTimeout(timeout);
    }, [autoDismiss]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDismiss = () => {
        setVisible(false);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const transitions = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible
            ? isMobile
                ? `translateY(0%)`
                : `translateX(0%)`
            : isMobile
            ? `translateY(-1500%)`
            : `translateX(150%)`,
        config: {
            easing: easings.easeInOutQuart,
            duration: 1000,
        },
        onRest: () => {
            if (!isVisible) onDismiss?.();
        },
    });

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderIcon = () => {
        switch (type) {
            case "success":
                return <TickCircleFillIcon />;
            case "warning":
                return <ExclamationTriangleFillIcon />;
            case "error":
                return <ExclamationCircleFillIcon />;
            case "info":
                return <ICircleFillIcon />;
            default:
                return null;
        }
    };

    const renderDesc = () => {
        if (React.isValidElement(label)) {
            return label;
        } else if (title) {
            return <v2_Text.BodySmall>{label}</v2_Text.BodySmall>;
        } else {
            return <v2_Text.Body>{label}</v2_Text.Body>;
        }
    };

    return (
        <Wrapper
            style={transitions}
            $type={type}
            $fixed={fixed}
            {...otherProps}
        >
            <ContentWrapper>
                <TextIconWrapper $type={type}>
                    {renderIcon()}
                    <TextContainer>
                        {title &&
                            (React.isValidElement(title) ? (
                                title
                            ) : (
                                <Title $type={type} weight="semibold">
                                    {title}
                                </Title>
                            ))}
                        {label && (
                            <Description $type={type}>
                                {renderDesc()}
                            </Description>
                        )}
                    </TextContainer>
                </TextIconWrapper>

                {actionButton && (
                    <ActionButton
                        styleType="light"
                        onClick={actionButton.onClick}
                    >
                        {actionButton.label}
                    </ActionButton>
                )}
            </ContentWrapper>
            <DismissButton $type={type} onClick={handleDismiss}>
                <CrossIcon />
            </DismissButton>
        </Wrapper>
    );
};
