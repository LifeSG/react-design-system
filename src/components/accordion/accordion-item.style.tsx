import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { Icon } from "../icon/icon";
import { MediaQuery, Transition } from "../styles/spec";
import { Color } from "../styles/theme";
import { Text } from "../text/text";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $isCollapsed?: boolean;
    /* the $ is required as the prop shouldn't be passed down to the DOM
	https://styled-components.com/docs/api#transient-props */
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<StyleProps>`
    background-color: ${Color.Neutral[8]} !important;
    border-top: 1px solid ${Color.Neutral[6]};
    padding: ${(props) => (props.$isCollapsed ? "0 0 1rem" : "0")};

    ${MediaQuery.MaxWidth.mobileL} {
        padding: ${(props) =>
            props.$isCollapsed ? ".25rem 0 1.05rem" : "0.5rem 0"};
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TITLE_STYLE = (isCollapsed?: boolean) => css`
    flex: 1;
    margin: 1rem 2rem ${isCollapsed ? 0.5 : 1}rem 0;
    transition: ${Transition.Base};
`;

export const Title = styled(Text.H3)<StyleProps>`
    ${(props) => {
        return TITLE_STYLE(props.$isCollapsed);
    }}
`;

export const TitleH4 = styled(Text.H4)<StyleProps>`
    ${(props) => {
        return TITLE_STYLE(props.$isCollapsed);
    }}
`;

export const ExpandCollapseButton = styled.a<StyleProps>`
    height: 3.25rem;
    width: 3.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    transform: rotate(${(props) => (props.$isCollapsed ? 0 : 180)}deg);
    transition: transform 300ms ease-in-out;
    margin: auto -1rem auto 0;
`;

export const ChevronIcon = styled(Icon)`
    color: ${Color.Primary};
    font-size: 1.25rem;
    font-weight: bold;
`;

export const Expandable = styled(animated.div)<StyleProps>`
    /* margin-top: ${(props) => (props.$isCollapsed ? "0.5rem" : 0)}; */
    overflow: hidden;
    /* transition: margin-top 500ms ease-in-out; */
`;

export const DescriptionContainer = styled.div`
    display: inline-block;
    padding-right: 4rem;

    ${MediaQuery.MaxWidth.tablet} {
        padding-right: 0;
    }
`;
