import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { animated } from "react-spring";
import styled from "styled-components";
import { Button } from "../button/button";
import { V2_Color } from "../v2_color/color";
import { V2_MediaQuery } from "../v2_media/media";
import { ClickableIcon } from "../shared/clickable-icon";
import { V2_Text, V2_TextStyleHelper } from "../v2_text";

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
        props.$collapsible
            ? V2_Color.Neutral[7](props)
            : V2_Color.Neutral[8](props)};

    ${V2_MediaQuery.MaxWidth.tablet} {
        background-color: ${V2_Color.Neutral[7]};
    }
`;

export const Divider = styled.div<DividerStyleProps>`
    display: ${(props) => (props.$showDivider ? "block" : "none")};
    height: 1px;
    background-color: ${V2_Color.Neutral[5]};

    ${V2_MediaQuery.MaxWidth.tablet} {
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

    background-color: ${V2_Color.Neutral[8]};

    ${V2_MediaQuery.MaxWidth.tablet} {
        background-color: transparent;
    }
`;

export const FilterItemExpandButton = styled(ClickableIcon)`
    margin: 0 0 0 auto;
`;

export const ChevronIcon = styled(ChevronDownIcon)<StyleProps>`
    height: 1.125rem;
    width: 1.125rem;
    color: ${V2_Color.Neutral[3]};

    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${V2_Color.Neutral[2]};
    }
`;

export const FilterItemTitle = styled(V2_Text.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${V2_MediaQuery.MaxWidth.tablet} {
        ${V2_TextStyleHelper.getTextStyle("H5", "semibold")}
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
`;
