import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery } from "../theme";

// ============================================================================
// STYLING
// =============================================================================
export const content = css`
    width: 100%;
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};
`;

export const titleWrapper = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${MediaQuery.MaxWidth.sm} {
        justify-content: flex-end;
    }
`;

export const titleWrapperHidden = css`
    ${MediaQuery.MaxWidth.sm} {
        display: none;
    }
`;

export const title = css`
    display: flex;
    align-self: flex-start;
    flex: 1;

    ${Font["heading-md-bold"]}
    color: ${Colour["text"]};

    ${MediaQuery.MaxWidth.sm} {
        text-align: left;
    }
`;

export const titleHidden = css`
    ${MediaQuery.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`;

export const expandCollapseLink = css`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`;
