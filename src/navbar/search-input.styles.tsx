import styled from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text, TextStyleHelper } from "../text";
import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { IconButton } from "../icon-button/icon-button";
import { Form } from "../form";
import { DesignToken } from "../design-token";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ListContainerProps {
    width?: string;
    focusing?: false;
    $dropdown?: number;
}
// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const BORDER_RADIUS = "4px";

const BORDER_COLOR = "#57A9FF";
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
        padding: 0rem 16px;
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
    width: calc(100% + 2px);
    overflow: auto;
    display: grid;
    margin-top: 0rem;
    left: -1px;
    top: 99% !important;
    margin-left: -1 !important;
    position: absolute;
    max-height: 20rem;
    overflow-y: hidden;

    /* N8 #FFFFFF */
    background: ${Color.Neutral[8]};
    border-radius: 0px 0px 8px 8px;

    box-shadow: inset 0 -5px 5px -5px #57a9ff, inset 5px 0 5px -5px #57a9ff,
        inset -5px 0 5px -5px #57a9ff;

    border-right: 1px solid #57a9ff;
    border-left: 1px solid #57a9ff;
    border-bottom: 1px solid #57a9ff;

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

        :last-child {
            margin-top: 8px !important;
            margin-bottom: 8px !important;
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

export const SearchBarContainer = styled.div<ListContainerProps>`
    display: flex;
    position: relative;
    justify-items: center;
    width: 100%;

    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 0px;
    }
    ${(props) => {
        if (props.$dropdown === 0) {
            return `
            border: 1px solid #E0E4E5;
            border-radius: 4px; 
    `;
        } else if (props.$dropdown === 1) {
            return `
            border: 1px solid  #57A9FF;
            border-radius: 8px 8px 8px 8px;
            box-shadow: inset 0 0 6px 1px rgb(87 169 255 / 50%);
    `;
        } else if (props.$dropdown === 2) {
            return `
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
            border-right: 1px solid #57A9FF;
            border-left: 1px solid #57A9FF;
            border-top: 1px solid #57A9FF;
            border-bottom: 0px;
            box-shadow: inset 0px 1px 1px 1px rgb(87 169 255 / 50%);
    `;
        } else {
            return `
            border: 1px solid gray;
            border-radius: 8px 8px 8px 8px;
    `;
        }
    }}

    background: transparent;
    max-height: 20rem;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Color.Neutral[4]};
        border-right: 5px solid ${Color.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        max-height: 15rem;
    }
`;

export const SearchBarInputContainer = styled.div`
    display: grid;
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
    height: 1.5rem !important;
    width: 1.5rem !important;
    color: ${Color.Neutral[3]} !important;
    margin-right: 16px;
    :hover {
        color: ${Color.Primary} !important;
    }

    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 0px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        margin-left: 0px;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        margin-right: 16px;
        margin-left: 0px;
    }
    ${MediaQuery.MaxWidth.mobileS} {
        margin-right: 0px;
        margin-left: 10px;
    }
`;

export const CrossIconClose = styled(CrossIcon)`
    height: 1.5rem !important;
    width: 1.5rem !important;
    color: ${Color.Neutral[3]} !important;

    :hover {
        color: ${Color.Primary} !important;
    }
`;

export const SearchInputIcon = styled(MagnifierIcon)`
    color: ${Color.Neutral[3]} !important;
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
    border: none !important;
    background: transparent !important;
`;

export const Divider = styled.div`
    height: 1px;
    background: ${Color.Neutral[5]};
    margin: 0 0.5rem;
    width: 98% !important;
    margin-left: 1%;

    ${MediaQuery.MaxWidth.tablet} {
        width: 116% !important;
        margin-left: -8%;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        width: 120% !important;
        margin-left: -10%;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        width: 116% !important;
        margin-left: -8%;
    }
    ${MediaQuery.MaxWidth.mobileS} {
        width: 98% !important;
        margin-left: 1%;
    }
`;

export const Container = styled.div`
    display: flex;
    margin-left: -27px;
    align-items: center;

    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 0px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        margin-left: 0px;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        margin-left: 0px;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        margin-left: 0px;
    }
`;

export const SearchInputComponent = styled.input`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    height: 3rem;
    border: none;
    background: transparent;
    flex: 1;
    padding: 0 0.5rem 0 0;
    margin-left: 45px;

    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 3px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        margin-left: 0px;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        margin-left: 0px;
        padding-left: 2px;
    }

    :focus,
    :active {
        outline: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Color.Neutral[3]};
    }
`;

export const CancelButton = styled(IconButton)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Color.Neutral[3]};
    cursor: pointer;
`;

export const CancelIcon = styled(CrossIcon)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Color.Neutral[3]};
`;

export const DividerInput = styled.div`
    height: 98% !important;
    background: ${Color.Neutral[5]};
    margin: 0.5 0rem;
    width: 1px !important;
    margin-top: 1%;
    margin-bottom: 1%;

    ${MediaQuery.MaxWidth.tablet} {
        height: 98% !important;
        margin: 0.5 0rem;
        width: 1px !important;
        margin-top: 1%;
        margin-bottom: 1%;
    }
`;
