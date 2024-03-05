import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text } from "../text/text";
import { Transition } from "../transition";
import { BoxContainerDisplayState } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $expanded?: boolean;
    $collapsible?: boolean;
}

interface LabelIconStyleProps {
    $displayState?: BoxContainerDisplayState;
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

    ${MediaQuery.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
        display: block;
    }
`;

export const LabelText = styled(Text.H3)`
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: 1rem;
`;

export const LabelWrapper = styled.div`
    display: flex;
`;

export const LabelIcon = styled.span<LabelIconStyleProps>`
    font-size: 1.5rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
    margin-right: 2.5rem;

    ${MediaQuery.MaxWidth.mobileL} {
        margin-right: 0rem;
    }

    ${(props) => {
        switch (props.$displayState) {
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

export const AlertIcon = styled(ExclamationCircleFillIcon)`
    height: 1.375rem;
    width: 1.375rem;
`;

export const CallToActionContainer = styled.div<StyleProps>`
    display: flex;
    margin-left: auto;
    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
    }
    ${(props) => {
        if (props.$collapsible) {
            return css`
                margin-right: 2.5rem;
                ${MediaQuery.MaxWidth.mobileL} {
                    margin-right: 0rem;
                    margin-top: 1rem;
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

    ${MediaQuery.MaxWidth.mobileL} {
        margin: -1rem -1rem -1rem 0;
        margin-left: auto;
    }
`;

export const HandleLabel = styled(Text.H4)`
    color: ${Color.Primary};
`;

export const HandleIconContainer = styled.div<StyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: ${Transition.Base};
`;

export const HandleIcon = styled(ChevronDownIcon)`
    color: ${Color.Neutral[3]};
    height: 1.375rem;
    width: 1.375rem;
`;
