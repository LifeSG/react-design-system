import React, { useState } from "react";
import { NotificationToastProps } from "./types";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import { TickCircleFillIcon } from "@lifesg/react-icons/tick-circle-fill";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { ExclamationTriangleFillIcon } from "@lifesg/react-icons/exclamation-triangle-fill";
import {
    CloseIcon,
    Container,
    Description,
    StyledIconButton,
    Title,
    Wrapper,
} from "./toast.styles.new";

export const Notification = ({
    theme = "light",
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
                return <TickCircleFillIcon fontSize={24} />;
            case "info":
                return <ICircleFillIcon fontSize={24} />;
            case "warning":
                return <ExclamationTriangleFillIcon fontSize={24} />;
            case "error":
                return <ExclamationCircleFillIcon fontSize={24} />;
            default:
                return null;
        }
    };

    if (!isVisible) return null;

    return (
        <Wrapper $type={type} $theme={theme}>
            <Container>
                {showIcon()}
                <StyledIconButton
                    $type={type}
                    $theme={theme}
                    onClick={handleDismiss}
                >
                    <CloseIcon />
                </StyledIconButton>
                {title && (
                    <Title $type={type} $theme={theme}>
                        {title}
                    </Title>
                )}

                {children && (
                    <Description $theme={theme} $type={type}>
                        {children}
                    </Description>
                )}
            </Container>
            {/* <Container>
                {displayIcon()}
                <StyledIconButton $type={type} onClick={handleDismiss}>
                    <CloseIcon />
                </StyledIconButton>
                {children && title && (
                    <>
                        <Title>{title}</Title>

                        <Description $type={type}>{children}</Description>
                    </>
                )}
                {!children && title && <>{title}</>}

                {!title && children && <>{children}</>}
            </Container> */}
        </Wrapper>
    );
};
