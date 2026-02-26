import { MenuIcon } from "@lifesg/react-icons/menu";
import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import {
    V3_Border,
    V3_Colour,
    V3_MediaQuery,
    V3_Motion,
    V3_Shadow,
} from "../v3_theme";
import { V3_ThemeNavbar } from "../v3_theme/components/theme-helper";

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
    background-color: ${V3_ThemeNavbar["navbar-colour-bg"]};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    ${(props) => {
        return props.theme?.colourMode === "dark"
            ? css`
                  border-bottom: ${V3_Border["width-010"]} ${V3_Border["solid"]}
                      ${V3_Colour["border"]};
              `
            : css`
                  box-shadow: ${V3_Shadow["xs-subtle"]};
              `;
    }}
`;

export const Nav = styled.nav<StyleProps>`
    height: ${(props) => {
        const baseHeight = props.$compress
            ? V3_ThemeNavbar["navbar-compressed-height"](props)
            : V3_ThemeNavbar["navbar-full-height"](props);
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
    transition: ${V3_Motion["duration-350"]} ${V3_Motion["ease-standard"]};

    ${V3_MediaQuery.MaxWidth.lg} {
        height: ${(props) =>
            props.theme?.colourMode === "dark"
                ? `calc(${V3_ThemeNavbar["navbar-mobile-height"](props)} - 1px)`
                : `${V3_ThemeNavbar["navbar-mobile-height"](props)}`};
    }
`;

export const NavElementsContainer = styled.div<StyleProps>`
    display: flex;
    height: 100%;
    margin-left: ${(props) => (props.$hideNavBranding ? "0" : "5rem")};
    flex: 1;
    justify-content: flex-end;

    ${V3_MediaQuery.MaxWidth.lg} {
        margin-left: 0rem;
    }
`;

export const MobileMenuButton = styled(ClickableIcon)`
    display: none;

    ${V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`;

export const MobileMenuIcon = styled(MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${V3_ThemeNavbar["navbar-colour-icon"]};
`;

export const NavBrandContainer = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${(props) =>
        props.$compress
            ? V3_ThemeNavbar["navbar-compressed-logo-height"]
            : V3_ThemeNavbar["navbar-full-logo-height"]};

    ${V3_MediaQuery.MaxWidth.lg} {
        height: ${V3_ThemeNavbar["navbar-mobile-logo-height"]};
    }

    ${V3_MediaQuery.MaxWidth.xxs} {
        height: 1.25rem;
    }
`;

export const NavSeparator = styled.div<StyleProps>`
    display: flex;
    background-color: ${V3_Colour.border};
    height: 100%;
    width: 2px;
    margin: 0 ${(props) => (props.$compress ? 1 : 1.5)}rem;

    ${V3_MediaQuery.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`;
