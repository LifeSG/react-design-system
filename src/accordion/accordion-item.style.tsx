import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { animated } from "@react-spring/web";
import styled, { css } from "styled-components";

import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Motion,
    V3_Radius,
    V3_Spacing,
} from "../v3_theme";
import type { AccordionItemType } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface ContainerStyleProps {
    $expanded?: boolean | undefined;
}

interface ExpandCollapseButtonProps {
    $expanded: boolean;
    $collapsible: boolean;
}

interface TitleProps {
    $type: AccordionItemType;
    $isCollapsed?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<ContainerStyleProps>`
    background-color: ${V3_Colour.bg};
    border-top: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour.border};
    ${(props) =>
        props.$expanded &&
        css`
            padding-bottom: ${V3_Spacing["spacing-16"]};
        `}
`;

export const ExpandCollapseButton = styled.button<ExpandCollapseButtonProps>`
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

    ${(props) =>
        props.$expanded &&
        css`
            padding-bottom: ${V3_Spacing["spacing-8"]};
        `}

    ${(props) =>
        props.$collapsible &&
        css`
            cursor: pointer;
        `}

    &:focus-visible {
        outline: 2px solid ${V3_Colour["focus-ring"]};
        outline-offset: 0;
    }
`;

export const Title = styled.span<TitleProps>`
    flex: 1;
    transition: all ${V3_Motion["duration-250"]} ${V3_Motion["ease-standard"]};
    color: ${V3_Colour["text"]};

    ${(props) =>
        props.$type === "small"
            ? V3_Font["heading-xs-bold"]
            : V3_Font["heading-sm-bold"]}
`;

export const IconContainer = styled.span<ContainerStyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 0 : 180)}deg);
    transition: transform ${V3_Motion["duration-250"]}${V3_Motion["ease-default"]};
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
