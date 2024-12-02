import styled, { css } from "styled-components";
import { OrderedListProps, UnorderedListProps } from "./types";
import { Colour, Font, MediaQuery } from "../theme";

const baseListStyle = (bottomMargin: number) => `
	margin-bottom: ${bottomMargin ? bottomMargin : 0}rem;
`;

const BASE_MARGIN = 3;

// =============================================================================
// ORDERED LIST
// ============================================================================
export const StyledOrderedList = styled.ol<OrderedListProps>`
    ${(props) => baseListStyle(props.bottomMargin)}
    margin-left: ${BASE_MARGIN}rem;

    ${MediaQuery.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${(props) => Font[`${props.size}-regular`]}
        position: relative;
        color: ${Colour.text};
    }

    ${(props) => {
        const { reversed } = props;
        const counterType = props.counterType || "decimal";
        const counterSeparator = props.counterSeparator || ")";

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

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ul > li:before {
        content: "";
    }
`;

// =============================================================================
// UNORDERED LIST
// =============================================================================
export const StyledUnorderedList = styled.ul<UnorderedListProps>`
    ${(props) => baseListStyle(props.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${(props) => props.bulletType || "disc"};

    li {
        ${(props) => Font[`${props.size}-regular`]}
        color: ${Colour.text};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;
