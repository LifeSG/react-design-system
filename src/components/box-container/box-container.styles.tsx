import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { Icon } from "../icon/icon";
import { MediaQuery } from "../styles/spec/media";
import { Transition } from "../styles/spec/transition";
import { Color } from "../styles/theme";
import { TextStyleHelper } from "../text/helper";
import { Text } from "../text/text";
import { BoxContainerDisplayState } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    expanded?: boolean;
    collapsible?: boolean;
}

interface LabelIconStyleProps {
    displayState?: BoxContainerDisplayState;
}

// =============================================================================
// STYLING
// =============================================================================

export const Container = styled.div`
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    margin-bottom: 2rem;
`;

export const Expandable = styled(animated.div)`
    overflow: hidden;
`;

export const NonExpandable = styled.div`
    height: max-content;
`;

export const ChildContainer = styled.div`
    border-top: 1px solid ${Color.Neutral[5]};
`;

export const Header = styled.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.mobileM} {
        padding: 1rem;
    }
`;

export const LabelText = styled(Text.H3)`
    word-wrap: break-word;
    margin-right: 2rem;
    display: block;
    flex: 1;

    ${MediaQuery.MaxWidth.mobileM} {
        ${TextStyleHelper.getTextStyle("BodySmall", "semibold")}
        margin-right: 1rem;
    }
`;

export const LabelIcon = styled.span<LabelIconStyleProps>`
    margin-left: 0.625rem;
    font-size: 1.5rem;
    vertical-align: middle;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    ${(props) => {
        switch (props.displayState) {
            case "error":
                return css`
                    color: ${Color.Validation.Red.Icon(props)};
                `;
            case "warning":
                return css`
                    color: ${Color.Validation.Orange.Icon(props)};
                `;
            default:
                break;
        }
    }}
`;

export const CallToActionContainer = styled.div<StyleProps>`
    display: flex;
    ${(props) => {
        if (props.collapsible) {
            return css`
                margin-right: 2rem;

                ${MediaQuery.MaxWidth.mobileM} {
                    margin-right: 1rem;
                }
            `;
        }
    }}
`;

export const Handle = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 1rem;
    margin: -1rem;
    display: flex;
    align-items: center;

    ${MediaQuery.MaxWidth.mobileM} {
        margin: -1rem -1rem -1rem 0;
    }
`;

export const HandleLabel = styled(Text.H4)`
    color: ${Color.Primary};
`;

export const HandleIconContainer = styled.div<StyleProps>`
    transform: rotate(${(props) => (props.expanded ? 180 : 0)}deg);
    transition: ${Transition.Base};
`;

export const HandleIcon = styled(Icon)`
    color: ${Color.Neutral[3]};
    font-weight: bold;
    font-size: 1.2rem;
`;
