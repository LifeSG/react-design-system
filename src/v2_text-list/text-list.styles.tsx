import styled, { css } from "styled-components";
import { V2_MediaQuery } from "../v2_media";
import { V2_Color } from "../v2_color";
import { V2_TextStyleHelper } from "../v2_text/helper";
import { V2_OrderedListProps, V2_UnorderedListProps } from "./types";

const baseListStyle = (bottomMargin: number) => `
	margin-bottom: ${bottomMargin ? bottomMargin : 0}rem;
`;

const BASE_MARGIN = 3;

// =============================================================================
// ORDERED LIST
// ============================================================================

/** @deprecated */
export const V2_StyledOrderedList = styled.ol<V2_OrderedListProps>`
    ${(props) => baseListStyle(props.bottomMargin)}
    margin-left: ${BASE_MARGIN}rem;

    ${V2_MediaQuery.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${(props) => V2_TextStyleHelper.getTextStyle(props.size, "regular")}
        position: relative;
        color: ${V2_Color.Neutral[1]};
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

/** @deprecated */
export const V2_StyledUnorderedList = styled.ul<V2_UnorderedListProps>`
    ${(props) => baseListStyle(props.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${(props) => props.bulletType || "disc"};

    li {
        ${(props) => V2_TextStyleHelper.getTextStyle(props.size, "regular")}
        color: ${V2_Color.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;
