import { MenuIcon } from "@lifesg/react-icons/menu";
import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, MediaQuery, Motion, Shadow } from "../theme";
import { ThemeNavbar } from "../theme/components/theme-helper";

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
    background-color: ${ThemeNavbar["navbar-colour-bg"]};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    ${(props) => {
        return props.theme?.colourMode === "dark"
            ? css`
                  border-bottom: ${Border["width-010"]} ${Border["solid"]}
                      ${Colour["border"]};
              `
            : css`
                  box-shadow: ${Shadow["xs-subtle"]};
              `;
    }}
`;

export const Nav = styled.nav<StyleProps>`
    height: ${(props) => {
        const baseHeight = props.$compress
            ? ThemeNavbar["navbar-compressed-height"](props)
            : ThemeNavbar["navbar-full-height"](props);
        return props.theme?.colourMode === "dark"
            ? `calc(${baseHeight} - 1px)`
            : `${baseHeight}`;
    }};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Motion["duration-350"]} ${Motion["ease-standard"]};

    ${MediaQuery.MaxWidth.lg} {
        height: ${(props) =>
            props.theme?.colourMode === "dark"
                ? `calc(${ThemeNavbar["navbar-mobile-height"](props)} - 1px)`
                : `${ThemeNavbar["navbar-mobile-height"](props)}`};
    }
`;

export const NavElementsContainer = styled.div<StyleProps>`
    display: flex;
    height: 100%;
    margin-left: ${(props) => (props.$hideNavBranding ? "0" : "5rem")};
    flex: 1;
    justify-content: flex-end;

    ${MediaQuery.MaxWidth.lg} {
        margin-left: 0rem;
    }
`;

export const MobileMenuButton = styled(ClickableIcon)`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`;

export const MobileMenuIcon = styled(MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${ThemeNavbar["navbar-colour-icon"]};
`;

export const NavBrandContainer = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${(props) =>
        props.$compress
            ? ThemeNavbar["navbar-compressed-logo-height"]
            : ThemeNavbar["navbar-full-logo-height"]};

    ${MediaQuery.MaxWidth.lg} {
        height: ${ThemeNavbar["navbar-mobile-logo-height"]};
    }

    ${MediaQuery.MaxWidth.xxs} {
        height: 1.25rem;
    }
`;

export const NavSeparator = styled.div<StyleProps>`
    display: flex;
    background-color: ${Colour.border};
    height: 100%;
    width: 2px;
    margin: 0 ${(props) => (props.$compress ? 1 : 1.5)}rem;

    ${MediaQuery.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`;
