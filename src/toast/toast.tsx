import {
    CrossIcon,
    ExclamationCircleFillIcon,
    ExclamationTriangleFillIcon,
    ICircleFillIcon,
    TickCircleFillIcon,
} from "@lifesg/react-icons";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { easings, useSpring } from "react-spring";
import {
    ActionButton,
    ContentWrapper,
    DescriptionBL,
    DescriptionMD,
    DismissButton,
    TextContainer,
    TextIconWrapper,
    Title,
    Wrapper,
} from "./toast.styles";
import { ToastProps } from "./types";
import React from "react";
import { Breakpoint } from "../theme";
import { useTheme } from "styled-components";
import { inertValue } from "../shared/accessibility";

const DEFAULT_AUTO_DISMISS_TIME = 4000;

const TOAST_ICON_MAP = {
    success: TickCircleFillIcon,
    warning: ExclamationTriangleFillIcon,
    error: ExclamationCircleFillIcon,
    info: ICircleFillIcon,
};

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
    const toastRef = useRef<HTMLDivElement>(null);
    const [isVisible, setVisible] = useState<boolean>(false);

    const theme = useTheme();

    const mobileBreakpoint = Breakpoint["lg-max"]({ theme });
    const isMobile = useMediaQuery({
        maxWidth: mobileBreakpoint,
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

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (
                event.key === "Escape" &&
                toastRef.current?.contains(document.activeElement)
            ) {
                handleDismiss();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

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
        const Icon = TOAST_ICON_MAP[type];
        return Icon && <Icon aria-hidden />;
    };

    const renderTitle = () => {
        if (React.isValidElement(title)) {
            return title;
        } else {
            return (
                <Title $type={type} weight="semibold" role="presentation">
                    {title}
                </Title>
            );
        }
    };

    const renderDesc = () => {
        if (React.isValidElement(label)) {
            return label;
        } else if (title) {
            return <DescriptionMD $type={type}>{label}</DescriptionMD>;
        } else {
            return <DescriptionBL $type={type}>{label}</DescriptionBL>;
        }
    };

    return (
        <Wrapper
            ref={toastRef}
            style={transitions}
            $type={type}
            $fixed={fixed}
            role="alert"
            aria-label={type}
            inert={inertValue(!isVisible)}
            {...otherProps}
        >
            <ContentWrapper>
                <TextIconWrapper $type={type}>
                    {renderIcon()}
                    <TextContainer>
                        {title && renderTitle()}
                        {label && renderDesc()}
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
            <DismissButton
                $type={type}
                onClick={handleDismiss}
                aria-label="Close notification"
            >
                <CrossIcon aria-hidden />
            </DismissButton>
        </Wrapper>
    );
};
