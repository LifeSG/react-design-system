import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css } from "styled-components";
import { Color } from "../../color";
import { Text } from "../../text/text";
import { TickIcon } from "@lifesg/react-icons/tick";
import { MyLegacyTheme } from "../../theme";

interface DropdownNavStyleProps {
    isStickied?: boolean;
    stickyOffset: number;
}
interface NavItemListStyleProps {
    viewportHeight?: number;
}

interface NavItemStyleProps {
    isSelected?: boolean;
}

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
    visibility: visible;
    opacity: 1;
    transition: all 250ms ease-in-out;
`;
export const LabelText = styled(Text.BodySmall)<NavItemStyleProps>`
    margin: 0;
    ${(props) =>
        props.isSelected &&
        css`
            color: ${Color.Primary};
        `}
`;
export const StyledTickIcon = styled(TickIcon)`
    color: ${Color.Primary};
    margin: 0 8px;
`;
export const NavIcon = styled(ChevronDownIcon)<{ isDropdownExpanded: boolean }>`
    color: ${Color.Primary};
    transition: transform 250ms ease-in-out;
    transform: rotate(${(props) => (props.isDropdownExpanded ? 180 : 0)}deg);
`;

export const NavLabel = styled.label`
    display: block;
    margin: 0;
    cursor: pointer;
    background: #fff;
    padding: 0.75rem 1rem;
    box-shadow: 0px 0px 1px 1px ${Color.Neutral[5]};
    border-radius: 0.25rem;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    transition: all 200ms linear;
`;
export const NavItem = styled.li<NavItemStyleProps>`
    padding: 0.75rem 1rem;
    background: #fff;
    position: relative; /* Ensures that the tick mark is positioned relative to the selected item */
    display: flex;
    align-items: center; /* Vertically align text and tick */
    color: red;
    ${(props) =>
        props.isSelected &&
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
    padding: 0;
    margin: 0;
    background: #fff;
    cursor: pointer;
    box-shadow: 0px 0px 1px 1px ${Color.Neutral[5]};
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    overflow-y: auto; /* Enables vertical scrolling */
    max-height: 300px; /* Set a max height for the dropdown list */
    max-height: ${(props) =>
        props.viewportHeight}px; /* Set a max height for the dropdown list */
`;

export const NavWrapper = styled.nav<DropdownNavStyleProps>`
    display: block;
    position: sticky;
    top: ${(props) => props.stickyOffset}px;
    width: 100%;
    z-index: 10;
    grid-column-start: 1;
    grid-column-end: 13;
    padding: 0 1rem;

    ${(props) =>
        props.isStickied &&
        `${NavLabel} {
			margin: 0 -1rem;
			padding: 0.75rem 1rem;
			border-radius: 0;
		}

		${NavItemList} {
			margin-left: -1rem;
			margin-right: -1rem;
			border-radius-bottom-left: 0.25rem;
			border-radius-bottom-right: 0.25rem;

			${NavItem} {
				padding: 0.75rem 2rem;
			}
		}

		`}
`;
