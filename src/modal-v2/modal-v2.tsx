import {
    FloatingFocusManager,
    useDismiss,
    useFloating,
    useInteractions,
    useTransitionStatus,
} from "@floating-ui/react";
import { useEffect } from "react";
import { Overlay } from "../overlay/overlay";
import { useWindowResizeObserver } from "../shared/hooks";
import { ModalContext } from "./modal-context";
import { Container, ModalContainer, ScrollContainer } from "./modal-v2.styles";
import { ModalV2Props } from "./types";

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
    ...otherProps
}: ModalV2Props): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { verticalHeight, offsetTop } = useWindowResizeObserver();

    const { refs, context } = useFloating({
        open: show,
        onOpenChange: (isOpen) => {
            if (!isOpen) {
                onClose();
            }
        },
    });
    const { isMounted, status } = useTransitionStatus(context, {
        duration: 300,
    });

    const dismiss = useDismiss(context, {
        /* handled by overlayclick */
        outsidePress: false,
    });
    const { getFloatingProps } = useInteractions([dismiss]);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (show && dismissKeyboardOnShow) {
            // dismiss software keyboard to put modal in fullscreen
            (document.activeElement as HTMLElement)?.blur?.();
        }
    }, [dismissKeyboardOnShow, show]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Overlay
            data-testid={`${testId}-overlay`}
            show={isMounted}
            enableOverlayClick={enableOverlayClick}
            onOverlayClick={onOverlayClick}
            id={id}
            rootId={rootComponentId}
            zIndex={zIndex}
        >
            <Container
                $show={isMounted}
                $animationFrom={animationFrom}
                data-testid={testId}
                $verticalHeight={verticalHeight}
                $offsetTop={offsetTop}
                {...otherProps}
                data-status={status}
            >
                <ModalContext.Provider value={{ onClose }}>
                    {isMounted && (
                        <FloatingFocusManager
                            context={context}
                            initialFocus={refs.floating}
                        >
                            <ScrollContainer>
                                <ModalContainer
                                    ref={refs.setFloating}
                                    {...getFloatingProps()}
                                    aria-modal
                                    role="dialog"
                                >
                                    {children}
                                </ModalContainer>
                            </ScrollContainer>
                        </FloatingFocusManager>
                    )}
                </ModalContext.Provider>
            </Container>
        </Overlay>
    );
};
