import { css } from "@linaria/core";
import { Colour } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const lineBase = css`
    width: 100%;
    margin: 0;
    border: none;
`;

export const solidLine = css`
    height: var(--thickness, 1px);
    background-color: var(--color, ${Colour.border});
`;

export const dashedLine = css`
    background-color: transparent;
    height: var(--thickness, 1px);
    background-repeat: repeat-x;
    background-image: url('data:image/svg+xml,<svg width="8" height="1" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="var(--color, ${Colour.border})" stroke-width="2" stroke-dasharray="4 4" /></svg>');
`;