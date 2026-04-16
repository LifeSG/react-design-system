import { ChevronDownIcon } from "@lifesg/react-icons";
import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { ExclamationTriangleFillIcon } from "@lifesg/react-icons/exclamation-triangle-fill";
import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import { TickCircleFillIcon } from "@lifesg/react-icons/tick-circle-fill";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { Markup } from "../markup";
import { inertValue } from "../shared/accessibility";
import { useApplyStyle } from "../theme";
import { Typography } from "../typography";
import { SimpleIdGenerator } from "../util";
import * as styles from "./alert.styles";
import type { AlertProps } from "./types";

const TYPE_CLASS_MAP = {
    error: {
        wrapperTypeClass: styles.wrapperError,
        iconColorClass: styles.alertIconError,
    },
    success: {
        wrapperTypeClass: styles.wrapperSuccess,
        iconColorClass: styles.alertIconSuccess,
    },
    warning: {
        wrapperTypeClass: styles.wrapperWarning,
        iconColorClass: styles.alertIconWarning,
    },
    info: {
        wrapperTypeClass: styles.wrapperInfo,
        iconColorClass: styles.alertIconInfo,
    },
    description: {
        wrapperTypeClass: styles.wrapperDescription,
        iconColorClass: styles.alertIconDescription,
    },
};

export const Alert = ({
    type,
    className,
    children,
    actionLink,
    actionLinkIcon,
    sizeType = "default",
    showIcon = false,
    customIcon,
    maxCollapsedHeight,
    role,
    ...otherProps
}: AlertProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showHiddenContent, setShowHiddenContent] = useState<boolean>(false);
    const [renderShowMore, setRenderShowMore] = useState<boolean>(false);
    const { height: contentHeight, ref: contentRef } =
        useResizeDetector<HTMLDivElement>();
    const [contentId] = useState(() => SimpleIdGenerator.generate());
    const containerRef = useRef<HTMLDivElement>(null);
    const isCollapsed = isContentOutsideCollapsibleZone();

    // =============================================================================
    // HELPERS
    // =============================================================================

    const getAlertLabel = () => {
        switch (type) {
            case "success":
                return "Success";
            case "warning":
                return "Warning";
            case "error":
                return "Error";
            case "info":
                return "Information";
            case "description":
                return "Description";
            default:
                return "Alert";
        }
    };

    const setCollapsedState = useCallback(() => {
        setShowHiddenContent(!maxCollapsedHeight);
        setRenderShowMore(isContentOutsideCollapsibleZone());
    }, [maxCollapsedHeight, contentHeight]);

    function isContentOutsideCollapsibleZone() {
        if (contentHeight && maxCollapsedHeight) {
            return contentHeight > maxCollapsedHeight;
        }
        return false;
    }

    const isInert = () => {
        return !!maxCollapsedHeight && !showHiddenContent;
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        setCollapsedState();
    }, [maxCollapsedHeight, contentHeight, setCollapsedState]);

    useApplyStyle(containerRef, {
        [styles.tokens.maxCollapsedHeight]:
            !showHiddenContent && isCollapsed && maxCollapsedHeight
                ? `${maxCollapsedHeight}px`
                : null,
    });

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderShowMoreButton = () => (
        <button
            className={clsx(
                styles.showMoreButton,
                sizeType === "small"
                    ? styles.showMoreButtonSmall
                    : styles.showMoreButtonDefault
            )}
            type="button"
            aria-expanded={showHiddenContent}
            aria-controls={contentId}
            onClick={() => setShowHiddenContent(!showHiddenContent)}
        >
            Show {showHiddenContent ? "less" : "more"}
            <ChevronDownIcon
                className={clsx(
                    styles.chevronIcon,
                    showHiddenContent
                        ? styles.chevronIconExpanded
                        : styles.chevronIconCollapsed
                )}
            />
        </button>
    );

    const renderLinkType = () => {
        if (actionLinkIcon) return actionLinkIcon;
        return <ArrowRightIcon />;
    };

    const renderLink = () => {
        if (!actionLink) return null;

        return (
            <Typography.LinkSM
                data-testid="action-link"
                className={clsx(
                    styles.actionLinkText,
                    sizeType === "small"
                        ? styles.actionLinkTextSmall
                        : styles.actionLinkTextDefault
                )}
                underlineStyle="none"
                {...actionLink}
            >
                {actionLink.children}
                {renderLinkType()}
            </Typography.LinkSM>
        );
    };

    const renderIcon = () => {
        if (type && customIcon) return customIcon;
        switch (type) {
            case "success":
                return <TickCircleFillIcon aria-hidden />;
            case "warning":
                return <ExclamationTriangleFillIcon aria-hidden />;
            case "error":
                return <ExclamationCircleFillIcon aria-hidden />;
            case "info":
                return <ICircleFillIcon aria-hidden />;
            case "description":
                return <ICircleFillIcon aria-hidden />;
            default:
                return null;
        }
    };

    const renderContent = () => {
        return (
            <div
                id={contentId}
                className={clsx(
                    styles.textWrapperContainer,
                    showHiddenContent &&
                        actionLink &&
                        styles.textWrapperContainerShowMoreWithLink,
                    !showHiddenContent &&
                        isCollapsed &&
                        styles.textWrapperContainerCollapsed
                )}
                inert={inertValue(isInert())}
                ref={containerRef}
            >
                <Markup
                    ref={contentRef}
                    className={styles.textWrapper}
                    baseTextSize={sizeType === "small" ? "body-sm" : "body-md"}
                >
                    {children}
                </Markup>
                {renderLink()}
            </div>
        );
    };

    const {
        wrapperTypeClass = styles.wrapperWarning,
        iconColorClass = styles.alertIconWarning,
    } = TYPE_CLASS_MAP[type] || {};

    return (
        <div
            className={clsx(styles.wrapper, wrapperTypeClass, className)}
            aria-label={`${getAlertLabel()}`}
            data-testid={otherProps["data-testid"]}
            role={role}
        >
            {showIcon && (
                <div
                    className={clsx(
                        styles.alertIconWrapper,
                        sizeType === "small"
                            ? styles.alertIconWrapperSmall
                            : styles.alertIconWrapperDefault,
                        iconColorClass
                    )}
                >
                    {renderIcon()}
                </div>
            )}
            {/* 
                CSS-BASED TAB ORDER IMPLEMENTATION:
                - DOM order: button → link → content (natural tab order)
                - Visual order: content → button (via CSS order property)
            */}
            <div className={styles.contentContainer}>
                {renderShowMore && renderShowMoreButton()}
                {renderContent()}
            </div>
        </div>
    );
};
