import styled from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text, TextStyleHelper } from "../text";
import { DesignToken } from "src/design-token";
// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected: boolean;
}

// =============================================================================
// WRAPPER
// =============================================================================

export const Wrapper = styled.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${MediaQuery.MaxWidth.tablet} {
        display: none;
    }
`;

export const MobileWrapper = styled.ul`
    display: none;
    list-style: none;

    ${MediaQuery.MaxWidth.tablet} {
        border-left: 0.25rem solid ${Color.Primary};
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
    }
`;

// =============================================================================
// LINK ITEMS
// =============================================================================
export const LinkItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        width: 100%;

        :not(:last-of-type) {
            margin-right: 0;
        }
    }
`;

export const Link = styled(Text.Hyperlink.Small)<StyleProps>`
    ${TextStyleHelper.getTextStyle("H6", 400)};
    width: 100%;
    display: flex;
    position: relative;
    align-items: left;
    text-align: left;
    color: ${Color.Neutral[1]};

    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1px;
    padding-bottom: 1px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* start showing ellipsis when 2rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */

    /* identical to box height, or 186% */
    letter-spacing: 0.0075rem;

    :active,
    :focus {
        color: ${Color.Primary} !important;
    }
    :hover {
        color: ${Color.Accent.Light[1]};
    }

    ${MediaQuery.MaxWidth.tablet} {
        ${TextStyleHelper.getTextStyle("H5", "bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1rem;
        line-height: 1.125rem !important;
    }
`;

export const LinkIndicator = styled.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Color.Primary};

    ${MediaQuery.MaxWidth.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Color.Accent.Light[1]};
    }
`;

export const MenuBar = styled.ul`
    width: 100%;
    overflow: auto;
    display: grid;
    margin-top: 0;
    left: 0;
    top: 102%;
    min-width: 15.625rem;
    position: absolute;
    overflow-x: hidden;

    background: ${Color.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${DesignToken.ElevationBoxShadow};
`;
// =============================================================================
// LINK ITEMS
// =============================================================================
export const MenuItem = styled.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: left;
    margin-left: 0;
    margin-right: 0;

    :first-child {
        padding-top: 1rem;
        padding-bottom: 0.5rem;
    }

    :not(:first-of-type) {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    :last-child {
        padding-top: 0.5rem;
        padding-bottom: 1rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 0;

        :first-child {
            padding-top: 1rem;
            padding-bottom: 0;
        }

        :not(:first-of-type) {
            padding-top: 1.25rem;
            padding-bottom: 0;
        }

        :last-child {
            padding-top: 1.25rem;
            padding-bottom: 0;
        }
    }
`;

export const LinkWrapper = styled.ul`
    display: flex;
    list-style: none;
    position: relative;
    width: 100%;

    ${MediaQuery.MaxWidth.tablet} {
        display: none;
    }
`;
export const MenuTopSpace = styled.div`
    width: 100%;
    height: 0.5rem;
`;
