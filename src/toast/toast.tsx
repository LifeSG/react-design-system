import {
    CrossIcon,
    ExclamationCircleFillIcon,
    ExclamationTriangleFillIcon,
    ICircleFillIcon,
    TickCircleFillIcon,
} from "@lifesg/react-icons";
import { easings, useSpring } from "@react-spring/web";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

import { inertValue, VisuallyHidden } from "../shared/accessibility";
import {
    Breakpoint,
    useDesignToken,
    useSafeMaxWidthMediaQuery,
} from "../theme";
import * as styles from "./toast.styles";
import type { ToastProps } from "./types";

const DEFAULT_AUTO_DISMISS_TIME = 4000;
const EASING_DURATION = 1000;

const TOAST_ICON_MAP = {
    success: TickCircleFillIcon,
    warning: ExclamationTriangleFillIcon,
    error: ExclamationCircleFillIcon,
    info: ICircleFillIcon,
};

const TOAST_CLASS_MAP = {
    wrapper: {
        success: "toastWrapperSuccess",
        warning: "toastWrapperWarning",
        error: "toastWrapperError",
        info: "toastWrapperInfo",
    },
    textIconWrapper: {
        success: "toastTextIconWrapperSuccess",
        warning: "toastTextIconWrapperWarning",
        error: "toastTextIconWrapperError",
        info: "toastTextIconWrapperInfo",
    },
    text: {
        success: "toastTextSuccess",
        warning: "toastTextWarning",
        error: "toastTextError",
        info: "toastTextInfo",
    },
    dismissButton: {
        success: "toastDismissButtonSuccess",
        warning: "toastDismissButtonWarning",
        error: "toastDismissButtonError",
        info: "toastDismissButtonInfo",
    },
} as const;

export const Toast = ({
    type = "success",
    title,
    label,
    className,
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

    const mobileBreakpoint = useDesignToken(Breakpoint["lg-max"]);
    const isMobile = useSafeMaxWidthMediaQuery(mobileBreakpoint);

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
            duration: EASING_DURATION,
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
                <styles.Title
                    className={TOAST_CLASS_MAP.text[type]}
                    role="presentation"
                >
                    {title}
                </styles.Title>
            );
        }
    };

    const renderDesc = () => {
        if (React.isValidElement(label)) {
            return label;
        } else if (title) {
            return (
                <styles.DescriptionMD className={TOAST_CLASS_MAP.text[type]}>
                    {label}
                </styles.DescriptionMD>
            );
        } else {
            return (
                <styles.DescriptionBL className={TOAST_CLASS_MAP.text[type]}>
                    {label}
                </styles.DescriptionBL>
            );
        }
    };

    return (
        <styles.Wrapper
            ref={toastRef}
            style={transitions}
            className={clsx(
                fixed && "toastWrapperFixed",
                TOAST_CLASS_MAP.wrapper[type],
                className
            )}
            role="alert"
            inert={inertValue(!isVisible)}
            {...otherProps}
        >
            <VisuallyHidden>{type}</VisuallyHidden>
            <styles.ContentWrapper>
                <styles.TextIconWrapper
                    className={TOAST_CLASS_MAP.textIconWrapper[type]}
                >
                    {renderIcon()}
                    <styles.TextContainer>
                        {title && renderTitle()}
                        {label && renderDesc()}
                    </styles.TextContainer>
                </styles.TextIconWrapper>

                {actionButton && (
                    <styles.ActionButton
                        styleType="light"
                        onClick={actionButton.onClick}
                    >
                        {actionButton.label}
                    </styles.ActionButton>
                )}
            </styles.ContentWrapper>
            <styles.DismissButton
                className={TOAST_CLASS_MAP.dismissButton[type]}
                onClick={handleDismiss}
            >
                <VisuallyHidden role="presentation">
                    Close notification
                </VisuallyHidden>
                <CrossIcon aria-hidden />
            </styles.DismissButton>
        </styles.Wrapper>
    );
};
