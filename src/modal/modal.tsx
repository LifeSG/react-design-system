import { useEffect } from "react";
import { Overlay } from "../overlay/overlay";
import { useViewport } from "../shared/hooks";
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

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (show && dismissKeyboardOnShow) {
            // dismiss software keyboard to put modal in fullscreen
            (document.activeElement as HTMLElement)?.blur?.();
        }
    }, [show]);

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
                $show={show}
                $animationFrom={animationFrom}
                data-testid={id}
                $verticalHeight={verticalHeight}
                $offsetTop={offsetTop}
                {...otherProps}
            >
                {children}
            </Container>
        </Overlay>
    );
};
