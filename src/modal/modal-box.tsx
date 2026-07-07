import { CrossIcon } from "@lifesg/react-icons/cross";
import clsx from "clsx";
import type React from "react";
import type { NamedExoticComponent } from "react";
import { forwardRef } from "react";

import { ClickableIcon } from "../shared/clickable-icon";
import * as styles from "./modal-box.styles";
import type { ModalBoxProps } from "./types";

function ModalBoxInner(
    {
        id = "modal-box",
        children,
        onClose,
        showCloseButton = true,
        className,
        ...otherProps
    }: ModalBoxProps,
    ref: React.ForwardedRef<HTMLDivElement>
) {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOnClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderCloseButton = () => {
        return (
            <ClickableIcon
                onClick={onClose}
                data-testid="close-button"
                focusHighlight={false}
                focusOutline="browser"
                className={styles.closeButton}
            >
                <CrossIcon />
            </ClickableIcon>
        );
    };

    return (
        <div
            ref={ref}
            data-testid={id}
            {...otherProps}
            onClick={handleOnClick}
            className={clsx(styles.box, className)}
        >
            {showCloseButton && renderCloseButton()}
            {children}
        </div>
    );
}

export const ModalBox = forwardRef<HTMLDivElement, ModalBoxProps>(
    ModalBoxInner
);

(ModalBox as NamedExoticComponent).displayName = "Modal.Box";
