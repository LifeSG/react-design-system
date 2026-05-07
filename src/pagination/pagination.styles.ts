import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../theme";
// =============================================================================
// STYLING
// =============================================================================
export const paginationWrapper = css`
    display: flex;
`;

export const paginationList = css`
    display: flex;
    align-items: center;
    align-self: flex-start;

    ${MediaQuery.MaxWidth.lg} {
        align-self: center;
    }
`;

export const paginationMenu = css`
    display: inline-flex;
    align-items: center;
`;

export const iconButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0 ${Spacing["spacing-8"]};
    color: ${Colour["icon-primary"]};
    outline: none;
    border-radius: ${Radius.sm};

    svg {
        width: 1.25rem;
        height: 1.25rem;
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

export const iconButtonNavigation = css`
    margin: ${Spacing["spacing-4"]};
`;

export const pageItem = css`
    min-width: 2.5rem;
    height: 2.5rem;
    padding: 0 ${Spacing["spacing-8"]};
    margin: ${Spacing["spacing-4"]};
    color: ${Colour.text};

    ${Font["body-baseline-regular"]};
    text-align: center;
    cursor: pointer;
    outline: none;
    background: ${Colour.bg};
    border: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    border-radius: ${Radius.sm};
    box-shadow: none;

    &:hover,
    &:focus-visible {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour["text-hover"]};
        background: ${Colour["bg-hover"]};
        border-color: ${Colour["bg-hover"]};
    }
`;

export const pageItemSelected = css`
    font-weight: ${Font.Spec["weight-bold"]};
    color: ${Colour["text-inverse"]};
    background: ${Colour["bg-primary"]};
    border-color: ${Colour["bg-primary"]};

    &:hover,
    &:focus-visible {
        font-weight: ${Font.Spec["weight-bold"]};
        color: ${Colour["text-inverse"]};
        background: ${Colour["bg-selected-strongest-hover"]};
        border-color: ${Colour["bg-selected-strongest-hover"]};
    }
`;

export const ellipsisContainer = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${Spacing["spacing-4"]};
    cursor: pointer;
`;

export const paginationMobileInput = css`
    display: flex;
    align-items: center;
    justify-content: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding: ${Spacing["spacing-4"]} ${Spacing["spacing-12"]};

    ${Font["body-xs-regular"]}
    color: ${Colour["text-hover"]};
    background: ${Colour["bg-hover"]};
    border: none;
    border-radius: ${Radius.sm};
    transform: translateY(-100%);
`;

export const inputSelectWrapper = css`
    width: 10rem;
    margin-left: ${Spacing["spacing-4"]};
`;
