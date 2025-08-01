import { CrossIcon } from "@lifesg/react-icons/cross";
import { useContext } from "react";
import { ModalContext } from "../modal-context";
import { ModalCloseButtonProps } from "../types";
import { ClickableContainer, StyledClickableIcon } from "./slot-styles";

export const CloseButton = ({ customStyle }: ModalCloseButtonProps) => {
    const { onClose } = useContext(ModalContext);

    return (
        <ClickableContainer style={customStyle}>
            <StyledClickableIcon
                onClick={onClose}
                data-testid="close-button"
                focusHighlight={false}
                focusOutline="browser"
                aria-label="Close button"
            >
                <CrossIcon aria-hidden />
            </StyledClickableIcon>
        </ClickableContainer>
    );
};
