import React from "react";
import { PillProps } from "./types";
import { Content, Icon, Label, Wrapper } from "./pill.style";

export const Pill = ({
    type,
    colorType = "black",
    className,
    children,
    icon,
    ...otherProps
}: PillProps): JSX.Element => {
    return (
        <Wrapper
            className={className}
            data-testid={otherProps["data-testid"]}
            $type={type}
            $color={colorType}
        >
            <Content>
                {icon && <Icon>{icon}</Icon>}
                <Label>{children}</Label>
            </Content>
        </Wrapper>
    );
};
