import React from "react";
import styled, { css } from "styled-components";
import { MediaQuery } from "../theme/mediaquery/mediaquery-helper";
import { ContainerProps, ContainerType, DivRef } from "./types";

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

interface StyleProps {
    $type: ContainerType;
    $stretch: boolean;
}

const StyledContainer = styled.div<StyleProps>`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${(props) => {
        if (props.$stretch) {
            return css`
                padding: 0 3rem;
            `;
        } else {
            return css`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${MediaQuery.MaxWidth.xl} {
                    max-width: 1140px;
                }
            `;
        }
    }}
    ${MediaQuery.MaxWidth.md} {
        max-width: 720px;
    }
    ${MediaQuery.MaxWidth.sm} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${(props) => {
        switch (props.$type) {
            case "grid":
                return css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${MediaQuery.MaxWidth.md} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${MediaQuery.MaxWidth.sm} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;
            case "flex-column":
                return css`
                    display: flex;
                    flex-direction: column;
                `;
            case "flex":
            default:
                return css`
                    display: flex;
                `;
        }
    }}
`;
