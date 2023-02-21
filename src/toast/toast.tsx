import React, { useState } from "react";
import { NotificationToastProps } from "./types";
import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import { TickCircleFillIcon } from "@lifesg/react-icons/tick-circle-fill";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { ExclamationTriangleFillIcon } from "@lifesg/react-icons/exclamation-triangle-fill";
import {
    CloseIcon,
    Container,
    Description,
    IconContainer,
    StyledIconButton,
    TextContainer,
    Title,
    Wrapper,
} from "./toast.styles";

export const Notification = ({
    type = "success",
    title,
    children,
}: NotificationToastProps): JSX.Element => {
    const [isVisible, setVisible] = useState<boolean>(true);

    const handleDismiss = () => {
        setVisible(false);
    };

    const showIcon = () => {
        switch (type) {
            case "success":
                return <TickCircleFillIcon />;
            case "warning":
                return <ExclamationTriangleFillIcon />;
            case "error":
                return <ExclamationCircleFillIcon />;
            case "info":
                return <ICircleFillIcon />;
            default:
                return null;
        }
    };

    if (!isVisible) return null;

    return (
        <Wrapper $type={type}>
            <Container>
                <IconContainer>{showIcon()}</IconContainer>
                <TextContainer>
                    {title && <Title $type={type}>{title}</Title>}

                    {children && (
                        <Description $type={type}>{children}</Description>
                    )}
                </TextContainer>
                <StyledIconButton $type={type} onClick={handleDismiss}>
                    <CloseIcon />
                </StyledIconButton>
            </Container>
        </Wrapper>
    );
};
