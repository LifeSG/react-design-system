import { css } from "@linaria/core";

import { Colour, MediaQuery, Radius, Spacing } from "../theme";

export const contactSectionWrapper = css`
    display: flex;
    flex-direction: column;
`;

export const contactInputSectionWrapper = css`
    display: flex;
`;

export const contactInputWrapper = css`
    display: flex;
    align-items: center;
    padding: 0 ${Spacing["spacing-16"]};
    border-radius: ${Radius["sm"]} 0 0 ${Radius["sm"]};
    box-shadow: inset 1px 0 0 ${Colour["border"]},
        inset 0 1px 0 ${Colour["border"]}, inset 0 -1px 0 ${Colour["border"]};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${Colour["border-focus"]},
            inset 0 2px 0 ${Colour["border-focus"]},
            inset 0 -2px 0 ${Colour["border-focus"]};
    }

    &[data-max-width="true"] {
        width: 100%;
    }
`;

export const contactInputWrapperError = css`
    box-shadow: inset 1px 0 0 ${Colour["border-error"]},
        inset 0 1px 0 ${Colour["border-error"]},
        inset 0 -1px 0 ${Colour["border-error"]};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${Colour["border-error-focus"]},
            inset 0 2px 0 ${Colour["border-error-focus"]},
            inset 0 -2px 0 ${Colour["border-error-focus"]};
    }
`;

export const contactInputWrapperDisabled = css`
    box-shadow: inset 0 0 0 1px ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg-disabled"]};
    color: ${Colour["text-disabled"]};

    &:focus-within {
        box-shadow: inset 0 0 0 2px ${Colour["border"]};
    }

    &[data-max-width="false"] {
        /* Spacer to maintain width when disabled */
        &::after {
            content: "";
            min-width: 120px;
            flex-shrink: 0;
        }

        /* Hide spacer on mobile to prevent text coverage */
        ${MediaQuery.MaxWidth.sm} {
            &::after {
                display: none;
            }
        }
    }
`;

export const contactInputWrapperReadonly = css`
    padding-left: 0;
    box-shadow: none;
    border-radius: ${Radius["sm"]};

    &:focus-within {
        box-shadow: inset 0 0 0 2px ${Colour["border-focus"]};
    }
`;

export const verifiedIconWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: ${Spacing["spacing-12"]};
    color: ${Colour["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`;

export const contactButton = css`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;

    ${MediaQuery.MaxWidth.sm} {
        width: fit-content;
    }
`;

export const emailContactInput = css`
    padding: 0 ${Spacing["spacing-16"]};
    width: 100%;
    background: transparent;
`;

export const emailContactInputDisabled = css`
    input {
        color: ${Colour["text-disabled"]};
    }
`;

export const emailContactInputReadonly = css`
    padding: 0;
`;

export const phoneContactInput = css`
    padding: 0 ${Spacing["spacing-16"]};
    background: transparent;
`;

export const phoneContactInputDisabled = css`
    input {
        color: ${Colour["text-disabled"]};
    }
`;

export const phoneContactInputReadonly = css`
    padding: 0;

    input {
        margin-left: ${Spacing["spacing-12"]};
    }
`;
