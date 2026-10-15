import { css } from "@linaria/core";

import { Border, Colour, Font, Radius, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const container = css`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    min-width: 0;
    gap: ${Spacing["spacing-8"]};
`;

export const tag = css`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-4"]};
    min-width: 0;
    max-width: 100%;
    padding: 0.125rem 0.5rem;
    border: ${Border["width-010"]} ${Border["solid"]}
        ${Colour["border-primary"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg-primary-subtlest"]};
    color: ${Colour["text-primary"]};
    ${Font["body-xs-semibold"]}
`;

// shown when the tags cannot be removed, i.e. the field is disabled or read-only
export const tagInactive = css`
    color: ${Colour["text-subtle"]};
    border-color: ${Colour["border-strong"]};
    background: ${Colour["bg-hover-neutral-strong"]};
`;

export const tagLabel = css`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
`;

export const removeButton = css`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    padding: 0;
    border: none;
    border-radius: ${Radius["sm"]};
    background: transparent;
    color: inherit;
    cursor: pointer;

    svg {
        width: 1em;
        height: 1em;
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 1px;
    }
`;

export const moreEllipsis = css`
    flex-shrink: 0;
    line-height: 1;
    transform: translateY(-0.25em);
`;
