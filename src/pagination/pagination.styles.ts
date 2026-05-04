import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../theme";
// =============================================================================
// STYLING
// =============================================================================
export const paginationWrapper = css`
    display: flex;
`;

export const paginationList = css`
    align-self: flex-start;

    display: flex;
    align-items: center;

    ${MediaQuery.MaxWidth.lg} {
        align-self: center;
    }
`;

export const paginationMenu = css`
    display: inline-flex;
    align-items: center;
`;

export const ellipsisButton = css`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border-radius: ${Radius.sm};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${Spacing["spacing-8"]};

    color: ${Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${Colour["bg-hover"]};
    }
`;

export const navigationButton = css`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    margin: ${Spacing["spacing-4"]};
    border-radius: ${Radius.sm};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${Spacing["spacing-8"]};

    color: ${Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${Colour["bg-hover"]};
    }
`;

export const pageItem = css`
    outline: none;
    margin: ${Spacing["spacing-4"]};
    box-shadow: none;
    border: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    border-radius: ${Radius.sm};
    min-width: 2.5rem;
    height: 2.5rem;
    padding: 0 ${Spacing["spacing-8"]};

    background: ${Colour.bg};
    cursor: pointer;

    ${Font["body-baseline-regular"]};
    text-align: center;
    color: ${Colour.text};

    &:hover,
    &:focus-visible {
        border-color: ${Colour["bg-hover"]};
        background: ${Colour["bg-hover"]};
        color: ${Colour["text-hover"]};
        font-weight: ${Font.Spec["weight-semibold"]};
    }
`;

export const pageItemSelected = css`
    border-color: ${Colour["bg-primary"]};
    background: ${Colour["bg-primary"]};
    color: ${Colour["text-inverse"]};
    font-weight: ${Font.Spec["weight-bold"]};

    &:hover,
    &:focus-visible {
        border-color: ${Colour["bg-selected-strongest-hover"]};
        background: ${Colour["bg-selected-strongest-hover"]};
        color: ${Colour["text-inverse"]};
        font-weight: ${Font.Spec["weight-bold"]};
    }
`;

export const ellipsisContainer = css`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${Spacing["spacing-4"]};
    border-radius: ${Radius.sm};
    width: 2.5rem;
    height: 2.5rem;

    cursor: pointer;
`;

export const paginationMobileInput = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${Spacing["spacing-4"]};

    color: ${Colour.text};
`;

export const label = css`
    white-space: nowrap;
`;

export const labelDivider = css`
    margin: 0 ${Spacing["spacing-16"]};
    white-space: nowrap;
`;

export const inputView = css`
    width: 3.5rem;
    height: 2.5rem;
    ${Font["body-baseline-regular"]};

    input {
        padding: 0 ${Spacing["spacing-8"]};
        text-align: center;
    }
`;

export const hover = css`
    position: absolute;
    top: calc(${Spacing["spacing-8"]} * -1);
    transform: translateY(-100%);

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: ${Radius.sm};
    width: max-content;
    padding: ${Spacing["spacing-4"]} ${Spacing["spacing-12"]};

    background-color: ${Colour["bg-hover"]};

    ${Font["body-xs-regular"]}
    color: ${Colour["text-hover"]};
`;

export const inputSelectWrapper = css`
    margin-left: ${Spacing["spacing-4"]};
    width: 10rem;
`;
