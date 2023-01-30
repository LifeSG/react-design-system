import React, { useState } from "react";
import { NotificationToastProps } from "./types";
import {
    Container,
    Content,
    Description,
    StyledIconButton,
    Title,
    Wrapper,
} from "./notification-toast.styles";
import { Icon } from "src/icon";

export const Notification = ({
    type,
    title,
    children,
    icon,
}: NotificationToastProps): JSX.Element => {
    const [isVisible, setVisible] = useState<boolean>(true);

    const handleDismiss = () => {
        setVisible(false);
    };

    if (!isVisible) return null;

    return (
        <Wrapper $type={type}>
            <Container>
                <Content>
                    <StyledIconButton $type={type} onClick={handleDismiss}>
                        <Icon type="cross" />
                    </StyledIconButton>
                    {icon}
                    {children && title && (
                        <>
                            <Title>{title}</Title>

                            <Description>{children}</Description>
                        </>
                    )}
                    {!children && title && <>{title}</>}

                    {!title && children && <>{children}</>}
                </Content>
            </Container>
        </Wrapper>
    );
};
