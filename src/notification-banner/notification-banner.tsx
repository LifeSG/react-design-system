import { CrossIcon } from "@lifesg/react-icons";
import clsx from "clsx";
import type { NamedExoticComponent } from "react";
import React, { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { Layout } from "../layout";
import { ClickableIcon } from "../shared/clickable-icon";
import { formatUnitValue, useApplyStyle } from "../theme";
import { Typography } from "../typography";
import * as styles from "./notification-banner.styles";
import type {
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
    maxCollapsedHeight,
    onClick,
    actionButton,
    icon,
    className,
    ...otherProps
}: NotificationBannerWithForwardedRefProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"];

    const [isVisible, setVisible] = useState<boolean>(visible);
    const { height: contentHeight = 0, ref: contentRef } = useResizeDetector();
    const contentTextRef = useRef<HTMLDivElement>(null);

    const isCollapsed =
        maxCollapsedHeight && contentHeight > maxCollapsedHeight;

    useApplyStyle(contentTextRef, {
        [styles.tokens.contentText.maxCollapsedHeight]: isCollapsed
            ? formatUnitValue(maxCollapsedHeight, "px")
            : undefined,
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setVisible(visible);
    }, [visible]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDismiss = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setVisible(false);

        if (dismissible && onDismiss) onDismiss();
    };

    const handleActionButtonOnClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        if (!actionButton?.onClick) {
            // let it bubble
            return;
        }
        event.stopPropagation();
        actionButton.onClick(event);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    if (!isVisible) return null;

    const renderDismissButton = () => (
        <ClickableIcon
            className={styles.styledIconButton}
            tabIndex={0}
            onClick={handleDismiss}
            id={formatId("dismiss-button", id)}
            data-testid={formatId("dismiss-button", testId)}
            focusOutline="browser"
            focusHighlight={false}
            type="button"
            aria-label="close"
        >
            <CrossIcon aria-hidden />
        </ClickableIcon>
    );

    const renderActionButton = () => {
        if (!actionButton) return null;

        return (
            <button
                className={styles.actionButton}
                id={formatId("action-button", id)}
                data-testid={formatId("action-button", testId)}
                type="button"
                {...actionButton}
                onClick={handleActionButtonOnClick}
            >
                {actionButton.children}
            </button>
        );
    };

    const renderContent = () => (
        <div
            className={styles.content}
            data-testid={formatId("text-content", testId)}
        >
            <div className={styles.contentWrapper}>
                <div
                    ref={contentTextRef}
                    className={clsx(
                        styles.contentText,
                        isCollapsed && styles.contentTextCollapsed
                    )}
                >
                    <div ref={contentRef}>{children}</div>
                </div>
                {renderActionButton()}
            </div>
        </div>
    );

    const renderAccessibleBannerButton = () => (
        <button
            className={styles.accessibleBannerButton}
            aria-label={"Clickable banner"}
            type="button"
        />
    );

    return (
        <div
            ref={forwardedRef}
            className={clsx(
                styles.wrapper,
                sticky && styles.wrapperSticky,
                !!onClick && styles.wrapperClickable,
                className
            )}
            onClick={onClick}
            role="region"
            {...otherProps}
        >
            <Layout.Content id={formatId("container", id)}>
                {icon && (
                    <div className={styles.iconContainer} aria-hidden>
                        {icon}
                    </div>
                )}
                <div className={styles.contentContainer}>{renderContent()}</div>
                {dismissible && renderDismissButton()}
            </Layout.Content>
            {onClick && renderAccessibleBannerButton()}
        </div>
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

const NBLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentProps<typeof Typography.LinkBL>
>(function NotificationBannerLink(props, ref) {
    return (
        <Typography.LinkBL
            ref={ref}
            className={clsx(styles.contentLink, props.className)}
            {...props}
        />
    );
});

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
(Base as NamedExoticComponent).displayName = "NotificationBanner";
export const NotificationBanner = Object.assign(Base, {
    Link: NBLink,
});
