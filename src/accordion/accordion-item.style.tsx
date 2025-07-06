import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Motion,
    Radius,
    Spacing,
} from "../theme";
import { AccordionItemType } from "./types";

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
    background-color: ${Colour.bg};
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    ${(props) =>
        props.$expanded &&
        css`
            padding-bottom: ${Spacing["spacing-16"]};
        `}
`;

export const ExpandCollapseButton = styled.button<ExpandCollapseButtonProps>`
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

    ${(props) =>
        props.$expanded &&
        css`
            padding-bottom: ${Spacing["spacing-8"]};
        `}

    ${(props) =>
        props.$collapsible &&
        css`
            cursor: pointer;
        `}

    :focus-visible {
        outline: ${Border["width-020"]} ${Border["solid"]}
            ${Colour["focus-ring"]};
        outline-offset: 0;
    }
`;

export const Title = styled.span<TitleProps>`
    flex: 1;
    transition: all ${Motion["duration-250"]} ${Motion["ease-standard"]};
    color: ${Colour["text"]};

    ${(props) =>
        props.$type === "small"
            ? Font["heading-xs-bold"]
            : Font["heading-sm-bold"]}
`;

export const IconContainer = styled.span<ContainerStyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 0 : 180)}deg);
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};
`;

export const ChevronIcon = styled(ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Colour["icon-primary"]};
`;

export const Expandable = styled(animated.div)`
    overflow: hidden;
`;

export const ContentContainer = styled.div`
    display: inline-block;
    padding-right: ${Spacing["spacing-64"]};

    ${MediaQuery.MaxWidth.lg} {
        padding-right: 0;
    }
`;
