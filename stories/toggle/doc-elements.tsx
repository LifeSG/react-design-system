import React from "react";
import styled, { css } from "styled-components";
import { Text } from "../../src/text";
import { MediaQuery } from "../../src/media";

interface StyleProps {
    $layout?: "default" | "vertical";
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div<StyleProps>`
    ${(props) => {
        if (props.$layout === "vertical") {
            return css`
                width: 100%;
                display: grid;
                grid-template: auto / repeat(3, minmax(0, 1fr));
                column-gap: 2rem;

                > div {
                    display: grid;
                    column-gap: 1.5rem;
                    row-gap: 1.5rem;
                    margin: 1rem 0;

                    ${HeadingLabel} {
                        text-align: left;
                        align-self: center;
                    }
                }

                ${MediaQuery.MaxWidth.mobileL} {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
            `;
        } else {
            return css`
                > div {
                    display: grid;
                    grid-template: auto / repeat(5, minmax(0, 1fr));
                    column-gap: 1.5rem;
                    row-gap: 1.5rem;
                    margin: 1rem 0;
                }

                ${MediaQuery.MaxWidth.mobileL} {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    column-gap: 2rem;

                    > div {
                        grid-template: unset;
                    }
                }
            `;
        }
    }}
`;

export const HeadingLabel = styled(Text.H6)`
    text-align: center;

    ${MediaQuery.MaxWidth.mobileL} {
        text-align: left;
        align-self: center;
    }
`;

export const SimpleContainer = styled.ul`
    display: flex;

    li {
        :not(:last-child) {
            margin-right: 1.5rem;
        }
    }
`;

// =============================================================================
// COMPONENTS
// =============================================================================
export const Headings = () => {
    return (
        <div>
            <HeadingLabel weight="semibold">Default</HeadingLabel>
            <HeadingLabel weight="semibold">Selected</HeadingLabel>
            <HeadingLabel weight="semibold">Disabled</HeadingLabel>
            <HeadingLabel weight="semibold">Disabled Selected</HeadingLabel>
            <HeadingLabel weight="semibold">Error</HeadingLabel>
        </div>
    );
};
