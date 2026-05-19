import { css } from "@linaria/core";

import { Colour, Font, MediaQuery, Radius } from "../theme";

export const wrapper = css`
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 0;
    top: 0;
    right: 0;
    padding: 1rem;
    border-radius: ${Radius["md"]};
    z-index: 10;
    align-items: center;
    gap: 2rem;

    ${MediaQuery.MaxWidth.lg} {
        left: 0;
    }

    &[data-fixed="true"] {
        position: fixed;
        margin: 1rem;
    }

    &[data-type="success"] {
        background: ${Colour["bg-success"]};
        border: 1px solid ${Colour["border-success"]};
        color: ${Colour["text-success"]};
    }

    &[data-type="warning"] {
        background: ${Colour["bg-warning"]};
        border: 1px solid ${Colour["border-warning"]};
        color: ${Colour["text-warning"]};
    }

    &[data-type="error"] {
        background: ${Colour["bg-error"]};
        border: 1px solid ${Colour["border-error"]};
        color: ${Colour["text-error"]};
    }

    &[data-type="info"] {
        background: ${Colour["bg-info"]};
        border: 1px solid ${Colour["border-info"]};
        color: ${Colour["text-info"]};
    }
`;

export const contentWrapper = css`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`;

export const textIconWrapper = css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    & > svg {
        flex-shrink: 0;
        width: 1.5rem;
        height: 1.5rem;
        margin-top: 0.0625rem;
        margin-right: 0.5rem;
    }

    :where([data-type="success"]) & > svg {
        color: ${Colour["icon-success"]};
    }

    :where([data-type="warning"]) & > svg {
        color: ${Colour["icon-warning"]};
    }

    :where([data-type="error"]) & > svg {
        color: ${Colour["icon-error"]};
    }

    :where([data-type="info"]) & > svg {
        color: ${Colour["icon-info"]};
    }
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
`;

export const title = css`
    display: flex;
    ${Font["body-baseline-semibold"]}
    color: inherit;
`;

export const description = css`
    color: inherit;
`;

export const actionButton = css`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${MediaQuery.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`;

export const dismissButton = css`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;
    color: inherit;

    &:hover {
        background: transparent;
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
        color: inherit;
    }

    ${MediaQuery.MaxWidth.sm} {
        align-self: center;
    }
`;
