import {
    FloatingFocusManager,
    FloatingPortal,
    useDismiss,
    useFloating,
    useInteractions,
    useRole,
} from "@floating-ui/react";
import { useEffect, useState } from "react";
import { Overlay } from "../overlay/overlay";
import { Container, InnerContainer } from "./modal-v2.styles";
import { ModalV2Props } from "./types";

export const ModalV2 = ({
    id = "modal",
    show,
    onClose,
    animationFrom = "bottom",
    children,
    enableOverlayClick = true,
    rootComponentId,
    zIndex,
    onOverlayClick,
    dismissKeyboardOnShow = true,
    enableScroll,
    ...otherProps
}: ModalV2Props): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [verticalHeight, setVerticalHeight] = useState<number>();
    const [offsetTop, setOffsetTop] = useState<number>();

    const { refs, context } = useFloating({
        open: show,
        onOpenChange: (isOpen) => {
            if (!isOpen) {
                onClose();
            }
        },
    });
    const role = useRole(context);
    const dismiss = useDismiss(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([
        role,
        dismiss,
    ]);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        // set initial vh

        // use VisualViewport API if available, it gives more accurate dimensions when iOS software keyboard is active
        if (window.visualViewport) {
            handleViewportResize();
            window.visualViewport.addEventListener(
                "resize",
                handleViewportResize
            );
            return () => {
                window.visualViewport?.removeEventListener(
                    "resize",
                    handleViewportResize
                );
            };
        } else {
            // fallback to Window API
            handleWindowResize();
            window.addEventListener("resize", handleWindowResize);
            return () => {
                window.removeEventListener("resize", handleWindowResize);
            };
        }
    }, []);

    useEffect(() => {
        if (show && dismissKeyboardOnShow) {
            // dismiss software keyboard to put modal in fullscreen
            (document.activeElement as HTMLElement)?.blur?.();
        }
    }, [dismissKeyboardOnShow, show]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleWindowResize = () => {
        const newVerticalHeight = window.innerHeight * 0.01;
        setVerticalHeight(newVerticalHeight);
    };

    const handleViewportResize = () => {
        if (window.visualViewport) {
            const newVerticalHeight = window.visualViewport.height * 0.01;
            setVerticalHeight(newVerticalHeight);
            setOffsetTop(window.visualViewport.offsetTop);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <>
            <div ref={refs.setReference} {...getReferenceProps()} />
            {show && (
                <FloatingPortal>
                    <Overlay
                        data-testid={`${id}-overlay`}
                        show
                        enableOverlayClick={enableOverlayClick}
                        onOverlayClick={onOverlayClick}
                        id={id}
                        rootId={rootComponentId}
                        zIndex={zIndex}
                        enableScroll={enableScroll}
                    >
                        <Container
                            $show
                            $animationFrom={animationFrom}
                            data-testid={id}
                            $verticalHeight={verticalHeight}
                            $offsetTop={offsetTop}
                            $fixedHeight={enableScroll}
                            {...otherProps}
                        >
                            <FloatingFocusManager
                                context={context}
                                initialFocus={refs.floating}
                            >
                                <InnerContainer
                                    ref={refs.setFloating}
                                    {...getFloatingProps()}
                                    aria-modal
                                >
                                    {children}
                                </InnerContainer>
                            </FloatingFocusManager>
                        </Container>
                    </Overlay>
                </FloatingPortal>
            )}
        </>
    );
};
