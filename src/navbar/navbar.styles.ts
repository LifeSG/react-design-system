import { css } from "@linaria/core";

import {
    Border,
    Colour,
    ComponentToken,
    MediaQuery,
    Motion,
    Shadow,
} from "../theme";

export const wrapper = css`
    background-color: ${ComponentToken.Navbar["colour-bg"]};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
`;

export const wrapperFixed = css`
    position: sticky;
`;

export const wrapperRelative = css`
    position: relative;
`;

export const wrapperDark = css`
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const wrapperLight = css`
    box-shadow: ${Shadow["xs-subtle"]};
`;

export const nav = css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Motion["duration-350"]} ${Motion["ease-standard"]};
`;

export const navCompressed = css`
    height: ${ComponentToken.Navbar["compressed-height"]};
`;

export const navFull = css`
    height: ${ComponentToken.Navbar["full-height"]};
`;

export const navDarkCompressed = css`
    height: calc(${ComponentToken.Navbar["compressed-height"]} - 1px);
`;

export const navDarkFull = css`
    height: calc(${ComponentToken.Navbar["full-height"]} - 1px);
`;

export const navResponsive = css`
    ${MediaQuery.MaxWidth.lg} {
        height: ${ComponentToken.Navbar["mobile-height"]};
    }
`;
export const navDarkResponsive = css`
    ${MediaQuery.MaxWidth.lg} {
        height: calc(${ComponentToken.Navbar["mobile-height"]} - 1px);
    }
`;

export const navElementsContainer = css`
    display: flex;
    height: 100%;
    flex: 1;
    justify-content: flex-end;
    ${MediaQuery.MaxWidth.lg} {
        margin-left: 0rem;
    }
`;

export const navElementsContainerWithBranding = css`
    ${MediaQuery.MinWidth.xl} {
        margin-left: 5rem;
    }
`;

export const navElementsContainerWithoutBranding = css`
    ${MediaQuery.MinWidth.xl} {
        margin-left: 0;
    }
`;

export const mobileMenuButton = css`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`;

export const mobileMenuIcon = css`
    height: 1.5rem;
    width: 1.5rem;
    color: ${ComponentToken.Navbar["colour-icon"]};
`;

export const navBrandContainer = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;
`;

export const navBrandContainerCompressed = css`
    height: ${ComponentToken.Navbar["compressed-logo-height"]};
`;

export const navBrandContainerFull = css`
    height: ${ComponentToken.Navbar["full-logo-height"]};
`;

export const navBrandContainerResponsive = css`
    ${MediaQuery.MaxWidth.lg} {
        height: ${ComponentToken.Navbar["mobile-logo-height"]};
    }

    ${MediaQuery.MaxWidth.xxs} {
        height: 1.25rem;
    }
`;

export const navSeparator = css`
    display: flex;
    background-color: ${Colour.border};
    height: 100%;
    width: 2px;
`;

export const navSeparatorCompressed = css`
    margin: 0 1rem;
`;

export const navSeparatorFull = css`
    margin: 0 1.5rem;
`;

export const navSeparatorResponsive = css`
    ${MediaQuery.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`;
