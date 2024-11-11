import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css } from "styled-components";
import { Color } from "../../color";
import { Text } from "../../text/text";
import { TickIcon } from "@lifesg/react-icons/tick";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface DropdownNavStyleProps {
    $isStickied?: boolean;
    $stickyOffset: number;
}
interface NavItemListStyleProps {
    $viewportHeight?: number;
}

interface NavItemStyleProps {
    $isSelected?: boolean;
}
interface NavIconStyleProps {
    $isDropdownExpanded: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
// use #rrggbbaa format for color (D9 is 0.85 alpha)
// LINK: https://rgbacolorpicker.com/rgba-to-hex
export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${Color.Neutral[1]}D9;
    z-index: -1;
`;

export const LabelText = styled(Text.BodySmall)<NavItemStyleProps>`
    margin: 0;
    ${(props) =>
        props.$isSelected &&
        css`
            color: ${Color.Primary};
        `}
`;

export const StyledTickIcon = styled(TickIcon)`
    color: ${Color.Primary};
    margin: 0 8px;
`;

export const NavIcon = styled(ChevronDownIcon)<NavIconStyleProps>`
    color: ${Color.Primary};
    transition: transform 250ms ease-in-out;
    transform: rotate(${(props) => (props.$isDropdownExpanded ? 180 : 0)}deg);
`;

export const NavLabel = styled.div`
    display: block;
    margin: 0;
    cursor: pointer;
    background: ${Color.Neutral[8]};
    padding: 12px 16px;
    box-shadow: 0px 0px 1px 1px ${Color.Neutral[5]};
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    transition: all 200ms linear;
`;

export const NavItem = styled.li<NavItemStyleProps>`
    padding: 12px 16px;
    background: #fff;
    position: relative; /* Ensures that the tick mark is positioned relative to the selected item */
    display: flex;
    align-items: center; /* Vertically align text and tick */
    color: red;
    ${(props) =>
        props.$isSelected &&
        css`
            font-weight: bold;
            background-color: #e0f7fa;
            padding-left: 0 !important;
        `}
`;

export const NavItemList = styled.ul<NavItemListStyleProps>`
    transform: scaleY(1);
    transition: all 300ms;
    transform-origin: top;
    list-style-type: none;
    padding: 0px 8px 0px 8px;
    margin: 0;
    background: #fff;
    cursor: pointer;
    box-shadow: 0px 0px 1px 1px ${Color.Neutral[5]};
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    overflow-y: auto; /* Enables vertical scrolling */
    max-height: 300px; /* Set a max height for the dropdown list */
    max-height: ${(props) =>
        props.$viewportHeight}px; /* Set a max height for the dropdown list */
`;

export const NavWrapper = styled.nav<DropdownNavStyleProps>`
    display: block;
    position: sticky;
    top: ${(props) => props.$stickyOffset}px;
    width: 100%;
    z-index: 10;

    ${(props) =>
        props.$isStickied &&
        `${NavLabel} {
			margin: 0 -16px;
			padding: 12px 16px;
			border-radius: 0;
		}

		${NavItemList} {
			margin-left: -16px;
			margin-right: -16px;
			border-radius-bottom-left: 4px;
			border-radius-bottom-right: 4px;

			${NavItem} {
				padding: 12px 32px;
			}
		}

		`}
`;
