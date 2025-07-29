import { CrossIcon } from "@lifesg/react-icons";
import { Box, CloseButton } from "./modal-box-v2.styles";
import { ModalBoxV2Props } from "./types";

export const ModalBoxV2 = ({
    id = "modal-box",
    children,
    onClose,
    showCloseButton = true,
    ...otherProps
}: ModalBoxV2Props) => {
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
                aria-label="Close button"
            >
                <CrossIcon aria-hidden />
            </CloseButton>
        );
    };

    return (
        <Box data-testid={id} {...otherProps} onClick={handleOnClick}>
            {children}
            {showCloseButton && renderCloseButton()}
        </Box>
    );
};
