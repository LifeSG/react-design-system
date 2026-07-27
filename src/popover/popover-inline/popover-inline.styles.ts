import { css } from "@linaria/core";

import { Colour } from "../../theme";

export const popoverInlineText = css`
    color: ${Colour["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    &[data-underline-style="underline"] {
        text-decoration: underline 1px;
    }

    &[data-underline-style="underline-dashed"] {
        text-decoration: underline dashed 1px;
    }

    &:hover,
    &:focus-visible {
        color: ${Colour["text-hover"]};
    }

    &[data-underline-hover-style="underline"]:hover,
    &[data-underline-hover-style="underline"]:focus-visible {
        text-decoration: underline 1px;
    }

    &[data-underline-hover-style="underline-dashed"]:hover,
    &[data-underline-hover-style="underline-dashed"]:focus-visible {
        text-decoration: underline dashed 1px;
    }

    svg {
        height: 1lh; /* align vertically */
        width: 1em; /* scale icon with font size */
        vertical-align: top;
    }
`;

export const popoverInlineIconWithContent = css`
    margin-left: 0.25rem;
`;
