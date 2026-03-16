import styled, { css } from "styled-components";

import { V3_Colour, V3_Font, V3_MediaQuery } from "../v3_theme";
import type { V3_TypographySizeType } from "../v3_theme/font/types";
import type { BulletType, CounterType } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ListStyleProps {
    $bottomMargin: number | undefined;
    $size: V3_TypographySizeType | undefined;
}

interface OrderedListStyleProps extends ListStyleProps {
    $counterType: CounterType | undefined;
    $counterSeparator: string | undefined;
}

interface UnorderedListStyleProps extends ListStyleProps {
    $bulletType: BulletType | undefined;
    $hasCustomIcon: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
const baseStyle = css<ListStyleProps>`
    margin-bottom: ${(props) => props.$bottomMargin || 0}rem;

    // Counter matters
    counter-reset: list;

    ${(props) => props.$size && V3_Font[`${props.$size}-regular`]}
    font-weight: ${V3_Font.Spec["weight-regular"]};
    color: ${V3_Colour.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const StyledOrderedList = styled.ol<OrderedListStyleProps>`
    ${baseStyle}

    margin-left: 3em;

    ${V3_MediaQuery.MaxWidth.lg} {
        margin-left: 2.5em;
    }

    li {
        position: relative;
    }

    ${(props) => {
        const { reversed } = props;
        const counterType = props.$counterType || "decimal";
        const counterSeparator = props.$counterSeparator || ")";

        return css`
            li:before {
                content: counter(list, ${counterType}) "${counterSeparator}";
                counter-increment: ${reversed ? "list -1" : "list"};
                position: absolute;
                left: -2em;
            }
        `;
    }}

    ${(props) => {
        const { reversed, start } = props;

        if (start) {
            const resetValue = reversed ? start + 1 : start - 1;
            return css`
                counter-reset: list ${resetValue};
            `;
        }
    }}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`;

export const StyledUnorderedList = styled.ul<UnorderedListStyleProps>`
    ${baseStyle}

    margin-left: ${(props) => (props.$hasCustomIcon ? 0 : "2.5em")};
    list-style-type: ${(props) =>
        props.$hasCustomIcon ? "none" : props.$bulletType || "disc"};

    ${(props) =>
        props.$hasCustomIcon &&
        css`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`;
