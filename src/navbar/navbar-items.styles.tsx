import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import styled from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { ClickableIcon } from "../shared/clickable-icon";
import { Text } from "../text";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected: boolean;
}

interface ItemStyleProps {
    $alignLeft: boolean;
}

// =============================================================================
// WRAPPER
// =============================================================================

export const Wrapper = styled.ul<ItemStyleProps>`
    display: flex;
    list-style: none;
    position: relative;

    ${(props) => props.$alignLeft && "margin-right: auto;"}

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
        margin-left: ${(props) => (props.$alignLeft ? "-0.5rem" : "0")};
    }

    ${MediaQuery.MaxWidth.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
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
        color: ${Color.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Color.Neutral[1]};
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
    color: ${Color.Neutral[3]};
    :hover {
        color: ${Color.Neutral[1]};
    }
`;
