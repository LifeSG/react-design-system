import { useSpring } from "@react-spring/web";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useMediaQuery } from "react-responsive";

import { inertValue, VisuallyHidden } from "../shared/accessibility";
import { Breakpoint, useApplyStyle } from "../theme";
import { SimpleIdGenerator } from "../util";
import * as styles from "./box-container.styles";
import type { BoxContainerProps } from "./types";

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
    const mobileBreakpoint = Breakpoint["sm-max"];
    const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });
    const interactiveHeader = clickableHeader && collapsible;
    const internalId = useRef(SimpleIdGenerator.generate());
    const contentId = `${internalId.current}-content`;
    const headerId = `${internalId.current}-header`;
    const handleIconRef = useRef<HTMLDivElement>(null);

    // Apply CSS variables
    useApplyStyle(handleIconRef, {
        [styles.tokens.handleIconContainer.rotation]: showExpanded
            ? "180deg"
            : "0deg",
    });

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
                <styles.AnimatedExpandable
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
                </styles.AnimatedExpandable>
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
                    <styles.AlertIconComponent
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
                        className={styles.handleIconContainer}
                        ref={handleIconRef}
                        aria-hidden
                    >
                        <styles.HandleIconComponent
                            className={styles.handleIcon}
                        />
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
