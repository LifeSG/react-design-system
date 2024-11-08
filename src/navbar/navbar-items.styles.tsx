import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import styled from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { MediaQuery } from "../theme";
import { Colour } from "../theme";
import { Typography } from "../typography/typography";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected: boolean;
}

interface WrapperStyleProps {
    $alignLeft: boolean;
}

interface ItemStyleProps {
    $hiddenBranding: boolean;
}

// =============================================================================
// WRAPPER
// =============================================================================

export const Wrapper = styled.ul<WrapperStyleProps>`
    display: flex;
    list-style: none;
    position: relative;

    ${(props) => props.$alignLeft && "margin-right: auto;"}

    ${MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

export const MobileWrapper = styled.ul`
    display: none;
    list-style: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`;

// =============================================================================
// LINK ITEMS
// =============================================================================
export const LinkItem = styled.li<ItemStyleProps>`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${(props) => (props.$hiddenBranding ? "-0.5rem" : "0")};
    }

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`;

export const Link = styled(Typography.LinkSM)<StyleProps>`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Colour.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :hover :focus {
        color: ${Colour["text-selected-hover"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        color: ${Colour.text};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Colour["text-selected-hover"]};
        }
    }
`;

export const LinkLabel = styled.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`;

export const LinkIndicator = styled.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Colour["border-selected"]};

    ${MediaQuery.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Colour["border-selected"]};
    }
`;

export const LinkIconContainer = styled.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`;

export const ExpandCollapseButton = styled(ClickableIcon)<StyleProps>`
    padding: 0.5rem;
    transform: rotate(${(props) => (props.$selected ? 0 : 180)}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`;

export const ChevronIcon = styled(ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Colour.icon};
    :hover {
        color: ${Colour["icon-selected-hover"]};
    }
`;
