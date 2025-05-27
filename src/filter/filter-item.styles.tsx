import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { animated } from "react-spring";
import styled from "styled-components";
import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import { Colour, Font, MediaQuery, Motion, Spacing } from "@/theme";

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

interface MinimisableContentProps {
    $height?: number;
    $minimisable: boolean;
}

// =============================================================================
// FILTER ITEM STYLES
// =============================================================================

export const FilterItemWrapper = styled.div<StyleProps>`
    background-color: ${(props) =>
        props.$collapsible ? Colour["bg-strong"] : Colour["bg"]};
    ${MediaQuery.MaxWidth.lg} {
        background-color: ${Colour["bg-strong"]};
    }
`;

export const Divider = styled.div<DividerStyleProps>`
    display: ${(props) => (props.$showDivider ? "block" : "none")};
    height: 1px;
    background-color: ${Colour["border"]};

    ${MediaQuery.MaxWidth.lg} {
        display: ${(props) => (props.$showMobileDivider ? "block" : "none")};
        margin: 0 ${Spacing["spacing-16"]};
    }
`;

// -----------------------------------------------------------------------------
// HEADER STYLES
// -----------------------------------------------------------------------------

export const FilterItemHeader = styled.div`
    display: flex;
    align-items: center;

    background-color: ${Colour["bg"]};

    ${MediaQuery.MaxWidth.lg} {
        background-color: transparent;
    }
`;

export const FilterItemExpandButton = styled(ClickableIcon)`
    margin: 0 0 0 auto;

    color: ${Colour["icon"]};
    &:hover {
        color: ${Colour["icon-hover"]};
    }
`;

export const ChevronIcon = styled(ChevronDownIcon)<StyleProps>`
    height: ${Font.Spec["body-size-baseline"]};
    width: ${Font.Spec["body-size-baseline"]};

    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: transform ${Motion["duration-350"]} ${Motion["ease-standard"]};
`;

export const FilterItemTitle = styled.p`
    ${Font["heading-xs-semibold"]}
    color: ${Colour["text"]};

    margin: ${Spacing["spacing-24"]} 0 ${Spacing["spacing-24"]}
        ${Spacing["spacing-20"]};

    ${MediaQuery.MaxWidth.lg} {
        ${Font["body-md-semibold"]}
        color: ${Colour["text-subtle"]};

        margin: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]} 0
            ${Spacing["spacing-20"]};
    }
`;

// -----------------------------------------------------------------------------
// CONTENT STYLES
// -----------------------------------------------------------------------------

export const ExpandableItem = styled(animated.div)`
    overflow: hidden;
`;

export const FilterItemBody = styled.div`
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
`;

export const MinimisableContent = styled(animated.div)<MinimisableContentProps>`
    ${(props) => props.$minimisable && "overflow: hidden;"}
    ${(props) => props.$height && `height: ${props.$height}px;`}
`;

export const FilterItemMinimiseButton = styled(Button.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Spacing["spacing-16"]} 0 0 0;
`;
