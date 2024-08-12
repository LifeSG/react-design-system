import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import styled from "styled-components";
import { V2_Color } from "../v2_color";
import { V2_MediaQuery } from "../v2_media";
import { ClickableIcon } from "../shared/clickable-icon";
import { V2_Text } from "../v2_text";

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

    ${V2_MediaQuery.MaxWidth.tablet} {
        display: none;
    }
`;

export const MobileWrapper = styled.ul`
    display: none;
    list-style: none;

    ${V2_MediaQuery.MaxWidth.tablet} {
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

    ${V2_MediaQuery.MaxWidth.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`;

export const Link = styled(V2_Text.Hyperlink.Small)<StyleProps>`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${V2_Color.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${V2_Color.Neutral[1]};
    }

    ${V2_MediaQuery.MaxWidth.tablet} {
        color: ${V2_Color.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${V2_Color.Neutral[1]};
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
    background-color: ${V2_Color.Primary};

    ${V2_MediaQuery.MaxWidth.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${V2_Color.Primary};
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
    color: ${V2_Color.Neutral[3]};
    :hover {
        color: ${V2_Color.Neutral[1]};
    }
`;
