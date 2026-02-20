import { CrossIcon } from "@lifesg/react-icons/cross";
import React, { NamedExoticComponent } from "react";
import { Box, CloseButton } from "./modal-box.styles";
import { ModalBoxProps } from "./types";

function ModalBoxInner(
    {
        id = "modal-box",
        children,
        onClose,
        showCloseButton = true,
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
            <CloseButton
                onClick={onClose}
                data-testid="close-button"
                focusHighlight={false}
                focusOutline="browser"
            >
                <CrossIcon />
            </CloseButton>
        );
    };

    return (
        <Box
            ref={ref}
            data-testid={id}
            {...otherProps}
            onClick={handleOnClick}
        >
            {showCloseButton && renderCloseButton()}
            {children}
        </Box>
    );
}

export const ModalBox = React.forwardRef<HTMLDivElement, ModalBoxProps>(
    ModalBoxInner
);

(ModalBox as NamedExoticComponent).displayName = "Modal.Box";
