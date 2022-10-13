import React from "react";
import styled, { css } from "styled-components";
import { MediaQuery } from "../media/media";
import { ContainerProps, ContainerType, DivRef } from "./types";

const Component = (props: ContainerProps, ref: DivRef): JSX.Element => {
    const {
        children,
        "data-testid": testId = "container",
        type = "flex",
        ...otherProps
    } = props;

    return (
        <StyledContainer
            ref={ref}
            data-testid={testId}
            type={type}
            {...otherProps}
        >
            {children}
        </StyledContainer>
    );
};

// =============================================================================
// EXPORT
// =============================================================================
export const Container = React.forwardRef(Component);

// =============================================================================
// STYLING
// =============================================================================
interface StyleProps {
    type: ContainerType;
}

const StyledContainer = styled.div<StyleProps>`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;

    /* Max width restrictions */
    max-width: 1344px;

    ${MediaQuery.MaxWidth.desktopM} {
        max-width: 1152px;
    }

    ${MediaQuery.MaxWidth.tablet} {
        max-width: 960px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        max-width: unset;
    }

    ${(props) => {
        switch (props.type) {
            case "grid":
                return css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));
                    height: auto;

                    ${MediaQuery.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${MediaQuery.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;
            case "flex":
            default:
                return css`
                    display: flex;
                    height: auto;
                `;
        }
    }}
`;
