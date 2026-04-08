import styled, { css } from "styled-components";
import { Border, Colour, Font, Motion, Radius, Spacing } from "../theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ChevronStyleProps {
    $expanded?: boolean;
}

interface DropdownItemStyleProps {
    $selected?: boolean;
}

// =============================================================================
// TRIGGER STYLES
// =============================================================================
export const TriggerButton = styled.button`
    display: flex;
    height: 2.5rem;
    min-width: 9rem;
    padding: 0 ${Spacing["spacing-16"]};
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    flex-shrink: 0;
    cursor: pointer;
    ${Font["body-md-semibold"]}
    color: ${Colour["text-primary"]};
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};

    &:hover {
        background: ${Colour["bg-hover"]};
    }

    &:focus-visible {
        outline: ${Border["width-020"]} solid ${Colour["border-selected"]};
        outline-offset: -2px;
    }
`;

const IconWrapper = css`
    display: flex;
    align-items: center;

    svg {
        height: 1rem;
        width: 1rem;
    }
`;

export const LanguageIconWrapper = styled.span`
    ${IconWrapper}
    color: ${Colour["icon-primary"]};
`;

export const ChevronWrapper = styled.span<ChevronStyleProps>`
    display: flex;
    align-items: center;
    margin-left: auto;
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    ${({ $expanded }) =>
        $expanded &&
        css`
            transform: rotate(180deg);
        `}
`;

// =============================================================================
// DROPDOWN STYLES
// =============================================================================
export const DropdownPanel = styled.div`
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
`;

export const DropdownList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const TickIconWrapper = styled.span`
    ${IconWrapper}
    color: ${Colour["icon-primary"]};
`;

export const DropdownItem = styled.li<DropdownItemStyleProps>`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    width: 100%;
    height: 2.5rem;
    background: none;
    border: none;
    padding: 0 ${Spacing["spacing-16"]};
    ${({ $selected }) =>
        !$selected &&
        css`
            padding-left: calc(
                ${Spacing["spacing-16"]} + 1rem + ${Spacing["spacing-8"]}
            );
        `}
    cursor: pointer;
    ${Font["body-md-regular"]}
    color: ${Colour["text"]};

    &:hover {
        background: ${Colour["bg-hover"]};
    }

    &:focus-visible {
        outline: ${Border["width-020"]} solid ${Colour["border-selected"]};
        outline-offset: -2px;
    }

    ${({ $selected }) =>
        $selected &&
        css`
            background: ${Colour["bg-primary-subtlest"]};
            color: ${Colour["text-primary"]};
        `}
`;
