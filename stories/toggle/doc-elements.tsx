import React from "react";
import styled, { css } from "styled-components";
import { v2_Text } from "../../src/v2_text";
import { v2_MediaQuery } from "../../src/v2_media";

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

                ${v2_MediaQuery.MaxWidth.mobileL} {
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

                @media only screen and (max-width: 900px) {
                    width: 100%;
                    display: grid;
                    grid-template-columns: max-content 1fr;
                    column-gap: 2rem;

                    > div {
                        grid-template: unset;
                    }
                }
            `;
        }
    }}
`;

export const HeadingLabel = styled(v2_Text.H6)`
    text-align: center;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        text-align: left;
        align-self: center;
    }
`;

export const SimpleContainer = styled.ul`
    display: flex;
    list-style: none;

    li {
        :not(:last-child) {
            margin-right: 1.5rem;
        }
    }
`;

const VariantWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    > div {
        display: flex;
        flex-direction: column;
        ${HeadingLabel} {
            margin: 1rem;
            min-width: 100px;
        }
    }

    @media only screen and (max-width: 1200px) {
        grid-template-columns: 1fr;

        > div {
            flex-direction: row;
        }
    }
`;

// =============================================================================
// COMPONENTS
// =============================================================================
const VARIANTS = [
    "Default",
    "Selected",
    "Disabled",
    "Disabled Selected",
    "Error",
];

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

export const Variants = ({ children }: { children: React.ReactNode }) => {
    return (
        <VariantWrapper>
            {React.Children.map(children, (child, i) => (
                <div>
                    <HeadingLabel>{VARIANTS[i]}</HeadingLabel>
                    {child}
                </div>
            ))}
        </VariantWrapper>
    );
};
