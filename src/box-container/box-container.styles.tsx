import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { TextStyleHelper } from "../text/helper";
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

    ${MediaQuery.MaxWidth.mobileM} {
        padding: 1rem 1.25rem;
        display: block;
    }
`;

export const LabelText = styled(Text.H3)`
    word-wrap: break-word;
    display: flex;
    flex: 1;
    align-items: center;
    p:last-child {
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        ${TextStyleHelper.getTextStyle("BodySmall", "semibold")}
        margin-right: 0rem;
        display: flex;
        justify-content: space-between;
    }
`;

export const LabelIcon = styled.span<LabelIconStyleProps>`
    margin-left: 0.625rem;
    font-size: 1.5rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
    margin-right: 2.5rem;

    ${MediaQuery.MaxWidth.mobileM} {
        margin-right: 0;
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

    ${(props) => {
        if (props.$collapsible) {
            return css`
                margin-right: 2.5rem;
                ${MediaQuery.MaxWidth.mobileM} {
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

    ${MediaQuery.MaxWidth.mobileM} {
        margin: -1rem -1rem -1rem 0;
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

export const DesktopHandleIcon = styled.div`
    ${MediaQuery.MaxWidth.mobileM} {
        display: none;
    }
`;
