import { ModalContentProps } from "../types";
import { ContentContainer } from "./slot-styles";

export const Content = ({
    "data-testid": testId = "modal-content",
    children,
    ...otherProps
}: ModalContentProps) => {
    return (
        <ContentContainer data-testid={testId} {...otherProps}>
            {children}
        </ContentContainer>
    );
};

Content.displayName = "ModalV2.Content";
