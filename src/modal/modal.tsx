import React, { useEffect, useState } from "react";
import { Overlay } from "../overlay/overlay";
import { Container } from "./modal.styles";
import { ModalProps } from "./types";

export const Modal = ({
    id = "modal",
    show,
    animationFrom = "bottom",
    children,
    enableOverlayClick = true,
    rootComponentId,
    zIndex,
    onOverlayClick,
    dismissKeyboardOnShow = true,
    ...otherProps
}: ModalProps): React.JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [verticalHeight, setVerticalHeight] = useState<number>();
    const [offsetTop, setOffsetTop] = useState<number>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        //set initial vh

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
    }, [show]);

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
        <Overlay
            data-testid={`${id}-overlay`}
            show={show}
            enableOverlayClick={enableOverlayClick}
            onOverlayClick={onOverlayClick}
            id={id}
            rootId={rootComponentId}
            zIndex={zIndex}
        >
            <Container
                show={show}
                animationFrom={animationFrom}
                data-testid={id}
                verticalHeight={verticalHeight}
                offsetTop={offsetTop}
                {...otherProps}
            >
                {children}
            </Container>
        </Overlay>
    );
};
