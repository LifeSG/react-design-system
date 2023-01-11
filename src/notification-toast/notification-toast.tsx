import React, { useState } from "react";
import { NotificationToastProps } from "./types";
import {
    Container,
    Content,
    StyledIconButton,
    Wrapper,
} from "./notification-toast.styles";
import { Icon } from "src/icon";

export const Notification = ({
    type,
    children,
}: NotificationToastProps): JSX.Element => {
    const [isVisible, setVisible] = useState<boolean>(true);

    const handleDismiss = () => {
        setVisible(false);
    };

    if (!isVisible) return null;

    return (
        <Wrapper $type={type}>
            <Container>
                <Content>{children}</Content>
                <StyledIconButton $type={type} onClick={handleDismiss}>
                    <Icon type="cross" />
                </StyledIconButton>
            </Container>
        </Wrapper>
    );
};
