import { ChevronDownIcon } from "@lifesg/react-icons";
import styled, { css } from "styled-components";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { AlertSizeType, AlertType } from "./types";
import { Border, Colour, Font, Motion, Spacing } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $type: AlertType;
    $sizeType: AlertSizeType;
}
export interface TextWrapperContainerStyleProps {
    $showMore: boolean;
    $hasActionLink: boolean;
    $maxCollapsedHeight?: number;
}

export interface ShowMoreIconStyleProps {
    $expanded: boolean;
}
// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div<StyleProps>`
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    display: flex;

    ${(props) => {
        let backgroundColor: string;
        let borderColor: string;
        switch (props.$type) {
            case "error":
                backgroundColor = Colour["bg-error"](props);
                borderColor = Colour["border-error"](props);
                break;
            case "success":
                backgroundColor = Colour["bg-success"](props);
                borderColor = Colour["border-success"](props);
                break;
            case "warning":
                backgroundColor = Colour["bg-warning"](props);
                borderColor = Colour["border-warning"](props);
                break;
            case "info":
                backgroundColor = Colour["bg-info"](props);
                borderColor = Colour["border-info"](props);
                break;
            case "description":
                backgroundColor = Colour["bg-strong"](props);
                borderColor = Colour["border-strong"](props);
                break;
            default:
                backgroundColor = Colour["bg-warning"](props);
                borderColor = Colour["border-warning"](props);
                break;
        }

        return css`
            background: ${backgroundColor};
            border-left: ${Border["width-020"]} ${Border["solid"]}
                ${borderColor};
        `;
    }}

    color: ${Colour.text};
    ${(props) => {
        if (props.$sizeType === "small") {
            return applyHtmlContentStyle({ textSize: "body-sm" });
        }
        return applyHtmlContentStyle({ textSize: "body-md" });
    }}
`;

export const AlertIconWrapper = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Spacing["spacing-8"]};

    ${(props) => {
        let iconColor: string;
        const iconSize = props.$sizeType === "small" ? "1.25rem" : "1.5rem";
        switch (props.$type) {
            case "error":
                iconColor = Colour["icon-error"](props);
                break;
            case "success":
                iconColor = Colour["icon-success"](props);
                break;
            case "warning":
                iconColor = Colour["icon-warning"](props);
                break;
            case "info":
                iconColor = Colour["icon-info"](props);
                break;
            case "description":
                iconColor = Colour["icon-subtle"](props);
                break;
            default:
                iconColor = Colour["icon-warning"](props);
                break;
        }

        return css`
            svg {
                color: ${iconColor};
                width: ${iconSize};
                height: ${iconSize};
            }
        `;
    }}
`;

export const ActionLinkText = styled(Typography.LinkSM)<StyleProps>`
    ${(props) => {
        if (props.$sizeType === "small")
            return css`
                ${Font["body-sm-semibold"]}
                margin-top: ${Spacing["spacing-4"]};
            `;
        else {
            return css`
                ${Font["body-md-semibold"]}
                margin-top: ${Spacing["spacing-8"]};
            `;
        }
    }}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Spacing["spacing-4"]};
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`;

export const TextWrapperContainer = styled.div<TextWrapperContainerStyleProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${(props) => {
        if (props.$showMore && props.$hasActionLink)
            return css`
                margin-bottom: ${Spacing["spacing-8"]};
            `;
    }}
    ${(props) => {
        const gradient =
            "linear-gradient(to bottom, black 50%, transparent 100%)";
        if (!props.$showMore && props.$maxCollapsedHeight)
            return `
                max-height: ${props.$maxCollapsedHeight}px;
				overflow: hidden;
                -webkit-mask-image: ${gradient};
                mask-image: ${gradient};
			`;
    }}
`;

export const ShowMoreButton = styled.button<StyleProps>`
    ${(props) => {
        if (props.$sizeType === "small")
            return css`
                ${Font["body-sm-semibold"]}
            `;
        else {
            return css`
                ${Font["body-md-semibold"]}
            `;
        }
    }}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Spacing["spacing-4"]};
    margin-top: ${Spacing["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Colour["text-primary"]};
`;

export const ChevronIcon = styled(ChevronDownIcon)<ShowMoreIconStyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: transform ${Motion["duration-350"]} ${Motion["ease-standard"]};
`;
