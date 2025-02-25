import styled, { css } from "styled-components";
import { Colour, Font, MediaQuery } from "../theme";
import { TypographySizeType } from "../theme/font/types";
import { BulletType, CounterType } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ListStyleProps {
    $bottomMargin: number | undefined;
    $size: TypographySizeType | undefined;
}

interface OrderedListStyleProps extends ListStyleProps {
    $counterType: CounterType | undefined;
    $counterSeparator: string | undefined;
}

interface UnorderedListStyleProps extends ListStyleProps {
    $bulletType: BulletType | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
const baseStyle = css<ListStyleProps>`
    margin-bottom: ${(props) => props.$bottomMargin || 0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Font.Spec["weight-regular"]};
        ${(props) => props.$size && Font[`${props.$size}-regular`]}
        color: ${Colour.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const StyledOrderedList = styled.ol<OrderedListStyleProps>`
    ${baseStyle}

    margin-left: 3rem;

    ${MediaQuery.MaxWidth.lg} {
        margin-left: 2.5rem;
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
                left: -2rem;
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

    margin-left: 2.5rem;
    list-style-type: ${(props) => props.$bulletType || "disc"};
`;
