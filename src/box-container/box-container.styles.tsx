import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { V2_MediaQuery } from "../v2_media";
import { V2_Text } from "../v2_text/text";
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

interface HeaderStyleProps {
    $interactive?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    border: 1px solid ${V2_Color.Neutral[5]};
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
    border-top: 1px solid ${V2_Color.Neutral[5]};
`;

export const Header = styled.div<HeaderStyleProps>`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${V2_MediaQuery.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
        display: block;
    }

    ${(props) => {
        if (props.$interactive) {
            return css`
                cursor: pointer;
            `;
        }
    }}
`;

export const LabelText = styled(V2_Text.H3)`
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

    ${V2_MediaQuery.MaxWidth.mobileL} {
        margin-right: 0rem;
    }

    ${(props) => {
        switch (props.$displayState) {
            case "error":
                return css`
                    color: ${V2_Color.Validation.Red.Icon(props)};
                `;
            case "warning":
                return css`
                    color: ${V2_Color.Validation.Orange.Icon(props)};
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
    ${V2_MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
    }
    ${(props) => {
        if (props.$collapsible) {
            return css`
                margin-right: 2.5rem;
                ${V2_MediaQuery.MaxWidth.mobileL} {
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

    ${V2_MediaQuery.MaxWidth.mobileL} {
        margin: -1rem -1rem -1rem 0;
        margin-left: auto;
    }
`;

export const HandleLabel = styled(V2_Text.H4)`
    color: ${V2_Color.Primary};
`;

export const HandleIconContainer = styled.div<StyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: ${Transition.Base};
`;

export const HandleIcon = styled(ChevronDownIcon)`
    color: ${V2_Color.Neutral[3]};
    height: 1.375rem;
    width: 1.375rem;
`;
