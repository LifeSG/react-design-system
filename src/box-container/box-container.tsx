import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { animated, useSpring } from "@react-spring/web";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { inertValue, VisuallyHidden } from "../shared/accessibility";
import { useMaxWidthMediaQuery } from "../theme";
import { useId } from "../util";
import * as styles from "./box-container.styles";
import type { BoxContainerProps } from "./types";

/**
 * A titled, collapsible section container that groups related content behind a
 * labelled header.
 *
 * Use `BoxContainer` when you need to visually separate a block of content
 * under a heading and optionally allow users to collapse it. The header
 * supports an optional call-to-action slot and a display state (`"error"` or
 * `"warning"`) that surfaces an alert icon with an accessible label. On mobile
 * viewports the collapse handle is repositioned inside the label row; on wider
 * viewports it sits at the trailing edge of the header. When `clickableHeader`
 * is enabled the entire header row acts as the expand/collapse trigger in
 * addition to the dedicated chevron button.
 */
export const BoxContainer = ({
    children,
    title,
    collapsible = true,
    expanded = false,
    callToActionComponent,
    displayState = "default",
    subComponentTestIds,
    clickableHeader,
    className,
    ...otherProps
}: BoxContainerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showExpanded, setShowExpanded] = useState<boolean>(
        !collapsible ? true : expanded
    );
    const resizeDetector = useResizeDetector();
    const childRef = resizeDetector.ref;
    const isMobile = useMaxWidthMediaQuery("sm");
    const interactiveHeader = clickableHeader && collapsible;
    const internalId = useId();
    const contentId = `${internalId}-content`;
    const headerId = `${internalId}-header`;
    const handleIconRef = useRef<HTMLDivElement>(null);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const onHandleClick = (event: React.MouseEvent) => {
        // to prevent it triggers twice when click on button as clickableHeader enable
        event.stopPropagation();
        setShowExpanded(!showExpanded);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    // React spring animation configuration
    const expandableStyles = useSpring({
        height: showExpanded ? resizeDetector.height : 0,
    });

    const renderChildContent = () => {
        if (collapsible) {
            return (
                <animated.div
                    className={styles.expandable}
                    style={expandableStyles}
                    data-testid={"expandable-container"}
                    id={contentId}
                >
                    <div
                        className={styles.childContainer}
                        ref={childRef}
                        inert={inertValue(!showExpanded)}
                    >
                        {children}
                    </div>
                </animated.div>
            );
        }

        return (
            <div
                className={styles.nonExpandable}
                data-testid="non-expandable-container"
            >
                <div className={styles.childContainer}>{children}</div>
            </div>
        );
    };

    const renderDisplayIcon = () => {
        switch (displayState) {
            case "error":
            case "warning":
                return (
                    <ExclamationCircleFillIcon
                        className={clsx(
                            styles.alertIcon,
                            displayState === "error" && styles.alertIconError,
                            displayState === "warning" &&
                                styles.alertIconWarning
                        )}
                        data-testid={
                            subComponentTestIds?.displayStateIcon ||
                            `${displayState}-icon`
                        }
                        aria-label={displayState}
                    />
                );
            default:
                return null;
        }
    };

    const renderHandleIcon = () => {
        return (
            collapsible && (
                <button
                    className={styles.handle}
                    onClick={onHandleClick}
                    type="button"
                    aria-labelledby={headerId}
                    aria-controls={contentId}
                    aria-disabled={!collapsible} // remains focusable
                    aria-expanded={showExpanded}
                    data-testid={subComponentTestIds?.handle || "handle"}
                >
                    <div
                        className={clsx(
                            styles.handleIconContainer,
                            showExpanded
                                ? styles.handleIconContainerExpanded
                                : styles.handleIconContainerCollapsed
                        )}
                        ref={handleIconRef}
                        aria-hidden
                    >
                        <ChevronDownIcon className={styles.handleIcon} />
                    </div>
                </button>
            )
        );
    };

    return (
        <section
            {...otherProps}
            className={clsx(styles.container, className)}
            aria-labelledby={headerId}
            role="region"
            title={typeof title === "string" ? title : undefined}
        >
            <div
                className={clsx(
                    styles.header,
                    interactiveHeader && styles.headerInteractive
                )}
                data-testid="header"
                onClick={interactiveHeader ? onHandleClick : undefined}
            >
                <div
                    className={styles.labelWrapper}
                    role={"status"}
                    id={headerId}
                >
                    <div
                        className={styles.labelText}
                        data-testid={subComponentTestIds?.title || "title"}
                    >
                        {title}
                        {displayState !== "default" && (
                            <>
                                <VisuallyHidden>{displayState}</VisuallyHidden>
                            </>
                        )}
                    </div>
                    {renderDisplayIcon()}
                    {isMobile && renderHandleIcon()}
                </div>
                {callToActionComponent && (
                    <div
                        className={clsx(
                            styles.callToActionContainer,
                            collapsible &&
                                styles.callToActionContainerCollapsible
                        )}
                        data-testid="call-to-action-container"
                    >
                        {callToActionComponent}
                    </div>
                )}

                {!isMobile && renderHandleIcon()}
            </div>
            {renderChildContent()}
        </section>
    );
};
