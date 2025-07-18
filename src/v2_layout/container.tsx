import React from "react";
import styled, { css } from "styled-components";
import { V2_MediaQuery } from "../v2_media/media";
import { V2_ContainerProps, V2_ContainerType, V2_DivRef } from "./types";

const Component = (
    props: V2_ContainerProps,
    ref: V2_DivRef
): React.JSX.Element => {
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

// =============================================================================
// EXPORT
// =============================================================================
/** @deprecated */
export const V2_Container = React.forwardRef(Component);

// =============================================================================
// STYLING
// =============================================================================
interface StyleProps {
    $type: V2_ContainerType;
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

                ${V2_MediaQuery.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `;
        }
    }}
    ${V2_MediaQuery.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${V2_MediaQuery.MaxWidth.mobileL} {
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

                    ${V2_MediaQuery.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${V2_MediaQuery.MaxWidth.mobileL} {
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
