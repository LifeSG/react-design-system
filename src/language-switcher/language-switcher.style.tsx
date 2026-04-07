import styled, { css } from "styled-components";
import { Border, Colour, Font, Motion, Radius, Spacing } from "../theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface DropdownItemStyleProps {
    $selected?: boolean;
}

interface DropdownPanelStyleProps {
    $width?: number;
}

interface LinkItemStyleProps {
    $active?: boolean;
}

// =============================================================================
// SHARED STYLES
// =============================================================================
export const LiveRegion = styled.span`
    position: absolute;
    width: 0.0625rem;
    height: 0.0625rem;
    padding: 0;
    margin: -0.0625rem;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;

// =============================================================================
// DROPDOWN STYLES
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
        outline-offset: -0.125rem;
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

    svg {
        color: ${Colour["icon-primary"]};
    }
`;

interface ChevronStyleProps {
    $expanded?: boolean;
}

export const ChevronWrapper = styled.span<ChevronStyleProps>`
    display: flex;
    align-items: center;
    margin-left: auto;
    transition: transform ${Motion["duration-250"]} ease;

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

export const DropdownPanel = styled.div<DropdownPanelStyleProps>`
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
    ${({ $width }) =>
        $width &&
        css`
            width: ${$width}px;
        `}
`;

export const DropdownList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const TickIconWrapper = styled.span`
    ${IconWrapper}

    svg {
        color: ${Colour["icon-primary"]};
    }
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
        outline-offset: -0.125rem;
    }

    ${({ $selected }) =>
        $selected &&
        css`
            background: ${Colour["bg-primary-subtlest"]};
            color: ${Colour["text-primary"]};
        `}
`;

// =============================================================================
// LINK CONTAINER STYLES
// =============================================================================
export const LinkContainerWrapper = styled.div`
    display: inline-flex;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    align-items: center;
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
`;

export const LinkList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    gap: 0 ${Spacing["spacing-8"]};
    flex-wrap: wrap;
`;

export const LinkListItem = styled.li`
    display: flex;
    align-items: center;
`;

export const LinkDivider = styled.span`
    width: ${Border["width-010"]};
    height: 1rem;
    background: ${Colour["border-strong"]};
    flex-shrink: 0;
`;

export const LinkItem = styled.button<LinkItemStyleProps>`
    display: flex;
    padding: 0.125rem 0.25rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border: none;
    border-radius: ${Radius["md"]};
    ${Font["body-md-semibold"]}
    color: ${Colour["text-primary"]};
    text-align: center;
    transition: background-color ${Motion["duration-150"]} ease;

    ${({ $active }) =>
        $active
            ? css`
                  background: ${Colour["bg-primary-subtler"]};
                  cursor: default;
              `
            : css`
                  background: none;
                  cursor: pointer;

                  &:hover {
                      background: ${Colour["bg-hover"]};
                  }
              `}

    &:focus-visible {
        outline: ${Border["width-020"]} solid ${Colour["border-selected"]};
        outline-offset: -0.125rem;
    }
`;
