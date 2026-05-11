import { css } from "@linaria/core";

import { Colour, Radius, Spacing } from "../theme";

export const label = css`
    display: flex;
    margin-bottom: ${Spacing["spacing-16"]};
    align-items: baseline;
`;

export const separator = css`
    margin: 0 0.5rem;
`;

export const histogram = css`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`;

export const bar = css`
    flex: 1;
    border-radius: ${Radius["sm"]} ${Radius["sm"]} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;
    background-color: ${Colour["bg-strongest"]};
`;

export const barDisabled = css`
    background-color: ${Colour["bg-disabled"]};
`;

export const barSelected = css`
    background-color: ${Colour["bg-selected-stronger"]};
`;

export const barSelectedDisabled = css`
    background-color: ${Colour["bg-selected-stronger-disabled"]};
`;

export const slider = css`
    margin-top: -0.3125rem;
`;
