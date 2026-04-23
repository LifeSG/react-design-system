import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { animated } from "@react-spring/web";
import styled from "styled-components";

import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Motion,
    V3_Radius,
    V3_Spacing,
} from "../v3_theme";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    background-color: ${V3_Colour.bg};
    border-top: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour.border};

    &.containerExpanded {
        padding-bottom: ${V3_Spacing["spacing-16"]};
    }
`;

export const ExpandCollapseButton = styled.button`
    background: transparent;
    border: none;
    border-radius: ${V3_Radius["sm"]};
    outline: none;
    text-align: left;
    user-select: text;

    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${V3_Spacing["spacing-48"]};
    padding: ${V3_Spacing["spacing-16"]} 0;

    &.expandCollapseButtonExpanded {
        padding-bottom: ${V3_Spacing["spacing-8"]};
    }

    &.expandCollapseButtonCollapsible {
        cursor: pointer;
    }

    &:focus-visible {
        outline: 2px solid ${V3_Colour["focus-ring"]};
        outline-offset: 0;
    }
`;

export const Title = styled.span`
    flex: 1;
    transition: all ${V3_Motion["duration-250"]} ${V3_Motion["ease-standard"]};
    color: ${V3_Colour["text"]};
    ${V3_Font["heading-sm-bold"]}

    &.titleSmall {
        ${V3_Font["heading-xs-bold"]}
    }
`;

export const IconContainer = styled.span`
    transform: rotate(180deg);
    transition: transform ${V3_Motion["duration-250"]}${V3_Motion["ease-default"]};

    &.iconContainerExpanded {
        transform: rotate(0deg);
    }
`;

export const ChevronIcon = styled(ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${V3_Colour["icon-primary"]};
`;

export const Expandable = animated(styled.div`
    overflow: hidden;
`);

export const ContentContainer = styled.div`
    display: inline-block;
    padding-right: ${V3_Spacing["spacing-64"]};

    ${V3_MediaQuery.MaxWidth.lg} {
        padding-right: 0;
    }
`;
