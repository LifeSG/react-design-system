import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
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
} from "@/theme";
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
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    margin-bottom: ${Spacing["spacing-32"]};
`;

export const Expandable = styled(animated.div)`
    overflow: hidden;
`;

export const NonExpandable = styled.div`
    height: max-content;
`;

export const ChildContainer = styled.div`
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const Header = styled.div<HeaderStyleProps>`
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.sm} {
        padding: ${Spacing["spacing-16"]} ${Spacing["spacing-20"]};
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

export const LabelText = styled.div`
    ${Font["heading-sm-semibold"]}
    color: ${Colour["text"]};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${Spacing["spacing-16"]};
`;

export const LabelWrapper = styled.div`
    display: flex;
`;

export const LabelIcon = styled.span<LabelIconStyleProps>`
    display: flex;
    align-items: center;
    margin-right: ${Spacing["spacing-40"]};

    ${MediaQuery.MaxWidth.sm} {
        margin-right: 0;
    }

    ${(props) => {
        switch (props.$displayState) {
            case "error":
                return css`
                    color: ${Colour["icon-error"]};
                `;
            case "warning":
                return css`
                    color: ${Colour["icon-warning"]};
                `;
            default:
                break;
        }
    }}
`;

export const AlertIcon = styled(ExclamationCircleFillIcon)`
    height: ${Font.Spec["heading-size-sm"]};
    width: ${Font.Spec["heading-size-sm"]};
`;

export const CallToActionContainer = styled.div<StyleProps>`
    display: flex;
    margin-left: auto;
    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column;
    }
    ${(props) => {
        if (props.$collapsible) {
            return css`
                margin-right: ${Spacing["spacing-40"]};
                ${MediaQuery.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${Spacing["spacing-16"]};
                }
            `;
        }
    }}
`;

export const Handle = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${Spacing["spacing-16"]};
    margin: -${Spacing["spacing-16"]};
    display: flex;
    align-items: center;

    ${MediaQuery.MaxWidth.sm} {
        margin: -${Spacing["spacing-16"]} -${Spacing["spacing-16"]} -${Spacing[
                "spacing-16"
            ]} 0;
        margin-left: auto;
    }
`;

export const HandleIconContainer = styled.div<StyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: ${Motion["duration-250"]} ${Motion["ease-default"]};
`;

export const HandleIcon = styled(ChevronDownIcon)`
    color: ${Colour["icon"]};
    height: ${Font.Spec["heading-size-sm"]};
    width: ${Font.Spec["heading-size-sm"]};
`;
