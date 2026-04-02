import clsx from "clsx";
import React, { useEffect, useRef } from "react";

import type { ModalAnimationDirection } from "../modal-v2/types";
import { Overlay } from "../overlay/overlay";
import { useViewport } from "../shared/hooks";
import { useApplyStyle } from "../theme";
import { useEvent } from "../util";
import * as styles from "./modal.styles";
import type { ModalProps } from "./types";

const ANIMATION_FROM_CLASS_MAP: Record<ModalAnimationDirection, string> = {
    top: styles.containerFromTop,
    bottom: styles.containerFromBottom,
    left: styles.containerFromLeft,
    right: styles.containerFromRight,
};

const ANIMATION_FROM_SHOW_CLASS_MAP: Record<ModalAnimationDirection, string> = {
    top: styles.containerFromTopShow,
    bottom: styles.containerFromBottomShow,
    left: styles.containerFromLeftShow,
    right: styles.containerFromRightShow,
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
        [styles.tokens.container.verticalHeight]:
            verticalHeight == null ? null : `${verticalHeight}px`,
        [styles.tokens.container.offsetTop]:
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
            <div
                ref={containerRef}
                data-testid={id}
                {...otherProps}
                className={clsx(
                    styles.container,
                    ANIMATION_FROM_CLASS_MAP[animationFrom],
                    show && ANIMATION_FROM_SHOW_CLASS_MAP[animationFrom],
                    show ? styles.containerShow : styles.containerHide,
                    className
                )}
            >
                {childWithRef}
            </div>
        </Overlay>
    );
};
