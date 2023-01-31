import { MenuIcon } from "@lifesg/react-icons/menu";
import styled from "styled-components";
import { Color } from "../color";
import { IconButton } from "../icon-button";
import { MediaQuery } from "../media";
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
    compress?: boolean;
    fixed?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div<StyleProps>`
    position: ${(props) => (props.fixed ? "fixed" : "relative")};
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
        props.compress ? NAVBAR_HEIGHT.compress : NAVBAR_HEIGHT.notCompress}rem;
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
`;

export const MobileMenuButton = styled(IconButton)`
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
    position: relative;
`;
export const NavElementsRightContainer = styled.div`
    display: flex;
    height: 100%;
    margin-left: 64px;
    position: relative;

    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 0px;
    }
`;
export const NavElementsLeftContainer = styled.div`
    display: flex;
    height: 100%;
    margin-left: 80px;

    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 0px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        margin-left: 0px;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        margin-left: 0px;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        margin-left: 0px;
    }
`;
export const NavLogoContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
export const NavSeprator = styled.div`
    display: flex;
    background-color: ${Color.Neutral[5]};
    height: 2.8125rem;
    width: 0.05rem;
    left: 13.435625rem;
    margin-right: 1.504375rem;

    ${MediaQuery.MaxWidth.tablet} {
        height: 24px;
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        height: 24px;
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        height: 24px;
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        height: 24px;
        margin-right: 1rem;
    }
`;

export const NavElementsMobileContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;

    ${MediaQuery.MaxWidth.tablet} {
        display: grid;
    }
`;
