import React from "react";
import {
    Box,
    CloseButton,
    CloseIcon,
    ContentWrapper,
} from "./modal-box.styles";
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
                onClick={onClose}
                data-testid="close-button"
                focusHighlight={false}
            >
                <CloseIcon />
            </CloseButton>
        );
    };

    return (
        <Box data-testid={id} {...otherProps} onClick={handleOnClick}>
            {showCloseButton && renderCloseButton()}
            <ContentWrapper>{children}</ContentWrapper>
        </Box>
    );
};
