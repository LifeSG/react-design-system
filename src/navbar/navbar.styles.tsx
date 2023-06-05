import { MenuIcon } from "@lifesg/react-icons/menu";
import styled from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { ClickableIcon } from "../shared/clickable-icon";
import { Transition } from "../transition";

// =============================================================================
// CONSTANTS
// =============================================================================
export const NAVBAR_HEIGHT = {
    notCompress: 6,
    compress: 4,
};

export const NAVBAR_MOBILE_HEIGHT = 3.5;

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $compress?: boolean;
    $fixed?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div<StyleProps>`
    position: ${(props) => (props.$fixed ? "fixed" : "relative")};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav<StyleProps>`
    height: ${(props) =>
        props.$compress
            ? NAVBAR_HEIGHT.compress
            : NAVBAR_HEIGHT.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Transition.Base};

    ${MediaQuery.MaxWidth.tablet} {
        height: ${NAVBAR_MOBILE_HEIGHT}rem;
    }
`;

export const NavElementsContainer = styled.div`
    display: flex;
    height: 100%;
    margin-left: 5rem;
    flex: 1;
    justify-content: flex-end;
    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 0rem;
    }
`;

export const MobileMenuButton = styled(ClickableIcon)`
    display: none;

    ${MediaQuery.MaxWidth.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`;

export const MobileMenuIcon = styled(MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Color.Neutral[1]};
`;

export const NavBrandContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;
`;

export const NavSeparator = styled.div<StyleProps>`
    display: flex;
    background-color: ${Color.Neutral[5]};
    height: ${(props) => (props.$compress ? 2 : 2.5)}rem;
    width: 1px;
    margin: 0 ${(props) => (props.$compress ? 1.125 : 1.5)}rem;

    ${MediaQuery.MaxWidth.tablet} {
        height: 1.5rem;
        margin: 0 1rem;
    }
`;
