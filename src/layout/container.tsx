import React from "react";
import { ContainerProps } from "./types";
import { StyledContainer } from "./container.styles";

const Component = (
    props: ContainerProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element => {
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
