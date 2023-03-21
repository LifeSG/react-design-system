import styled from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text, TextStyleHelper } from "../text";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
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
    max-height: 20rem;

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
        overflow-y: hidden;
        overflow-x: hidden;
    }
`;

// =============================================================================
// LINK ITEMS
// =============================================================================
export const LinkItem = styled.li`
    display: flex;
    width: 100%;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const Link = styled(Text.Hyperlink.Small)<StyleProps>`
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
                props.$selected ? "bold" : "regular"
            );
        }}
        color: ${Color.Neutral[1]};
        width: 100%;
        padding: 0.625rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Color.Neutral[1]} !important;
        }
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
        background-color: ${Color.Primary};
    }
`;

export const Menu = styled.div`
    width: 100%;
    height: 10rem;
    margin-top: 0rem;
    left: 0;
    top: 102%;

    position: absolute;

    background: ${Color.Neutral[8]};
    box-shadow: ${DesignToken.ElevationBoxShadow};
    border-radius: 0rem 0rem 0.5rem 0.5rem;
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

export const MenuItemRightContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    float: right;

    ${MediaQuery.MaxWidth.tablet} {
        display: flex;
        align-items: center;
        display: flex;
        float: right;
        justify-content: end;
        align-items: center;
        padding-right: 1rem;
    }
`;

export const DownIcon = styled(ChevronDownIcon)`
    height: 1.25rem;
    width: 1.25rem;

    :hover {
        color: ${Color.Accent.Light[1]};
    }
`;

export const UpIcon = styled(ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;

    :hover {
        color: ${Color.Accent.Light[1]};
    }
`;
