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
import { Text } from "../text";
import {
    Description,
    DismissButton,
    TextContainer,
    Title,
    Wrapper,
} from "./toast.styles";
import { ToastProps } from "./types";

const DEFAULT_AUTO_DISMISS_TIME = 4000;

export const Toast = ({
    type = "success",
    title,
    label,
    autoDismiss,
    autoDismissTime = DEFAULT_AUTO_DISMISS_TIME,
    onDismiss,
    fixed = true,
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

    return (
        <Wrapper
            style={transitions}
            $type={type}
            $fixed={fixed}
            {...otherProps}
        >
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
                <CrossIcon />
            </DismissButton>
        </Wrapper>
    );
};
