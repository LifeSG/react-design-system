import React from "react";
import { AlertProps } from "./types";
import { ActionLinkText, ArrowIcon, Wrapper } from "./alert.style";

export const Alert = ({
    type,
    className,
    children,
    actionLink,
    ...otherProps
}: AlertProps): JSX.Element => {
    const renderLink = () => {
        return (
            <ActionLinkText
                weight="semibold"
                {...actionLink}
                data-testid="action-link"
            >
                {actionLink.children}
                <ArrowIcon />
            </ActionLinkText>
        );
    };

    return (
        <Wrapper
            className={className}
            $type={type}
            data-testid={otherProps["data-testid"]}
        >
            {children}
            {actionLink && renderLink()}
        </Wrapper>
    );
};
