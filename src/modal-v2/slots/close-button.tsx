import { CrossIcon } from "@lifesg/react-icons/cross";
import { useContext } from "react";
import { ModalContext } from "../modal-context";
import { ModalCloseButtonProps } from "../types";
import { CloseButtonContainer, StyledClickableIcon } from "./slot-styles";

export const CloseButton = ({
    "data-testid": testId = "close-button",
    ...otherProps
}: ModalCloseButtonProps) => {
    const { onClose } = useContext(ModalContext);

    return (
        <CloseButtonContainer data-testid={testId} {...otherProps}>
            <StyledClickableIcon
                onClick={onClose}
                data-testid="close-button"
                focusHighlight={false}
                focusOutline="browser"
                aria-label="Close button"
            >
                <CrossIcon aria-hidden />
            </StyledClickableIcon>
        </CloseButtonContainer>
    );
};

CloseButton.displayName = "ModalV2.CloseButton";
