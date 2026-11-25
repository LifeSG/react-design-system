import styled, { css } from "styled-components";
import { Colour, Font, Motion, Radius, Spacing } from "../../theme";
import { BasicButton } from "../input-wrapper/input-wrapper";
import { DropdownVariantType } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $expanded?: boolean;
    $variant?: DropdownVariantType;
    $readOnly?: boolean;
    $dynamicHeight?: boolean;
    $hasContent?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Selector = styled(BasicButton)<StyleProps>`
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    width: 100%;
    padding: ${(props) =>
        props.$readOnly ? `0 ${Spacing["spacing-16"]}` : Spacing["spacing-16"]};

    ${(props) =>
        props.$variant === "small"
            ? css`
                  ${Font["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `
            : css`
                  ${Font["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    ${(props) => {
        if (!props.$dynamicHeight) return;

        // grows with the content. Content is expected to be rows of 1.5rem
        // each, so the vertical padding keeps a single row the same height as
        // the fixed height. Without content, the value is centered instead
        const height = props.$variant === "small" ? 2.5 : 3;
        return css`
            height: auto;
            min-height: calc(${height}rem - 2px);
            padding-block: ${props.$hasContent
                ? `calc((${height}rem - 1.5rem) / 2 - 1px)`
                : 0};
        `;
    }}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;

/**
 * The combobox when the selector has `content`. It is laid over the selector
 * so that it is the click target and focus indicator, while the content sizes
 * the selector
 */
export const ComboboxButton = styled(BasicButton)`
    position: absolute;
    inset: 0;
    padding: 0;
    border-radius: ${Radius["sm"]};
    cursor: inherit;

    &:focus-visible {
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
    flex: 1;
    min-width: 0;
    pointer-events: none;

    button {
        pointer-events: auto;
    }
`;

export const IconContainer = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};

    flex-shrink: 0;

    svg {
        color: ${Colour["icon"]};
        height: 1em;
        width: 1em;
    }
`;
