import { MenuIcon } from "@lifesg/react-icons/menu";
import styled from "styled-components";
import { V2_Color } from "../v2_color";
import { v2_MediaQuery } from "../v2_media";
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
    $hideNavBranding?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div<StyleProps>`
    position: ${(props) => (props.$fixed ? "sticky" : "relative")};
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

    ${v2_MediaQuery.MaxWidth.tablet} {
        height: ${NAVBAR_MOBILE_HEIGHT}rem;
    }
`;

export const NavElementsContainer = styled.div<StyleProps>`
    display: flex;
    height: 100%;
    margin-left: ${(props) => (props.$hideNavBranding ? "0" : "5rem")};
    flex: 1;
    justify-content: flex-end;

    ${v2_MediaQuery.MaxWidth.tablet} {
        margin-left: 0rem;
    }
`;

export const MobileMenuButton = styled(ClickableIcon)`
    display: none;

    ${v2_MediaQuery.MaxWidth.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`;

export const MobileMenuIcon = styled(MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${V2_Color.Neutral[1]};
`;

export const NavBrandContainer = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${(props) => (props.$compress ? 1.5 : 2)}rem;

    ${v2_MediaQuery.MaxWidth.tablet} {
        height: 1.5rem;
    }

    ${v2_MediaQuery.MaxWidth.mobileS} {
        height: 1.25rem;
    }
`;

export const NavSeparator = styled.div<StyleProps>`
    display: flex;
    background-color: ${V2_Color.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${(props) => (props.$compress ? 1 : 1.5)}rem;

    ${v2_MediaQuery.MaxWidth.tablet} {
        margin: 0 1rem;
    }

    ${v2_MediaQuery.MaxWidth.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`;
