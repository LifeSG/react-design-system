import { css } from "@linaria/core";

import { Colour, Font, MediaQuery, Spacing } from "../theme";

// =============================================================================
// STYLE CLASSES
// =============================================================================
export const wrapper = css`
    z-index: 1;
    margin: ${Spacing["spacing-32"]} 0;

    ${MediaQuery.MaxWidth.xl} {
        margin: ${Spacing["spacing-24"]} 0;
    }

    ${MediaQuery.MaxWidth.lg} {
        margin: ${Spacing["spacing-16"]} 0;
    }

    [data-id="left-fade"],
    [data-id="right-fade"] {
        height: calc(1lh + ${Spacing["spacing-4"]});
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const content = css`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: calc(${Spacing["spacing-8"]} * -1);
    font-size: ${Font.Spec["body-size-md"]};

    ${MediaQuery.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`;

export const item = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
`;

export const caret = css`
    height: 1em;
    width: 1em;
    color: ${Colour["icon-subtle"]};
`;

export const slash = css`
    display: inline-block;
    color: ${Colour["text-subtlest"]};
`;

export const currentLabel = css`
    margin: ${Spacing["spacing-8"]} !important;
`;

export const previousLink = css`
    margin: ${Spacing["spacing-8"]} !important;
`;
