import React from "react";
import { ContainerProps, DivRef } from "./types";
import { StyledContainer } from "./container-style";

const Component = (props: ContainerProps, ref: DivRef): JSX.Element => {
    const {
        children,
        "data-testid": testId = "container",
        type = "flex",
        stretch = false,
        ...otherProps
    } = props;

    return (
        <StyledContainer
            ref={ref}
            data-testid={testId}
            $type={type}
            $stretch={stretch}
            {...otherProps}
        >
            {children}
        </StyledContainer>
    );
};

export const Container = React.forwardRef(Component);
