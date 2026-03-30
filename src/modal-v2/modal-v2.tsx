import {
    FloatingFocusManager,
    useDismiss,
    useFloating,
    useInteractions,
    useTransitionStatus,
} from "@floating-ui/react";
import React, { useEffect, useRef } from "react";

import { Overlay } from "../overlay/overlay";
import { useViewport } from "../shared/hooks";
import { useEvent } from "../util";
import { ModalContext } from "./modal-context";
import { Container, ModalContainer, ScrollContainer } from "./modal-v2.styles";
import type { ModalV2Props } from "./types";

export const ModalV2 = ({
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
    ...otherProps
}: ModalV2Props): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const { verticalHeight, offsetTop } = useViewport();
    const childRef = useRef<HTMLDivElement>(null);
    const childWithRef =
        children &&
        React.cloneElement(children as React.ReactElement, { ref: childRef });

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
    // EFFECTS
    // =========================================================================
    const dismissKeyboard = useEvent(() => {
        if (dismissKeyboardOnShow) {
            (document.activeElement as HTMLElement)?.blur?.();
        }
    });

    useEffect(() => {
        if (show) {
            dismissKeyboard();
        }
    }, [show, dismissKeyboard]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Overlay
            data-testid={`${testId}-overlay`}
            show={isMounted}
            enableOverlayClick={enableOverlayClick}
            onOverlayClick={onOverlayClick}
            id={id}
            rootId={rootComponentId}
            containerRef={childRef}
            zIndex={zIndex}
        >
            <Container
                $show={isMounted}
                $animationFrom={animationFrom}
                data-testid={testId}
                $verticalHeight={verticalHeight}
                $offsetTop={offsetTop}
                data-status={status}
                {...otherProps}
            >
                <ModalContext.Provider value={{ onClose }}>
                    {isMounted && (
                        <FloatingFocusManager
                            context={context}
                            initialFocus={
                                disableInitialFocus ? -1 : refs.floating
                            }
                        >
                            <ScrollContainer>
                                <ModalContainer
                                    ref={refs.setFloating}
                                    {...getFloatingProps()}
                                    role="dialog"
                                    aria-label={ariaLabel}
                                    aria-labelledby={ariaLabelledBy}
                                    aria-describedby={ariaDescribedBy}
                                >
                                    {childWithRef}
                                </ModalContainer>
                            </ScrollContainer>
                        </FloatingFocusManager>
                    )}
                </ModalContext.Provider>
            </Container>
        </Overlay>
    );
};
