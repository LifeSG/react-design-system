import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Spacing } from "../theme";

// ============================================================================
// STYLING
// =============================================================================
export const accordionWrapper = css`
    width: 100%;
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};
`;

export const titleWrapper = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${Spacing["spacing-16"]};
`;

export const titleWrapperHidden = css`
    ${MediaQuery.MaxWidth.sm} {
        display: none;
    }
`;

export const title = css`
    display: flex;
    flex: 1;
    align-self: flex-start;

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
    margin: calc(${Spacing["spacing-16"]} * -1);
    margin-left: 0;
    white-space: nowrap;
`;
