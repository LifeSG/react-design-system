import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
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
export const Container = styled.section`
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    border-radius: ${V3_Radius["sm"]};
    margin-bottom: ${V3_Spacing["spacing-32"]};
`;

export const Expandable = animated(styled.div`
    overflow: hidden;
`);

export const NonExpandable = styled.div`
    height: max-content;
`;

export const ChildContainer = styled.div`
    border-top: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
`;

export const Header = styled.div<HeaderStyleProps>`
    padding: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${V3_MediaQuery.MaxWidth.sm} {
        padding: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-20"]};
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
    ${V3_Font["heading-sm-semibold"]}
    color: ${V3_Colour["text"]};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${V3_Spacing["spacing-16"]};
`;

export const LabelWrapper = styled.div`
    display: flex;
`;

export const AlertIcon = styled(ExclamationCircleFillIcon)<LabelIconStyleProps>`
    height: ${V3_Font.Spec["heading-size-sm"]};
    width: ${V3_Font.Spec["heading-size-sm"]};
    align-self: center;
    margin-right: ${V3_Spacing["spacing-40"]};
    flex-shrink: 0;

    ${V3_MediaQuery.MaxWidth.sm} {
        margin-right: 0;
    }

    ${(props) => {
        switch (props.$displayState) {
            case "error":
                return css`
                    color: ${V3_Colour["icon-error"]};
                `;
            case "warning":
                return css`
                    color: ${V3_Colour["icon-warning"]};
                `;
            default:
                break;
        }
    }}
`;

export const CallToActionContainer = styled.div<StyleProps>`
    display: flex;
    margin-left: auto;
    ${V3_MediaQuery.MaxWidth.sm} {
        flex-direction: column;
    }
    ${(props) => {
        if (props.$collapsible) {
            return css`
                margin-right: ${V3_Spacing["spacing-40"]};
                ${V3_MediaQuery.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${V3_Spacing["spacing-16"]};
                }
            `;
        }
    }}
`;

export const Handle = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${V3_Spacing["spacing-16"]};
    margin: -${V3_Spacing["spacing-16"]};
    display: flex;
    align-items: center;

    ${V3_MediaQuery.MaxWidth.sm} {
        margin: -${V3_Spacing["spacing-16"]} -${V3_Spacing["spacing-16"]} -${V3_Spacing[
                "spacing-16"
            ]} 0;
        margin-left: auto;
    }
`;

export const HandleIconContainer = styled.div<StyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: ${V3_Motion["duration-250"]} ${V3_Motion["ease-default"]};
`;

export const HandleIcon = styled(ChevronDownIcon)`
    color: ${V3_Colour["icon"]};
    height: ${V3_Font.Spec["heading-size-sm"]};
    width: ${V3_Font.Spec["heading-size-sm"]};
`;
