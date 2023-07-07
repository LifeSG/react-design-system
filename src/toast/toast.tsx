import {
    ExclamationCircleFillIcon,
    ExclamationTriangleFillIcon,
    ICircleFillIcon,
    TickCircleFillIcon,
} from "@lifesg/react-icons";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { easings, useSpring } from "react-spring";
import { MediaWidths } from "../spec/media-spec";
import { Text } from "../text";
import {
    CloseIcon,
    Description,
    DismissButton,
    TextContainer,
    Title,
    Wrapper,
} from "./toast.styles";
import { ToastProps } from "./types";

export const Toast = ({
    type = "success",
    title,
    label,
    autoDismiss,
    onDismiss,
    ...otherProps
}: ToastProps) => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [isVisible, setVisible] = useState<boolean>(false);
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setVisible(true);
    }, []);

    useEffect(() => {
        if (!autoDismiss) return;

        setTimeout(() => {
            setVisible(false);
            onDismiss?.();
        }, timer);

        return () => clearTimeout(timer);
    }, [autoDismiss]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDismiss = () => {
        setVisible(false);
        onDismiss?.();
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

    return (
        <Wrapper style={transitions} $type={type} {...otherProps}>
            {renderIcon()}
            <TextContainer>
                {title && (
                    <Title $type={type} weight="semibold">
                        {title}
                    </Title>
                )}
                {label && (
                    <Description $type={type}>
                        {!title ? (
                            <Text.Body>{label}</Text.Body>
                        ) : (
                            <Text.BodySmall>{label}</Text.BodySmall>
                        )}
                    </Description>
                )}
            </TextContainer>
            <DismissButton $type={type} onClick={handleDismiss}>
                <CloseIcon />
            </DismissButton>
        </Wrapper>
    );
};

const timer = 4000;
