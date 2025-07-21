import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { animated } from "@react-spring/web";
import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, Motion } from "../theme";
import { MediaQuery } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $isCollapsed?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<StyleProps>`
    background-color: ${Colour.bg} !important;
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    padding: ${(props) => (props.$isCollapsed ? "0 0 1rem" : "0")};

    ${MediaQuery.MaxWidth.sm} {
        padding: ${(props) =>
            props.$isCollapsed ? ".25rem 0 1.05rem" : "0.5rem 0"};
    }
`;

export const TitleContainer = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${(props) => (props.$isCollapsed ? "pointer" : "unset")};
`;

const TITLE_STYLE = (isCollapsed?: boolean) => css`
    flex: 1;
    margin: 1rem 2rem ${isCollapsed ? 0.5 : 1}rem 0;
    transition: all ${Motion["duration-250"]} ${Motion["ease-standard"]};
`;

export const Title = styled(Typography.HeadingSM)<StyleProps>`
    ${(props) => TITLE_STYLE(props.$isCollapsed)}
`;

export const TitleH4 = styled(Typography.HeadingXS)<StyleProps>`
    ${(props) => TITLE_STYLE(props.$isCollapsed)}
`;

export const ExpandCollapseButton = styled(ClickableIcon)<StyleProps>`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${(props) => (props.$isCollapsed ? 0 : 180)}deg);
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};
    margin: auto -1rem auto 0;
`;

export const ChevronIcon = styled(ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Colour["icon-primary"]};
`;

export const Expandable = animated(styled.div<StyleProps>`
    overflow: hidden;
`);

export const DescriptionContainer = styled.div`
    display: inline-block;
    padding-right: 4rem;

    ${MediaQuery.MaxWidth.lg} {
        padding-right: 0;
    }
`;
