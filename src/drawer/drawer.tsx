import {
    FloatingFocusManager,
    useDismiss,
    useFloating,
    useInteractions,
    useTransitionStatus,
} from "@floating-ui/react";
import { CrossIcon } from "@lifesg/react-icons/cross";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { Overlay } from "../overlay";
import { ClickableIcon } from "../shared/clickable-icon";
import { Typography } from "../typography";
import { useId } from "../util";
import * as styles from "./drawer.styles";
import type { DrawerProps } from "./types";

// @catalog
/**
 * A slide-in panel that overlays the page content.
 *
 * Use `Drawer` to surface supplementary content or navigation options without
 * navigating away from the current page. Focus is trapped inside the dialog
 * while it is open and returns to the triggering element on close.
 */
export const Drawer = ({
    children,
    heading,
    show,
    onClose,
    onOverlayClick,
    className,
    ...otherProps
}: DrawerProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [showOverlay, setShowOverlay] = useState(show);
    const id = useId();
    const initialFocusRef = useRef<HTMLHeadingElement>(null);

    // =========================================================================
    // FLOATING UI CONFIG
    // =========================================================================
    const { context, refs } = useFloating({
        open: show,
        onOpenChange: (open) => {
            if (!open && onClose) {
                onClose();
            }
        },
    });

    const dismiss = useDismiss(context, {
        escapeKey: true,
        outsidePress: false, // defer to Overlay click
    });

    const { getFloatingProps } = useInteractions([dismiss]);

    const { isMounted, status } = useTransitionStatus(context, {
        duration: 800,
    });

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (!show) {
            const timer = setTimeout(() => setShowOverlay(false), 800);
            return () => clearTimeout(timer);
        } else {
            setShowOverlay(true);
        }
    }, [show]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDialogVisibility = (e: React.TransitionEvent) => {
        if (e.propertyName === "visibility" && show) {
            // focus the first element so that the screenreader enters the dialog
            initialFocusRef.current?.focus();
        }
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Overlay
            show={showOverlay}
            enableOverlayClick
            onOverlayClick={onOverlayClick}
        >
            {isMounted ? (
                <FloatingFocusManager
                    context={context}
                    initialFocus={-1}
                    returnFocus={true}
                >
                    <div
                        ref={refs.setFloating}
                        data-status={status}
                        data-testid="drawer"
                        aria-modal
                        role="dialog"
                        aria-labelledby={id}
                        onTransitionEnd={handleDialogVisibility}
                        className={clsx(styles.container, className)}
                        {...getFloatingProps()}
                        {...otherProps}
                    >
                        <div className={styles.header}>
                            <Typography.HeadingMD
                                as="h2"
                                className={styles.heading}
                                id={id}
                                ref={initialFocusRef}
                                tabIndex={-1}
                                weight="bold"
                            >
                                {heading}
                            </Typography.HeadingMD>
                        </div>
                        <div className={styles.content}>{children}</div>
                        <ClickableIcon
                            aria-label="Close drawer"
                            onClick={onClose}
                            focusHighlight={false}
                            className={styles.closeButton}
                        >
                            <CrossIcon aria-hidden />
                        </ClickableIcon>
                    </div>
                </FloatingFocusManager>
            ) : undefined}
        </Overlay>
    );
};
