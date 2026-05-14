import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { TickIcon } from "@lifesg/react-icons/tick";
import styled from "styled-components";

import { Border, Colour, Font, Motion, Radius, Spacing } from "../../theme";

export const tokens = {
    navWrapper: {
        stickyOffset: "--fds-internal-localNavDropdown-navWrapper-stickyOffset",
        sideMargin: "--fds-internal-localNavDropdown-navWrapper-sideMargin",
    },
    navItemList: {
        viewportHeight:
            "--fds-internal-localNavDropdown-navItemList-viewportHeight",
    },
};

// -----------------------------------------------------------------------------
// NAV SELECT
// -----------------------------------------------------------------------------

export const NavSelectIcon = styled(ChevronDownIcon)`
    color: ${Colour["icon"]};
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};
    transform: rotate(0deg);

    &.navSelectIconExpanded {
        transform: rotate(180deg);
    }
`;

export const NavSelect = styled.div`
    cursor: pointer;
    background: ${Colour["bg"]};
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    overflow: hidden;
    box-shadow: 0 0 ${Border["width-010"]} ${Border["width-010"]}
        ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    transition-property: background, border-radius, box-shadow, transform;

    &.navSelectExpanded {
        border-bottom-left-radius: ${Radius["none"]};
        border-bottom-right-radius: ${Radius["none"]};
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${Radius["sm"]};
    }
`;

// -----------------------------------------------------------------------------
// NAV ITEMS
// -----------------------------------------------------------------------------

export const NavItem = styled.li`
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-8"]}
        ${Spacing["spacing-12"]} ${Spacing["spacing-32"]};
    background: ${Colour["bg"]};
    /* Ensures that the tick mark is positioned relative to the selected item */
    position: relative;
    display: flex;
    /* Vertically align text and tick */
    align-items: center;

    &.navItemSelected {
        padding: ${Spacing["spacing-12"]} ${Spacing["spacing-8"]}
            ${Spacing["spacing-12"]} 0;
        background: ${Colour["bg-primary-subtlest"]};
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 0px;
        border-radius: ${Radius["sm"]};
    }
`;

export const NavItemList = styled.ul`
    ${tokens.navItemList.viewportHeight}: initial;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    transform-origin: top;
    list-style-type: none;
    padding: 0 ${Spacing["spacing-8"]};
    margin: 0;
    background: ${Colour["bg"]};
    cursor: pointer;
    box-shadow: 0 0 ${Border["width-010"]} ${Border["width-010"]}
        ${Colour["border"]};
    border-bottom-right-radius: ${Radius["sm"]};
    border-bottom-left-radius: ${Radius["sm"]};
    /* Enables vertical scrolling */
    overflow-y: auto;
    /* Set a max height for the dropdown list */
    max-height: var(${tokens.navItemList.viewportHeight});
`;

export const NavItemLabel = styled.div`
    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};

    &.navItemLabelSelected {
        color: ${Colour["text-selected"]};
    }
`;

export const StyledTickIcon = styled(TickIcon)`
    color: ${Colour["icon-selected"]};
    margin: 0 ${Spacing["spacing-8"]};
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

export const NavWrapper = styled.nav`
    ${tokens.navWrapper.stickyOffset}: initial;
    ${tokens.navWrapper.sideMargin}: initial;
    display: block;
    position: sticky;
    top: var(${tokens.navWrapper.stickyOffset});
    width: 100%;
    z-index: 10;

    &.navWrapperStickied {
        ${NavSelect} {
            margin: 0 calc(-1 * var(${tokens.navWrapper.sideMargin}, 0px));
            padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
            border-radius: ${Radius["none"]};
        }

        ${NavItemList} {
            margin-left: calc(-1 * var(${tokens.navWrapper.sideMargin}, 0px));
            margin-right: calc(-1 * var(${tokens.navWrapper.sideMargin}, 0px));
            border-radius-bottom-left: ${Radius.sm};
            border-radius-bottom-right: ${Radius.sm};
        }
    }
`;
