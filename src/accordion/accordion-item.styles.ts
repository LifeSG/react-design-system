import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { animated } from "@react-spring/web";
import styled from "styled-components";

import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Motion,
    Radius,
    Spacing,
} from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    background-color: ${Colour.bg};
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};

    &.containerExpanded {
        padding-bottom: ${Spacing["spacing-16"]};
    }
`;

export const ExpandCollapseButton = styled.button`
    background: transparent;
    border: none;
    border-radius: ${Radius["sm"]};
    outline: none;
    text-align: left;
    user-select: text;

    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${Spacing["spacing-48"]};
    padding: ${Spacing["spacing-16"]} 0;

    &.expandCollapseButtonExpanded {
        padding-bottom: ${Spacing["spacing-8"]};
    }

    &.expandCollapseButtonCollapsible {
        cursor: pointer;
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 0;
    }
`;

export const Title = styled.span`
    flex: 1;
    transition: all ${Motion["duration-250"]} ${Motion["ease-standard"]};
    color: ${Colour["text"]};
    ${Font["heading-sm-bold"]}

    &.titleSmall {
        ${Font["heading-xs-bold"]}
    }
`;

export const IconContainer = styled.span`
    transform: rotate(180deg);
    transition: transform ${Motion["duration-250"]}${Motion["ease-default"]};

    &.iconContainerExpanded {
        transform: rotate(0deg);
    }
`;

export const ChevronIcon = styled(ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Colour["icon-primary"]};
`;

export const Expandable = animated(styled.div`
    overflow: hidden;
`);

export const ContentContainer = styled.div`
    display: inline-block;
    padding-right: ${Spacing["spacing-64"]};

    ${MediaQuery.MaxWidth.lg} {
        padding-right: 0;
    }
`;
