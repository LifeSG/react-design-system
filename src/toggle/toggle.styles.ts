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
// BASIC STYLING
// =============================================================================

export const borderDefault = css`
    border: solid 1px ${Colour.border};
`;

export const borderError = css`
    border: solid 1px ${Colour["border-error"]};
`;

export const borderNone = css`
    border: none;
`;

export const borderSelected = css`
    border: solid 1px ${Colour["border-selected"]};
`;

export const borderDisabled = css`
    border: solid 1px ${Colour["border-disabled"]};
`;

export const borderSelectedDisabled = css`
    border: solid 1px ${Colour["border-selected-disabled"]};
`;

export const bgDefault = css`
    background: ${Colour.bg};
`;

export const bgSelected = css`
    background: ${Colour["bg-selected"]};
`;

export const bgError = css`
    background: ${Colour["bg-error"]};
`;

export const bgDisabled = css`
    background: ${Colour["bg-disabled"]};
`;

export const bgSelectedDisabled = css`
    background: ${Colour["bg-selected-disabled"]};
`;

export const colorTextDefault = css`
    color: ${Colour.text};
`;

export const colorTextDisabled = css`
    color: ${Colour["text-disabled"]};
`;

export const colorTextError = css`
    color: ${Colour["text-error"]};
`;

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
`;

export const toggleTextContainerSelected = css`
    color: ${Colour["text-selected"]};
`;

export const toggleTextContainerDisabledSelected = css`
    color: ${Colour["text-selected-disabled"]};
`;

export const container = css`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${Radius["sm"]};
    overflow: hidden;
    flex-direction: column;
    height: fit-content;

    &:focus-within {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 0;
    }

    &.${borderError}, &.${bgError} {
        &:focus-within {
            outline: 2px solid ${Colour["border-error-focus"]};
        }
    }
`;

export const containerNoIndicator = css`
    justify-content: center;
`;

export const containerUseContentWidth = css`
    min-width: unset;
`;

export const toggleContainerHoverError = css`
    &:has(.${headerContainer}:hover) {
        @media (pointer: fine) {
            background: ${Colour["bg-error-hover"]};
        }
    }
`;

export const toggleContainerHoverSelected = css`
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

export const toggleContainerHoverDefault = css`
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

export const disabledColorCursor = css`
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

export const alertContainer = css`
    width: 100%;
    user-select: none;
`;
