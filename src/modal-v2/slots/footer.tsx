import { ModalFooterProps } from "../types";
import { FooterContainer } from "./slot-styles";

export const Footer = ({
    "data-testid": testId = "modal-content",
    primaryButton,
    secondaryButton,
    ...otherProps
}: ModalFooterProps) => {
    return (
        <FooterContainer data-testid={testId} {...otherProps}>
            {primaryButton}
            {secondaryButton}
        </FooterContainer>
    );
};

Footer.displayName = "ModalV2.Footer";
