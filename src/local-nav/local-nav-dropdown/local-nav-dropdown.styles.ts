import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { TickIcon } from "@lifesg/react-icons/tick";
import styled, { css } from "styled-components";

import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Motion,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface DropdownNavStyleProps {
    $isStickied?: boolean;
    $stickyOffset: number;
    $sideMargin?: number;
}

interface NavItemListStyleProps {
    $viewportHeight?: number;
}

interface NavItemStyleProps {
    $isSelected?: boolean;
}
interface DropdownExpandedProps {
    $isDropdownExpanded: boolean;
}

interface NavIconStyleProps extends DropdownExpandedProps {}
interface NavLabelStyleProps extends DropdownExpandedProps {}

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// NAV SELECT
// -----------------------------------------------------------------------------

export const NavSelectIcon = styled(ChevronDownIcon)<NavIconStyleProps>`
    color: ${V3_Colour["icon"]};
    transition: transform ${V3_Motion["duration-250"]}
        ${V3_Motion["ease-default"]};
    transform: rotate(${(props) => (props.$isDropdownExpanded ? 180 : 0)}deg);
`;

export const NavSelect = styled.div<NavLabelStyleProps>`
    cursor: pointer;
    background: ${V3_Colour["bg"]};
    padding: ${V3_Spacing["spacing-12"]} ${V3_Spacing["spacing-16"]};
    overflow: hidden;
    box-shadow: 0 0 ${V3_Border["width-010"]} ${V3_Border["width-010"]}
        ${V3_Colour["border"]};
    border-radius: ${V3_Radius["sm"]};
    ${(props) =>
        props.$isDropdownExpanded &&
        css`
            border-bottom-left-radius: ${V3_Radius["none"]};
            border-bottom-right-radius: ${V3_Radius["none"]};
        `}
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all ${V3_Motion["duration-250"]} ${V3_Motion["ease-default"]};
    transition-property: background, border-radius, box-shadow, transform;

    &:focus-visible {
        outline: 2px solid ${V3_Colour["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${V3_Radius["sm"]};
    }
`;

// -----------------------------------------------------------------------------
// NAV ITEMS
// -----------------------------------------------------------------------------

export const NavItem = styled.li<NavItemStyleProps>`
    padding: ${(props) =>
        props.$isSelected
            ? css`
                  ${V3_Spacing["spacing-12"]} ${V3_Spacing["spacing-8"]} 
                  ${V3_Spacing["spacing-12"]} 0
              `
            : css`
                  ${V3_Spacing["spacing-12"]} ${V3_Spacing["spacing-8"]}
                  ${V3_Spacing["spacing-12"]} ${V3_Spacing["spacing-32"]}
              `};
    background: ${(props) =>
        props.$isSelected ? V3_Colour["bg-primary-subtlest"] : V3_Colour["bg"]};
    /* Ensures that the tick mark is positioned relative to the selected item */
    position: relative;
    display: flex;
    /* Vertically align text and tick */
    align-items: center;

    &:focus-visible {
        outline: 2px solid ${V3_Colour["focus-ring"]};
        outline-offset: 0px;
        border-radius: ${V3_Radius["sm"]};
    }
`;

export const NavItemList = styled.ul<NavItemListStyleProps>`
    transition: all ${V3_Motion["duration-250"]} ${V3_Motion["ease-default"]};
    transform-origin: top;
    list-style-type: none;
    padding: 0 ${V3_Spacing["spacing-8"]};
    margin: 0;
    background: ${V3_Colour["bg"]};
    cursor: pointer;
    box-shadow: 0 0 ${V3_Border["width-010"]} ${V3_Border["width-010"]}
        ${V3_Colour["border"]};
    border-bottom-right-radius: ${V3_Radius["sm"]};
    border-bottom-left-radius: ${V3_Radius["sm"]};
    /* Enables vertical scrolling */
    overflow-y: auto;
    /* Set a max height for the dropdown list */
    max-height: ${(props) => props.$viewportHeight}px;
`;

export const NavItemLabel = styled.div<NavItemStyleProps>`
    ${V3_Font["body-baseline-regular"]}
    color: ${(props) =>
        props.$isSelected ? V3_Colour["text-selected"] : V3_Colour["text"]};
`;

export const StyledTickIcon = styled(TickIcon)`
    color: ${V3_Colour["icon-selected"]};
    margin: 0 ${V3_Spacing["spacing-8"]};
`;

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${V3_Colour["overlay-strong"]};
    z-index: -1;
`;

export const NavWrapper = styled.nav<DropdownNavStyleProps>`
    display: block;
    position: sticky;
    top: ${(props) => props.$stickyOffset}px;
    width: 100%;
    z-index: 10;

    ${({ $isStickied, $sideMargin }) =>
        $isStickied &&
        css`
            ${NavSelect} {
                ${$sideMargin && `margin: 0 -${$sideMargin}px;`}
                padding: ${V3_Spacing["spacing-12"]} ${V3_Spacing[
                    "spacing-16"
                ]};
                border-radius: ${V3_Radius["none"]};
            }

            ${NavItemList} {
                ${$sideMargin && `margin-left: -${$sideMargin}px;`}
                ${$sideMargin && `margin-right: -${$sideMargin}px;`}
                border-radius-bottom-left: ${V3_Radius.sm};
                border-radius-bottom-right: ${V3_Radius.sm};
            }
        `}
`;
