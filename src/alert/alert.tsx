import React, { useEffect, useState } from "react";
import { AlertProps } from "./types";
import {
    ActionLinkText,
    ArrowIcon,
    ExternalLinkIcon,
    TextContainer,
    Wrapper,
} from "./alert.style";
import {
    ExclamationCircleFillIcon,
    ExclamationTriangleFillIcon,
    ICircleFillIcon,
    TickCircleFillIcon,
} from "@lifesg/react-icons";

export const Alert = ({
    type,
    className,
    children,
    actionLink,
    linkIconType,
    sizeType,
    enableIcon = false,
    ...otherProps
}: AlertProps): JSX.Element => {
    const renderLinkType = () => {
        if (linkIconType === "internalLink") {
            return <ArrowIcon />;
        }
        return <ExternalLinkIcon />;
    };

    const renderLink = () => {
        return (
            <ActionLinkText
                data-testid="action-link"
                $type={type}
                $sizeType={sizeType}
                {...actionLink}
            >
                {actionLink.children}
                {renderLinkType()}
            </ActionLinkText>
        );
    };

    const renderIcon = () => {
        switch (type) {
            case "success":
                return <TickCircleFillIcon />;
            case "warning":
                return <ExclamationTriangleFillIcon />;
            case "error":
                return <ExclamationCircleFillIcon />;
            case "info":
                return <ICircleFillIcon />;
            case "description":
                return <ICircleFillIcon />;
            default:
                return null;
        }
    };

    return (
        <Wrapper
            className={className}
            $type={type}
            $sizeType={sizeType}
            $enableIcon={enableIcon}
            $linkIconType={linkIconType}
            data-testid={otherProps["data-testid"]}
        >
            {enableIcon && renderIcon()}
            <TextContainer>
                {children}
                {actionLink && renderLink()}
            </TextContainer>
        </Wrapper>
    );
};
