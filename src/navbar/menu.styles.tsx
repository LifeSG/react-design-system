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
    display: flex;
    position: relative;
    align-items: left;
    text-align: left;
    color: ${Color.Neutral[1]};
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;

    /* identical to box height, or 186% */
    letter-spacing: 0.12px;

    :active,
    :focus {
        color: ${Color.Neutral[1]};
    }

    ${MediaQuery.MaxWidth.tablet} {
        ${(props) => {
            return TextStyleHelper.getTextStyle(
                "H4",
                props.$selected ? "bold" : "regular"
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

export const MenuBar = styled.ul`
    width: 100%;
    overflow: auto;
    display: table;
    margin-top: 0rem;
    left: 0;
    top: 102%;

    /* N8 #FFFFFF */
    position: absolute;

    /* N8 #FFFFFF */
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(75, 83, 159, 0.24);
    border-radius: 0px 0px 8px 8px;
`;
// =============================================================================
// LINK ITEMS
// =============================================================================
export const MenuItem = styled.li`
    width: 100%;
    height: 22px;
    position: relative;
    display: table-row;
    align-items: left;
    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        margin-top: 1rem;
        margin-bottom: 1rem;
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
