import React, { useEffect, useRef } from "react";
import { Overlay } from "../overlay/overlay";
import { useViewport } from "../shared/hooks";
import { useEvent } from "../util";
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
}: ModalProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { verticalHeight, offsetTop } = useViewport();
    const childRef = useRef<HTMLDivElement>(null);
    const childWithRef =
        children &&
        React.cloneElement(children as React.ReactElement, { ref: childRef });

    // =============================================================================
    // EFFECTS
    // =============================================================================
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
            containerRef={childRef}
            zIndex={zIndex}
        >
            <Container
                $show={show}
                $animationFrom={animationFrom}
                data-testid={id}
                $verticalHeight={verticalHeight}
                $offsetTop={offsetTop}
                {...otherProps}
            >
                {childWithRef}
            </Container>
        </Overlay>
    );
};
