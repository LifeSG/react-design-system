import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { TickIcon } from "@lifesg/react-icons/tick";
import styled, { css } from "styled-components";
import { Colour, Font, Motion, Radius } from "@/theme";

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
    color: ${Colour["icon"]};
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};
    transform: rotate(${(props) => (props.$isDropdownExpanded ? 180 : 0)}deg);
`;

export const NavSelect = styled.div<NavLabelStyleProps>`
    cursor: pointer;
    background: ${Colour["bg"]};
    padding: 12px 16px;
    overflow: hidden;
    box-shadow: 0 0 1px 1px ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    ${(props) =>
        props.$isDropdownExpanded &&
        css`
            border-bottom-left-radius: ${Radius["none"]};
            border-bottom-right-radius: ${Radius["none"]};
        `}
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
`;

// -----------------------------------------------------------------------------
// NAV ITEMS
// -----------------------------------------------------------------------------

export const NavItem = styled.li<NavItemStyleProps>`
    padding: ${(props) =>
        props.$isSelected ? "12px 8px 12px 0" : "12px 8px 12px 32px"};
    background: ${(props) =>
        props.$isSelected ? Colour["bg-primary-subtlest"] : Colour["bg"]};
    /* Ensures that the tick mark is positioned relative to the selected item */
    position: relative;
    display: flex;
    /* Vertically align text and tick */
    align-items: center;
`;

export const NavItemList = styled.ul<NavItemListStyleProps>`
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    transform-origin: top;
    list-style-type: none;
    padding: 0 8px;
    margin: 0;
    background: ${Colour["bg"]};
    cursor: pointer;
    box-shadow: 0 0 1px 1px ${Colour["border"]};
    border-bottom-right-radius: ${Radius["sm"]};
    border-bottom-left-radius: ${Radius["sm"]};
    /* Enables vertical scrolling */
    overflow-y: auto;
    /* Set a max height for the dropdown list */
    max-height: ${(props) => props.$viewportHeight}px;
`;

export const NavItemLabel = styled.div<NavItemStyleProps>`
    ${Font["body-baseline-regular"]}
    color: ${(props) =>
        props.$isSelected ? Colour["text-selected"] : Colour["text"]};
`;

export const StyledTickIcon = styled(TickIcon)`
    color: ${Colour["icon-selected"]};
    margin: 0 8px;
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
    background-color: ${Colour["overlay-strong"]};
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
                padding: 12px 16px;
                border-radius: ${Radius.none};
            }

            ${NavItemList} {
                ${$sideMargin && `margin-left: -${$sideMargin}px;`}
                ${$sideMargin && `margin-right: -${$sideMargin}px;`}
			    border-radius-bottom-left: ${Radius.sm};
                border-radius-bottom-right: ${Radius.sm};
            }
        `}
`;
