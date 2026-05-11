import { css } from "@linaria/core";

import { Border, Colour, MediaQuery, Radius, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// MAIN WRAPPER
// -----------------------------------------------------------------------------
export const root = css`
    overflow: hidden;

    ${MediaQuery.MaxWidth.xxs} {
        max-width: 100%;
    }
`;

export const container = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-20"]} ${Spacing["spacing-24"]};
    background: ${Colour["bg"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
`;

export const inputSection = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`;

export const controlSection = css`
    display: flex;
    flex-direction: row-reverse;
    gap: ${Spacing["spacing-8"]};
    justify-content: flex-start;
    margin-top: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.xxs} {
        flex-direction: column;
        margin-top: ${Spacing["spacing-32"]};
    }
`;

// -----------------------------------------------------------------------------
// INPUT COMPONENTS
// -----------------------------------------------------------------------------
export const hourMinuteSection = css`
    display: flex;
    align-items: center;
    margin-right: ${Spacing["spacing-32"]};

    ${MediaQuery.MaxWidth.xxs} {
        width: 100%;
        margin-right: 0;
    }
`;

export const timePeriodSection = css`
    display: flex;
    gap: ${Spacing["spacing-8"]};

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: column;
    }

    ${MediaQuery.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`;

export const inputContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${MediaQuery.MaxWidth.xxs} {
        width: 6rem;
    }
`;

export const switchButton = css`
    width: 5rem;
    padding: ${Spacing["spacing-16"]} 0;
    color: ${Colour["icon"]};

    svg {
        width: 1rem;
        height: 1rem;
    }

    &:hover {
        color: ${Colour["icon-hover"]};
    }
`;

export const dividerLabel = css`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`;

export const timeInputBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: calc(3rem - 2px);

    ${MediaQuery.MaxWidth.xxs} {
        width: 100%;
    }
`;

export const timeInput = css`
    width: 100%;
    text-align: center;

    &:focus::placeholder {
        color: transparent;
    }
`;

export const timePeriodToggle = css`
    flex: 1;
    min-width: 5rem;
`;

// -----------------------------------------------------------------------------
// CONTROL COMPONENTS
// -----------------------------------------------------------------------------
export const controlButton = css`
    width: 7rem;

    ${MediaQuery.MaxWidth.sm} {
        flex: 1;
    }

    ${MediaQuery.MaxWidth.xxs} {
        width: 100%;
    }
`;
