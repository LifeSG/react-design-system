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

/**
 * A fixed-width or full-width wrapper that centres page content within a max-width boundary.
 *
 * Use as `Layout.Container` to constrain content to the design grid. Supports flex and block
 * layout types, and optional full-width stretching.
 * @example
 * ```tsx
 * <Layout.Container>content</Layout.Container>
 * ```
 */
export const Container = React.forwardRef(Component);
