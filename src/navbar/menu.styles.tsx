import styled from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text, TextStyleHelper } from "../text";

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
    ${TextStyleHelper.getTextStyle("H6", 400)}
    display: flex;
    position: relative;
    align-items: left;
    text-align: left;
    color: ${Color.Neutral[1]};

    font-size: 0.875rem;
    line-height: 1.25rem;

    margin-right: 1rem;
    padding-right: 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

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
        ${TextStyleHelper.getTextStyle("H6", "bold")}
        width: 100%;
        padding: 0.625rem 1rem;
        text-align: left;
        align-items: flex-start;
        line-height: 1.125rem !important;
        overflow: hidden;
        display: -webkit-box;
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
    margin-top: 0rem;
    left: 0;
    top: 102%;
    min-width: 15.62rem;
    /* N8 #FFFFFF */
    position: absolute;
    overflow-x: hidden;

    /* N8 #FFFFFF */
    background: #ffffff;
    box-shadow: 0rem 0.125rem 0.5rem rgba(75, 83, 159, 0.24);
    border-radius: 0rem 0rem 0.5rem 0.5rem;
`;
// =============================================================================
// LINK ITEMS
// =============================================================================
export const MenuItem = styled.li`
    width: 100%;
    min-height: 1.7rem;
    max-height: 3rem !important;
    position: relative;
    display: flex;
    align-items: left;
    margin-left: 1rem;
    margin-right: 1rem;

    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    :first-child {
        margin-top: 1rem;
    }

    :last-child {
        margin-bottom: 1rem;
    }
    :not(:firt-of-type) {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        margin-top: 1rem;
        margin-bottom: 0rem;
        margin-left: 0.25rem;
        max-height: 3rem !important;

        :first-child {
            margin-top: 0.25rem;
        }

        :last-child {
            margin-bottom: 0rem;
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
