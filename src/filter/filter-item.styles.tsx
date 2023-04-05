import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { animated } from "react-spring";
import styled from "styled-components";
import { Button } from "../button/button";
import { Color } from "../color/color";
import { IconButton } from "../icon-button/icon-button";
import { MediaQuery } from "../media/media";
import { Text, TextStyleHelper } from "../text";

// =============================================================================
// STYLES INTERFACE
// =============================================================================
interface StyleProps {
    $collapsible?: boolean;
    $expanded?: boolean;
}

interface DividerStyleProps {
    $showDivider: boolean;
    $showMobileDivider: boolean;
}

// =============================================================================
// FILTER ITEM STYLES
// =============================================================================

export const FilterItemWrapper = styled.div<StyleProps>`
    background-color: ${(props) =>
        props.$collapsible ? Color.Neutral[7](props) : Color.Neutral[8](props)};

    ${MediaQuery.MaxWidth.mobileL} {
        background-color: ${Color.Neutral[7]};
    }
`;

export const Divider = styled.div<DividerStyleProps>`
    display: ${(props) => (props.$showDivider ? "block" : "none")};
    height: 1px;
    background-color: ${Color.Neutral[5]};

    ${MediaQuery.MaxWidth.mobileL} {
        display: ${(props) => (props.$showMobileDivider ? "block" : "none")};
        margin: 0 1rem;
    }
`;

// -----------------------------------------------------------------------------
// HEADER STYLES
// -----------------------------------------------------------------------------

export const FilterItemHeader = styled.div`
    display: flex;
    align-items: center;

    background-color: ${Color.Neutral[8]};

    ${MediaQuery.MaxWidth.mobileL} {
        background-color: transparent;
    }
`;

export const FilterItemExpandButton = styled(IconButton)`
    margin: 0 0 0 auto;
`;

export const ChevronIcon = styled(ChevronDownIcon)<StyleProps>`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Color.Neutral[3]};

    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${Color.Neutral[2]};
    }
`;

export const FilterItemTitle = styled(Text.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${MediaQuery.MaxWidth.mobileL} {
        ${TextStyleHelper.getTextStyle("H5", "semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`;

// -----------------------------------------------------------------------------
// CONTENT STYLES
// -----------------------------------------------------------------------------

export const ExpandableItem = styled(animated.div)`
    overflow: hidden;
`;

export const FilterItemBody = styled.div`
    padding: 1rem 1.25rem;

    ${MediaQuery.MaxWidth.mobileL} {
        padding: 1.5rem 1.25rem;
    }
`;

export const MinimisableContent = styled(animated.div)<{
    $height?: number;
    $minimisable: boolean;
}>`
    ${(props) => props.$minimisable && "overflow: hidden;"}
    ${(props) => props.$height && `height: ${props.$height}px;`}
`;

export const FilterItemMinimiseButton = styled(Button.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;

    ${MediaQuery.MaxWidth.mobileL} {
        span {
            ${TextStyleHelper.getTextStyle("H6", "semibold")}
        }
    }
`;
