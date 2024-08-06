import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { V2_MediaQuery } from "../v2_media";
import { ClickableIcon } from "../shared/clickable-icon";
import { V2_Text } from "../v2_text/text";
import { Transition } from "../transition";

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
    background-color: ${V2_Color.Neutral[8]} !important;
    border-top: 1px solid ${V2_Color.Neutral[6]};
    padding: ${(props) => (props.$isCollapsed ? "0 0 1rem" : "0")};

    ${V2_MediaQuery.MaxWidth.mobileL} {
        padding: ${(props) =>
            props.$isCollapsed ? ".25rem 0 1.05rem" : "0.5rem 0"};
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const TITLE_STYLE = (isCollapsed?: boolean) => css`
    flex: 1;
    margin: 1rem 2rem ${isCollapsed ? 0.5 : 1}rem 0;
    transition: ${Transition.Base};
`;

export const Title = styled(V2_Text.H3)<StyleProps>`
    ${(props) => {
        return TITLE_STYLE(props.$isCollapsed);
    }}
`;

export const TitleH4 = styled(V2_Text.H4)<StyleProps>`
    ${(props) => {
        return TITLE_STYLE(props.$isCollapsed);
    }}
`;

export const ExpandCollapseButton = styled(ClickableIcon)<StyleProps>`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${(props) => (props.$isCollapsed ? 0 : 180)}deg);
    transition: transform 300ms ease-in-out;
    margin: auto -1rem auto 0;
`;

export const ChevronIcon = styled(ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${V2_Color.Primary};
`;

export const Expandable = styled(animated.div)<StyleProps>`
    overflow: hidden;
`;

export const DescriptionContainer = styled.div`
    display: inline-block;
    padding-right: 4rem;

    ${V2_MediaQuery.MaxWidth.tablet} {
        padding-right: 0;
    }
`;
