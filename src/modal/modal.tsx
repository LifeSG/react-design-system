import React, { useRef } from "react";
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
    const dismissKeyboard = useEvent(() => {
        if (dismissKeyboardOnShow) {
            (document.activeElement as HTMLElement)?.blur?.();
        }
    });
    const { verticalHeight, ready } = useViewport({
        enabled: show,
        onBeforeStart: dismissKeyboard,
    });
    const childRef = useRef<HTMLDivElement>(null);
    const childWithRef =
        children && React.cloneElement(children, { ref: childRef });

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
                $ready={ready}
                $animationFrom={animationFrom}
                data-testid={id}
                $verticalHeight={verticalHeight}
                {...otherProps}
            >
                {childWithRef}
            </Container>
        </Overlay>
    );
};
