import { css } from "@linaria/core";

import { Colour } from "../../tokens";

export const root = css`
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        sans-serif;
`;

export const container = css`
    display: flex;
    align-items: center;
    border: 1px solid ${Colour.border};
    border-radius: 4px;
    padding: 10px 12px;
    gap: 8px;
    background: ${Colour.bg};
    cursor: text;
    position: relative;
`;

export const containerFocused = css`
    border-color: ${Colour["border-selected"]};
    box-shadow: var(--fds-shadow-xs-focus-strong);
`;

export const containerDisabled = css`
    opacity: 0.5;
    pointer-events: none;
    background: ${Colour["bg-disabled"]};
`;

export const containerError = css`
    border-color: ${Colour["border-error"]};
`;

export const separator = css`
    color: ${Colour["text-disabled"]};
    font-size: 14px;
    user-select: none;
`;

export const dropdown = css`
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    background: ${Colour.bg};
    border: 1px solid ${Colour.border};
    border-radius: 8px;
    box-shadow: var(--fds-shadow-md-subtle);
    z-index: 100;
    min-width: 320px;
    overflow: hidden;
`;
