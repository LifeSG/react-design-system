import styled from "styled-components";
import { IconButton } from "../button/icon-button";
import { MediaQuery, Transition } from "../styles/spec";
import { Color } from "../styles/theme";
import { TextStyleHelper } from "../text/helper";
import { Text } from "../text/text";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    compress?: boolean;
    fixed?: boolean;
}

interface ILinkProps {
    selected: boolean;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Transition.Base};

    ${MediaQuery.MaxWidth.tablet} {
        height: 3.5rem;
    }
`;

export const NavItemsWrapper = styled.ul`
    display: flex;
    list-style: none;
    height: 100%;

    ${MediaQuery.MaxWidth.tablet} {
        display: none;
    }
`;

export const MobileMenuButton = styled(IconButton)`
    display: none;

    ${MediaQuery.MaxWidth.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
        background: transparent;
        outline-style: none;
        height: 100%;

        span {
            font-size: 1.5rem;
            color: ${Color.Neutral[1]};
        }

        :active,
        :focus {
            background: transparent;
        }
    }

    ${MediaQuery.MaxWidth.mobileS} {
        span {
            font-size: 1.25rem;
        }
    }
`;

export const NavLinkItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-child) {
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        width: 100%;

        :not(:last-child) {
            margin-right: 0;
        }
    }
`;

export const NavButtonLinkItem = styled(NavLinkItem)`
    margin-left: 1rem;
    ${MediaQuery.MaxWidth.tablet} {
        display: none;
    }
`;

export const Link = styled(Text.Hyperlink.Small)<ILinkProps>`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Color.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Color.Neutral[1]};
    }

    ${MediaQuery.MaxWidth.tablet} {
        ${(props) => {
            return TextStyleHelper.getTextStyle(
                "H4",
                props.selected ? "bold" : "regular"
            );
        }}
        width: 100%;
        padding: 0.625rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`;

export const LinkIndicator = styled.div`
    position: absolute;
    bottom: 0;
    height: 4px;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Color.Primary};

    ${MediaQuery.MaxWidth.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 4px;
        background-color: ${Color.Accent.Light[1]};
    }
`;

// =============================================================================
// CONSTANTS
// =============================================================================
export const NAVBAR_HEIGHT = {
    notCompress: 6,
    compress: 4,
};
