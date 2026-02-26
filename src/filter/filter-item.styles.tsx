import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { animated } from "@react-spring/web";
import styled, { css } from "styled-components";
import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import { V3_Colour, V3_Font, V3_Motion, V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLES INTERFACE
// =============================================================================
interface StyleProps {
    $collapsible?: boolean;
    $expanded?: boolean;
    $isMobile?: boolean;
}

interface DividerStyleProps {
    $showDivider: boolean;
    $showMobileDivider: boolean;
    $isMobile?: boolean;
}

interface MinimisableContentProps {
    $height?: number;
    $minimisable: boolean;
}

interface FilterItemHeaderStyleProps {
    $isMobile?: boolean;
}
interface FilterItemTitleStyleProps {
    $isMobile?: boolean;
}

// =============================================================================
// FILTER ITEM STYLES
// =============================================================================

export const FilterItemWrapper = styled.div<StyleProps>`
    background-color: ${(props) =>
        props.$collapsible ? V3_Colour["bg-strong"] : V3_Colour["bg"]};
    ${(props) =>
        props.$isMobile &&
        css`
            background-color: ${V3_Colour["bg-strong"]};
        `}
`;

export const Divider = styled.div<DividerStyleProps>`
    display: ${(props) => (props.$showDivider ? "block" : "none")};
    height: 1px;
    background-color: ${V3_Colour["border"]};

    ${(props) =>
        props.$isMobile &&
        css`
            display: ${props.$showMobileDivider ? "block" : "none"};
            margin: 0 ${V3_Spacing["spacing-16"]};
        `}
`;

// -----------------------------------------------------------------------------
// HEADER STYLES
// -----------------------------------------------------------------------------

export const FilterItemHeader = styled.div<FilterItemHeaderStyleProps>`
    display: flex;
    align-items: center;

    background-color: ${V3_Colour["bg"]};

    ${(props) =>
        props.$isMobile &&
        css`
            background-color: transparent;
        `}
`;

export const FilterItemExpandButton = styled(ClickableIcon)`
    margin: 0 0 0 auto;

    color: ${V3_Colour["icon"]};
    &:hover {
        color: ${V3_Colour["icon-hover"]};
    }
`;

export const ChevronIcon = styled(ChevronDownIcon)<StyleProps>`
    height: ${V3_Font.Spec["body-size-baseline"]};
    width: ${V3_Font.Spec["body-size-baseline"]};

    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: transform ${V3_Motion["duration-350"]}
        ${V3_Motion["ease-standard"]};
`;

export const FilterItemTitle = styled.h3<FilterItemTitleStyleProps>`
    ${V3_Font["heading-xs-semibold"]}
    color: ${V3_Colour["text"]};

    margin: ${V3_Spacing["spacing-24"]} 0 ${V3_Spacing["spacing-24"]}
        ${V3_Spacing["spacing-20"]};

    ${(props) =>
        props.$isMobile &&
        css`
            ${V3_Font["body-md-semibold"]}
            color: ${V3_Colour["text-subtle"]};

            margin: ${V3_Spacing["spacing-24"]} ${V3_Spacing["spacing-20"]} 0
                ${V3_Spacing["spacing-20"]};
        `}
`;

// -----------------------------------------------------------------------------
// CONTENT STYLES
// -----------------------------------------------------------------------------

export const ExpandableItem = animated(styled.div`
    overflow: hidden;
`);

export const FilterItemBody = styled.div`
    padding: ${V3_Spacing["spacing-24"]} ${V3_Spacing["spacing-20"]};
`;

export const MinimisableContent = animated(styled.div<MinimisableContentProps>`
    ${(props) => props.$minimisable && "overflow: hidden;"}
    ${(props) => props.$height && `height: ${props.$height}px;`}
`);

export const FilterItemMinimiseButton = styled(Button.Small)`
    height: fit-content;
    padding: 0;
    margin: ${V3_Spacing["spacing-16"]} 0 0 0;
`;
