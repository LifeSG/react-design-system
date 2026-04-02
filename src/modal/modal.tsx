import clsx from "clsx";
import React, { useEffect, useRef } from "react";

import type { ModalAnimationDirection } from "../modal-v2/types";
import { Overlay } from "../overlay/overlay";
import { useViewport } from "../shared/hooks";
import { useApplyStyle } from "../theme";
import { useEvent } from "../util";
import { Container, tokens } from "./modal.styles";
import type { ModalProps } from "./types";

const ANIMATION_FROM_CLASS_MAP: Record<ModalAnimationDirection, string> = {
    top: "modalContainerFromTop",
    bottom: "modalContainerFromBottom",
    left: "modalContainerFromLeft",
    right: "modalContainerFromRight",
};

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
    className,
    ...otherProps
}: ModalProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { verticalHeight, offsetTop } = useViewport();
    const childRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const childWithRef =
        children &&
        React.cloneElement(children as React.ReactElement, { ref: childRef });

    useApplyStyle(containerRef, {
        [tokens.container.verticalHeight]:
            verticalHeight == null ? null : `${verticalHeight}px`,
        [tokens.container.offsetTop]:
            offsetTop == null ? null : `${offsetTop}px`,
    });

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
                ref={containerRef}
                data-testid={id}
                {...otherProps}
                className={clsx(
                    ANIMATION_FROM_CLASS_MAP[animationFrom],
                    show ? "modalContainerShow" : "modalContainerHide",
                    className
                )}
            >
                {childWithRef}
            </Container>
        </Overlay>
    );
};
