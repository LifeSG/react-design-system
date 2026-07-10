import {
    CrossIcon,
    ExclamationCircleFillIcon,
    ExclamationTriangleFillIcon,
    ICircleFillIcon,
    TickCircleFillIcon,
} from "@lifesg/react-icons";
import { animated, easings, useSpring } from "@react-spring/web";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "../button";
import { inertValue, VisuallyHidden } from "../shared/accessibility";
import { ClickableIcon } from "../shared/clickable-icon";
import { useMaxWidthMediaQuery } from "../theme";
import { Typography } from "../typography";
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

/**
 * A brief notification that appears on screen to provide feedback about an
 * operation or event.
 *
 * Use `Toast` to surface status messages without interrupting the user's workflow.
 */
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

    const isMobile = useMaxWidthMediaQuery("lg");

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
    }, [autoDismiss, autoDismissTime]);

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
                <h2 className={styles.title} role="presentation">
                    {title}
                </h2>
            );
        }
    };

    const renderDesc = () => {
        if (React.isValidElement(label)) {
            return label;
        } else if (title) {
            return (
                <Typography.BodyMD className={styles.description}>
                    {label}
                </Typography.BodyMD>
            );
        } else {
            return (
                <Typography.BodyBL className={styles.description}>
                    {label}
                </Typography.BodyBL>
            );
        }
    };

    return (
        <animated.div
            ref={toastRef}
            style={transitions}
            className={clsx(styles.wrapper, className)}
            data-type={type}
            data-fixed={fixed}
            role="alert"
            inert={inertValue(!isVisible)}
            {...otherProps}
        >
            <VisuallyHidden>{type}</VisuallyHidden>
            <div className={styles.contentWrapper}>
                <div className={styles.textIconWrapper} data-type={type}>
                    {renderIcon()}
                    <div className={styles.textContainer}>
                        {title && renderTitle()}
                        {label && renderDesc()}
                    </div>
                </div>

                {actionButton && (
                    <Button
                        className={styles.actionButton}
                        styleType="light"
                        onClick={actionButton.onClick}
                        sizeType="small"
                    >
                        {actionButton.label}
                    </Button>
                )}
            </div>
            <ClickableIcon
                className={styles.dismissButton}
                onClick={handleDismiss}
            >
                <VisuallyHidden role="presentation">
                    Close notification
                </VisuallyHidden>
                <CrossIcon aria-hidden />
            </ClickableIcon>
        </animated.div>
    );
};
