import React from "react";
import { StyledContainer } from "./full-width-container.styles";

interface FullWidthContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    background?: boolean;
    children: React.ReactNode;
    "data-testid"?: string | undefined;
}

const Component = (
    props: FullWidthContainerProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element => {
    const {
        children,
        "data-testid": testId = "container",
        background = false,
        ...otherProps
    } = props;

    return (
        <StyledContainer
            ref={ref}
            data-testid={testId}
            $background={background}
            {...otherProps}
        >
            {children}
        </StyledContainer>
    );
};

export const FullWidthContainer = React.forwardRef(Component);
