import {
    FloatingFocusManager,
    useDismiss,
    useFloating,
    useInteractions,
    useTransitionStatus,
} from "@floating-ui/react";
import clsx from "clsx";
import React, { useRef } from "react";

import { Overlay } from "../overlay/overlay";
import { useViewport } from "../shared/hooks";
import { useApplyStyle } from "../theme";
import { useEvent } from "../util";
import { ModalContext } from "./modal-context";
import * as styles from "./modal-v2.styles";
import { Card, CloseButton, Content, Footer } from "./slots";
import type { ModalV2Props } from "./types";

const Base = ({
    id,
    show,
    onClose,
    animationFrom = "bottom",
    children,
    enableOverlayClick = true,
    rootComponentId,
    zIndex,
    onOverlayClick,
    dismissKeyboardOnShow = true,
    "data-testid": testId = "modal",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    disableInitialFocus = false,
    className,
    ...otherProps
}: ModalV2Props): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const dismissKeyboard = useEvent(() => {
        if (dismissKeyboardOnShow) {
            (document.activeElement as HTMLElement)?.blur?.();
        }
    });
    const { verticalHeight } = useViewport({
        enabled: show,
        onBeforeStart: dismissKeyboard,
    });
    const childRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const childWithRef =
        children && React.cloneElement(children, { ref: childRef });

    useApplyStyle(containerRef, {
        [styles.tokens.container.verticalHeight]:
            verticalHeight == null ? null : `${verticalHeight}px`,
    });

    // =========================================================================
    // FLOATING UI CONFIG
    // =========================================================================
    const { refs, context } = useFloating({
        open: show,
        onOpenChange: (isOpen) => {
            if (!isOpen) {
                onClose?.();
            }
        },
    });
    const { isMounted, status } = useTransitionStatus(context, {
        duration: 300,
    });
    const dismiss = useDismiss(context, {
        /* handled by overlayclick */
        outsidePress: false,
        enabled: !!onClose,
    });
    const { getFloatingProps } = useInteractions([dismiss]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Overlay
            data-testid={`${testId}-overlay`}
            show={show}
            enableOverlayClick={enableOverlayClick}
            onOverlayClick={onOverlayClick}
            id={id}
            rootId={rootComponentId}
            containerRef={childRef}
            zIndex={zIndex}
        >
            <div
                ref={containerRef}
                data-testid={testId}
                data-status={status}
                data-animation-from={animationFrom}
                {...otherProps}
                className={clsx(styles.container, className)}
            >
                <ModalContext.Provider value={{ onClose }}>
                    {isMounted && (
                        <FloatingFocusManager
                            context={context}
                            initialFocus={
                                disableInitialFocus ? -1 : refs.floating
                            }
                        >
                            <div className={styles.scrollContainer}>
                                <div
                                    ref={refs.setFloating}
                                    {...getFloatingProps()}
                                    role="dialog"
                                    aria-label={ariaLabel}
                                    aria-labelledby={ariaLabelledBy}
                                    aria-describedby={ariaDescribedBy}
                                    className={styles.modalContainer}
                                >
                                    {childWithRef}
                                </div>
                            </div>
                        </FloatingFocusManager>
                    )}
                </ModalContext.Provider>
            </div>
        </Overlay>
    );
};

/**
 * A composable modal dialog with slot-based content layout.
 *
 * Use `ModalV2` when you need a controlled overlay dialog with structured
 * content slots.
 *
 * Sub-components:
 * - `ModalV2.Card` — wraps modal content and arranges `Content`, `Footer`, and `CloseButton` slots in the correct layout.
 * - `ModalV2.CloseButton` — renders an accessible close button that invokes the modal's `onClose` callback.
 * - `ModalV2.Content` — container for the body content of the modal card.
 * - `ModalV2.Footer` — footer area for primary and secondary action buttons.
 */
export const ModalV2 = Object.assign(Base, {
    /** Wraps modal content and arranges `Content`, `Footer`, and `CloseButton` slots in the correct layout. */
    Card,
    /** Renders an accessible close button that invokes the modal's `onClose` callback. */
    CloseButton,
    /** Container for the body content of the modal card. */
    Content,
    /** Footer area for primary and secondary action buttons. */
    Footer,
});
