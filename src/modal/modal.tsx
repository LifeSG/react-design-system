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
    ...otherProps
}: ModalProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [verticalHeight, setVerticalHeight] = useState<number>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        //set initial vh
        setVerticalHeight(window.innerHeight * 0.01);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleResize = () => {
        const newVerticalHeight = window.innerHeight * 0.01;
        setVerticalHeight(newVerticalHeight);
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
                {...otherProps}
            >
                {children}
            </Container>
        </Overlay>
    );
};
