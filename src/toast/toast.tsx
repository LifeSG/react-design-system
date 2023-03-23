import React, { useEffect, useState } from "react";
import { ToastProps } from "./types";
import { animated, easings, useSpring } from "react-spring";
import { useMediaQuery } from "react-responsive";
import { MediaWidths } from "../spec/media-spec";
import { Text } from "../text";
import {
    ExclamationCircleFillIcon,
    ExclamationTriangleFillIcon,
    ICircleFillIcon,
    TickCircleFillIcon,
} from "@lifesg/react-icons";
import {
    CloseIcon,
    Description,
    DismissButton,
    IconContainer,
    TextContainer,
    Title,
    Wrapper,
} from "./toast.styles";

export const Toast: React.FC = ({
    type = "success",
    title,
    description,
    autoDismiss,
    ...otherProps
}: ToastProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [isVisible, setVisible] = useState<boolean>(false);
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
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

    const transitions = useSpring({
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
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setVisible(true);
    }, []);

    useEffect(() => {
        if (!autoDismiss) return;

        let timer = 4;

        const interval = setInterval(() => {
            timer--;
            if (timer === 0) {
                clearInterval(interval);
                setVisible(false);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [autoDismiss]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDismiss = () => {
        setVisible(false);
    };

    return (
        <animated.div>
            <Wrapper
                style={transitions}
                $type={type}
                $autoDismiss={autoDismiss}
                {...otherProps}
            >
                <IconContainer>{renderIcon()}</IconContainer>
                <TextContainer>
                    {title && (
                        <Title $type={type} weight={"semibold"}>
                            {title}
                        </Title>
                    )}
                    {description && (
                        <Description $type={type}>
                            {!title ? (
                                <Text.Body>{description}</Text.Body>
                            ) : (
                                <Text.BodySmall>{description}</Text.BodySmall>
                            )}
                        </Description>
                    )}
                </TextContainer>
                <DismissButton $type={type} onClick={handleDismiss}>
                    <CloseIcon />
                </DismissButton>
            </Wrapper>
        </animated.div>
    );
};
