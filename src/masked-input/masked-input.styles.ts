import { css } from "@linaria/core";

import { Colour, Font, Spacing } from "../theme";

export const tokens = {
    iconContainer: {
        inactiveColor: "--fds-internal-maskedInput-iconContainer-inactiveColor",
        activeColor: "--fds-internal-maskedInput-iconContainer-activeColor",
    },
};

export const inputGroupWrapper = css`
    padding: 0 0 0 ${Spacing["spacing-16"]};

    input {
        cursor: initial;
    }
`;

export const inputGroupWrapperReadOnly = css`
    padding: 0;
`;

export const inputGroupWrapperInputPointer = css`
    input {
        cursor: pointer;
    }
`;

export const iconContainer = css`
    ${tokens.iconContainer.inactiveColor}: initial;
    ${tokens.iconContainer.activeColor}: initial;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(${tokens.iconContainer.activeColor}, ${Colour["icon-primary"]});
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`;

export const iconContainerDisabled = css`
    cursor: initial;
    color: var(${tokens.iconContainer.inactiveColor}, ${Colour.icon});
`;

// -----------------------------------------------------------------------------
// LOADING DISPLAY
// -----------------------------------------------------------------------------
export const loadingWrapper = css`
    display: flex;
    align-items: center;
    height: 3rem;
`;

export const loadingLabel = css`
    color: ${Colour["text-subtler"]};
`;

export const spinner = css`
    margin-right: ${Spacing["spacing-8"]};
    color: ${Colour["icon"]};
`;

export const tryAgainLabel = css`
    color: ${Colour["text-primary"]};
    text-decoration: underline;
    font-weight: ${Font.Spec["weight-semibold"]};
`;

export const errorTextContainer = css`
    display: flex;
    align-items: center;
    margin-right: ${Spacing["spacing-8"]};
`;

export const errorIcon = css`
    color: ${Colour["icon-warning"]};
    margin-right: ${Spacing["spacing-8"]};
    height: 1em;
    width: 1em;
`;

export const errorLabel = css`
    color: ${Colour["text-warning"]};
`;

export const clickableErrorWrapper = css`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Font["body-baseline-regular"]}

    &:hover,
    &:active,
    &:focus {
        .${tryAgainLabel} {
            color: ${Colour["text-hover"]};
        }
    }
`;

export const readOnlyClickable = css`
    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    width: 100%;
    justify-content: space-between;
    min-height: 3rem;
`;

export const readOnlyValueText = css`
    overflow-wrap: anywhere;
`;

export const readOnlyIconContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colour["icon-primary"]};
    padding: 0 1rem;
    flex-shrink: 0;

    svg {
        width: ${Font.Spec["body-size-baseline"]};
        height: ${Font.Spec["body-size-baseline"]};
    }
`;
