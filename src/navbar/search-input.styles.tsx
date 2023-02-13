import styled from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text, TextStyleHelper } from "../text";
import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { IconButton } from "../icon-button/icon-button";
import { Form } from "../form";

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

export const MobileWrapper = styled.div`
    display: none;
    list-style: none;
    margin-top: 18px;
    width: 100% !important;

    ${MediaQuery.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        display: flex;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        display: flex;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        display: flex;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        display: flex;
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
    font-style: normal;
    font-weight: 400;
    font-size: 14px !important;
    line-height: 26px;

    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    height: 100%;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    /* identical to box height, or 186% */
    letter-spacing: 0.12px;

    :active,
    :focus {
        color: ${Color.Neutral[1]};
    }

    ${MediaQuery.MaxWidth.tablet} {
        font-weight: normal !important;
        width: 100%;
        height: 100%;
        padding: 0.625rem 1rem;
        text-align: left;
        align-items: flex-start;
        font-size: 14px !important;
        line-height: 1rem !important;
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

export const DropDownBar = styled.ul`
    width: 100%;
    overflow: auto;
    display: grid;
    margin-top: 0rem;
    left: 0;
    top: 95%;

    /* N8 #FFFFFF */
    position: absolute;

    /* N8 #FFFFFF */
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(75, 83, 159, 0.24);
    border-radius: 0px 0px 8px 8px;

    ${MediaQuery.MaxWidth.tablet} {
        top: 102%;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        top: 102%;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        top: 102%;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        top: 102%;
    }
`;

export const SearchBarDesktop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${MediaQuery.MaxWidth.tablet} {
        display: none;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        display: none;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        display: none;
    }
`;
// =============================================================================
// LINK ITEMS
// =============================================================================
export const MenuItem = styled.li`
    width: 100%;
    min-height: 26px;
    max-height: 52px;
    position: relative;
    display: flex;
    align-items: left;
    margin-top: 8px;
    margin-bottom: 8px;

    :first-child {
        margin-top: 16px !important;
        margin-bottom: 8px !important;
    }

    :last-child {
        margin-top: 8px !important;
        margin-bottom: 16px !important;
    }
    :not(:firt-of-type) {
        margin-top: 8px !important;
        margin-bottom: 8px !important;
    }

    ${MediaQuery.MaxWidth.tablet} {
        max-height: 44px;
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

export const SearchBarContainer = styled.div`
    display: flex;
    position: relative;
    justify-items: center;
    width: 100%;

    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 0px;
    }
`;

export const SearchBarInputContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    position: relative;
`;
export const SearchInputContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

export const CloseIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    padding: 16px !important;

    ${MediaQuery.MaxWidth.tablet} {
        display: none;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        display: none;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        display: none;
    }
`;

export const SearchIcon = styled(MagnifierIcon)`
    height: 17.59px !important;
    width: 17.59px !important;
    color: #686868 !important;
`;

export const CrossIconClose = styled(CrossIcon)`
    height: 1.5rem !important;
    width: 1.5rem !important;
    color: #686868 !important;
`;

export const SearchInputIcon = styled(MagnifierIcon)`
    color: #686868 !important;
`;

export const SearchMainBarContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;

    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 0px;
    }
`;

export const SearchSpan = styled.span`
    display: contents;
`;

export const CloseIconButton = styled(IconButton)`
    padding: 0px !important;
`;

export const Input = styled(Form.InputGroup)`
    width: 100% !important;
`;
