import { MenuIcon } from "@lifesg/react-icons/menu";
import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, MediaQuery, Motion, Shadow } from "../theme";

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
    background-color: ${Colour.bg};
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
            ? NAVBAR_HEIGHT.compress
            : NAVBAR_HEIGHT.notCompress;
        return props.theme?.colourMode === "dark"
            ? `calc(${baseHeight}rem - 1px)`
            : `${baseHeight}rem`;
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
                ? `calc(${NAVBAR_MOBILE_HEIGHT}rem - 1px)`
                : `${NAVBAR_MOBILE_HEIGHT}rem`};
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
    color: ${Colour.icon};
`;

export const NavBrandContainer = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${(props) => (props.$compress ? 1.5 : 2)}rem;

    ${MediaQuery.MaxWidth.lg} {
        height: 1.5rem;
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
