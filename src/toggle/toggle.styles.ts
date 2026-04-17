import { css } from "@linaria/core";

import { Colour, Font, MediaQuery, Radius } from "../theme";
import * as toggleIconStyles from "./toggle-icon.styles";

export const tokens = {
    label: {
        desktopLineClamp: "--fds-internal-toggle-label-desktopLineClamp",
        tabletLineClamp: "--fds-internal-toggle-label-tabletLineClamp",
        mobileLineClamp: "--fds-internal-toggle-label-mobileLineClamp",
    },
} as const;

// =============================================================================
// STYLING
// =============================================================================

export const headerContainer = css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
    color: ${Colour.text};
`;

export const toggleTextContainerSelected = css`
    color: ${Colour["text-selected"]};
`;

export const toggleTextContainerDisabled = css`
    color: ${Colour["text-disabled"]};
`;

export const toggleTextContainerDisabledSelected = css`
    color: ${Colour["text-selected-disabled"]};
`;

export const container = css`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${Radius["sm"]};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Colour.bg};

    &:focus-within {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 0;
    }
`;

export const noIndicatorContainer = css`
    justify-content: center;
`;

export const useContentWidthContainer = css`
    min-width: unset;
`;

export const toggleContainerNoBorderErrorDisabled = css`
    border-color: ${Colour["border-error"]};
`;

export const toggleContainerNoBorderError = css`
    border-color: ${Colour["border-error"]};

    &:has(.${headerContainer}:hover) {
        @media (pointer: fine) {
            background: ${Colour["bg-hover-subtle"]};
        }
    }
`;

export const toggleContainerNoBorderDisabledSelected = css`
    border: none;
    background: ${Colour["bg-selected-disabled"]};
`;

export const toggleContainerNoBorderDisabled = css`
    border: none;
`;

export const toggleContainerNoBorderSelected = css`
    border: none;
    background: ${Colour["bg-selected"]};

    &:has(.${headerContainer}:hover) {
        @media (pointer: fine) {
            background: ${Colour["bg-selected-hover"]};

            & .${textContainer} {
                color: ${Colour["text-selected-hover"]};
            }

            & .${toggleIconStyles.wrapperBase} {
                color: ${Colour["icon-selected-hover"]};
            }
        }
    }
`;

export const toggleContainerNoBorderDefault = css`
    border: none;

    &:has(.${headerContainer}:hover) {
        @media (pointer: fine) {
            background: ${Colour["bg-hover-subtle"]};
        }
    }
`;

export const toggleContainerDefaultErrorDisabled = css`
    border-color: ${Colour["border-error"]};
`;

export const toggleContainerDefaultError = css`
    border-color: ${Colour["border-error"]};

    &:has(.${headerContainer}:hover) {
        @media (pointer: fine) {
            background: ${Colour["bg-hover-subtle"]};
        }
    }
`;

export const toggleContainerDefaultDisabledSelected = css`
    border-color: ${Colour["border-selected-disabled"]};
    background: ${Colour["bg-selected-disabled"]};
`;

export const toggleContainerDefaultDisabled = css`
    border-color: ${Colour["border-disabled"]};
    background: ${Colour["bg-disabled"]};
`;

export const toggleContainerDefaultSelected = css`
    border-color: ${Colour["border-selected"]};
    background: ${Colour["bg-selected"]};

    &:has(.${headerContainer}:hover) {
        @media (pointer: fine) {
            background: ${Colour["bg-selected-hover"]};

            & .${textContainer} {
                color: ${Colour["text-selected-hover"]};
            }

            & .${toggleIconStyles.wrapperBase} {
                color: ${Colour["icon-selected-hover"]};
            }
        }
    }
`;

export const toggleContainerDefault = css`
    border-color: ${Colour.border};

    &:has(.${headerContainer}:hover) {
        @media (pointer: fine) {
            background: ${Colour["bg-hover-subtle"]};
        }
    }
`;

export const input = css`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: pointer;
    top: 0;
    left: 0;
    opacity: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`;

export const toggleInputDisabled = css`
    cursor: not-allowed;
`;

export const inputContainer = css`
    display: flex;
`;

export const label = css`
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;

    ${tokens.label.desktopLineClamp}: initial;
    ${tokens.label.tabletLineClamp}: initial;
    ${tokens.label.mobileLineClamp}: initial;

    -webkit-line-clamp: var(${tokens.label.desktopLineClamp}, none);
    ${MediaQuery.MaxWidth.lg} {
        -webkit-line-clamp: var(${tokens.label.tabletLineClamp}, none);
    }
    ${MediaQuery.MaxWidth.sm} {
        -webkit-line-clamp: var(${tokens.label.mobileLineClamp}, none);
    }
`;

export const toggleLabelDefault = css`
    ${Font["body-baseline-regular"]}
`;

export const toggleLabelSelected = css`
    ${Font["body-baseline-semibold"]}
`;

export const subLabel = css`
    ${Font["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Font["body-md-semibold"]}
    }
`;

export const indicatorLabelContainer = css`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: 0.6875rem 1rem;
`;

export const indicatorLabelContainerAddPadding = css`
    padding: 0.6875rem 0rem 0.6875rem 1rem;
`;

export const removeButton = css`
    color: ${Colour["text-error"]};
    white-space: nowrap;
    ${Font["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;
    cursor: pointer;
`;

export const removeButtonDisabled = css`
    color: ${Colour["text-disabled"]};
    cursor: not-allowed;
`;

export const expandButton = css`
    color: ${Colour["text-primary"]};
    ${Font["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Colour.bg};
    cursor: pointer;
    padding: 0 1rem 0.6875rem 1rem;
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`;

export const expandButtonDisabled = css`
    color: ${Colour["text-disabled"]};
    cursor: not-allowed;
`;

export const expandButtonPaddingTopRequired = css`
    padding-top: 0.6875rem;
`;

export const errorContainer = css`
    width: 100%;
    color: ${Colour["text-error"]};
    border: none;
    background: ${Colour.bg};
    cursor: pointer;
    padding: 0.6875rem 1rem 0.5rem 1rem;
`;

export const errorContainerDisabled = css`
    color: ${Colour["text-disabled"]};
    cursor: not-allowed;
`;

export const children = css`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: 0.5rem;
    background-color: ${Colour.bg};
    color: ${Colour.text};
`;

export const childrenIsFinalItem = css`
    padding-bottom: 0.6875rem;
`;

export const childrenSelected = css`
    color: ${Colour["text-selected"]};
`;

export const childrenDisabled = css`
    color: ${Colour["text-disabled"]};
`;

export const errorText = css`
    color: ${Colour["text-error"]};
`;

export const errorTextDisabled = css`
    color: ${Colour["text-disabled"]};
`;

export const errorList = css`
    color: ${Colour["text-error"]};
`;

export const errorListDisabled = css`
    color: ${Colour["text-disabled"]};
`;
