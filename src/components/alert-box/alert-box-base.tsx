import React from "react";
import { AlertBoxBaseProps } from "./types";
import { ActionLinkText, ArrowImage, Wrapper } from "./alert-box-base.style";
import arrowIcon from "../../assets/img/icons/icons-global-arrow-right.svg";

export const AlertBoxBase = ({
    type = "success",
    className,
    children,
    actionLink,
    ...otherProps
}: AlertBoxBaseProps) => {
    const renderLink = () => {
        return (
            <ActionLinkText
                weight="semibold"
                {...actionLink}
                data-testid="action-link"
            >
                {actionLink.children}
                <ArrowImage src={arrowIcon} alt="arrow-icon" />
            </ActionLinkText>
        );
    };

    return (
        <Wrapper
            className={className}
            type={type}
            data-testid={otherProps["data-testid"]}
        >
            {children}
            {actionLink && renderLink()}
        </Wrapper>
    );
};
