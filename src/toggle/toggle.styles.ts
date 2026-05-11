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

export const headerContainer = css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    color: ${Colour.text};
    overflow-wrap: anywhere;
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
    flex-direction: column;
    min-width: 10.375rem;
    height: fit-content;
    overflow: hidden;
    background: ${Colour.bg};
    border-style: solid;
    border-width: 1px;
    border-radius: ${Radius["sm"]};

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

export const colorBorderError = css`
    border-color: ${Colour["border-error"]};
`;

export const toggleContainerNoBorderDisabledSelected = css`
    background: ${Colour["bg-selected-disabled"]};
    border: none;
`;

export const toggleContainerNoBorderDisabled = css`
    border: none;
`;

export const toggleContainerNoBorderSelected = css`
    background: ${Colour["bg-selected"]};
    border: none;
`;

export const toggleContainerNoBorder = css`
    border: none;
`;

export const toggleContainerError = css`
    border-color: ${Colour["border-error"]};
`;

export const toggleContainerDisabledSelected = css`
    background: ${Colour["bg-selected-disabled"]};
    border-color: ${Colour["border-selected-disabled"]};
`;

export const toggleContainerDisabled = css`
    background: ${Colour["bg-disabled"]};
    border-color: ${Colour["border-disabled"]};
`;

export const toggleContainerSelected = css`
    background: ${Colour["bg-selected"]};
    border-color: ${Colour["border-selected"]};
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

export const toggleContainer = css`
    border-color: ${Colour.border};
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    cursor: pointer;
    background: transparent;
    border: none;
    opacity: 0;
`;

export const toggleInputDisabled = css`
    cursor: not-allowed;
`;

export const inputContainer = css`
    display: flex;
`;

export const label = css`
    ${tokens.label.desktopLineClamp}: initial;
    ${tokens.label.tabletLineClamp}: initial;
    ${tokens.label.mobileLineClamp}: initial;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: var(${tokens.label.desktopLineClamp}, none);
    overflow-wrap: break-word;
    -webkit-box-orient: vertical;

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
    /* forces sublabel to render above the input */
    z-index: 1;
    margin-top: 0.5rem;

    /* to allow click events to be passed to the input */
    pointer-events: none;

    strong,
    b {
        ${Font["body-md-semibold"]}
    }
`;

export const indicatorLabelContainer = css`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0.6875rem 1rem;
`;

export const indicatorLabelContainerAddPadding = css`
    padding: 0.6875rem 0 0.6875rem 1rem;
`;

export const removeButton = css`
    ${Font["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    color: ${Colour["text-error"]};
    white-space: nowrap;
    cursor: pointer;
    background: none;
    border: none;
`;

export const disabledColorCursor = css`
    color: ${Colour["text-disabled"]};
    cursor: not-allowed;
`;

export const expandButton = css`
    ${Font["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0 1rem 0.6875rem;
    color: ${Colour["text-primary"]};
    cursor: pointer;
    background-color: ${Colour.bg};
    border: none;

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
    padding: 0.6875rem 1rem 0.5rem;
    color: ${Colour["text-error"]};
    cursor: pointer;
    background: ${Colour.bg};
    border: none;
`;

export const children = css`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: 0.5rem;
    color: ${Colour.text};
    background-color: ${Colour.bg};
`;

export const childrenIsFinalItem = css`
    padding-bottom: 0.6875rem;
`;

export const colorTextDisabled = css`
    color: ${Colour["text-disabled"]};
`;

export const colorTextError = css`
    color: ${Colour["text-error"]};
`;

export const alertContainer = css`
    width: 100%;
    user-select: none;
`;
