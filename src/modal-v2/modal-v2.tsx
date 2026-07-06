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
import type { ModalV2Props } from "./types";

export const ModalV2 = ({
    id,
    show,
    onClose,
    animationFrom = "bottom",
    children,
    enableOverlayClick = true,
    rootComponentId,
    rootNode,
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
            rootNode={rootNode}
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
