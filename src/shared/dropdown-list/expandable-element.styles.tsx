import styled, { css } from "styled-components";
import { Colour, Font, Motion, Spacing } from "../../theme";
import { DropdownVariantType } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $disabled?: boolean;
    $dynamicHeight?: boolean;
    $editable?: boolean;
    $expanded?: boolean;
    $overlay?: boolean;
    $variant?: DropdownVariantType;
}

// =============================================================================
// STYLING
// =============================================================================
export const Selector = styled.div<StyleProps>`
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px);
    ${Font["body-baseline-regular"]}

    ${({ $editable }) =>
        $editable &&
        css`
            padding: ${Spacing["spacing-16"]};
            cursor: pointer;
        `}

    ${({ $disabled }) => $disabled && "cursor: not-allowed;"}

    ${({ $variant, $dynamicHeight }) =>
        $variant === "small" &&
        css`
            ${Font["body-md-regular"]}
            height: ${$dynamicHeight ? "auto" : "calc(2.5rem - 2px)"};
        `}

    ${({ $dynamicHeight, $variant, $editable }) =>
        $dynamicHeight &&
        css`
            height: auto;
            min-height: calc(${$variant === "small" ? 2.5 : 3}rem - 2px);

            ${$editable &&
            css`
                padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
            `}
        `}
`;

/**
 * The combobox. By default it lays out the value inside the selector. Its
 * pseudo-element is stretched over the whole selector, so that the click
 * target and focus ring cover it
 */
export const ComboboxButton = styled.button<StyleProps>`
    display: flex;
    flex: 1;
    align-items: center;
    gap: inherit;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: inherit;
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    text-align: start;
    cursor: inherit;
    outline: none;

    // with content, the combobox only holds a visually hidden value and is
    // laid over the selector, so that the content sizes the selector
    ${({ $overlay }) =>
        $overlay &&
        css`
            position: absolute;
            inset: 0;
        `}

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
    }

    &:focus-visible::before {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;

/**
 * Content that may contain interactive elements, so it is not part of the
 * combobox. Clicks pass through to the combobox, except for buttons
 */
export const Content = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    gap: inherit;
    min-width: 0;
    pointer-events: none;

    button {
        pointer-events: auto;
    }
`;

export const IconContainer = styled.div<StyleProps>`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    transform: rotate(${({ $expanded }) => ($expanded ? 180 : 0)}deg);
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};

    svg {
        color: ${Colour["icon"]};
        height: 1em;
        width: 1em;
    }
`;
