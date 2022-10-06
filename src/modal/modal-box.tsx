import React from "react";
import { Box, CloseButton, CloseIcon } from "./modal-box.styles";
import { ModalBoxProps } from "./types";

export const ModalBox = ({
    id = "modal-box",
    children,
    onClose,
    showCloseButton = true,
    ...otherProps
}: ModalBoxProps) => {
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
                type="button"
                onClick={onClose}
                data-testid="close-button"
            >
                <CloseIcon type="cross" />
            </CloseButton>
        );
    };

    return (
        <Box data-testid={id} {...otherProps} onClick={handleOnClick}>
            {showCloseButton && renderCloseButton()}
            {children}
        </Box>
    );
};
