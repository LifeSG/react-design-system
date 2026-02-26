import { ChevronDownIcon } from "@lifesg/react-icons";
import styled, { css } from "styled-components";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { AlertSizeType, AlertType } from "./types";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Motion,
    V3_Spacing,
} from "../v3_theme";
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
    padding: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-16"]};
    display: flex;

    ${(props) => {
        let backgroundColor: string;
        let borderColor: string;
        switch (props.$type) {
            case "error":
                backgroundColor = V3_Colour["bg-error"](props);
                borderColor = V3_Colour["border-error"](props);
                break;
            case "success":
                backgroundColor = V3_Colour["bg-success"](props);
                borderColor = V3_Colour["border-success"](props);
                break;
            case "warning":
                backgroundColor = V3_Colour["bg-warning"](props);
                borderColor = V3_Colour["border-warning"](props);
                break;
            case "info":
                backgroundColor = V3_Colour["bg-info"](props);
                borderColor = V3_Colour["border-info"](props);
                break;
            case "description":
                backgroundColor = V3_Colour["bg-strong"](props);
                borderColor = V3_Colour["border-strong"](props);
                break;
            default:
                backgroundColor = V3_Colour["bg-warning"](props);
                borderColor = V3_Colour["border-warning"](props);
                break;
        }

        return css`
            background: ${backgroundColor};
            border-left: ${V3_Border["width-020"]} ${V3_Border["solid"]}
                ${borderColor};
        `;
    }}
`;

export const AlertIconWrapper = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${V3_Spacing["spacing-8"]};

    ${(props) => {
        let iconColor: string;
        const iconSize = props.$sizeType === "small" ? "1.25rem" : "1.5rem";
        switch (props.$type) {
            case "error":
                iconColor = V3_Colour["icon-error"](props);
                break;
            case "success":
                iconColor = V3_Colour["icon-success"](props);
                break;
            case "warning":
                iconColor = V3_Colour["icon-warning"](props);
                break;
            case "info":
                iconColor = V3_Colour["icon-info"](props);
                break;
            case "description":
                iconColor = V3_Colour["icon-subtle"](props);
                break;
            default:
                iconColor = V3_Colour["icon-warning"](props);
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
                ${V3_Font["body-sm-semibold"]}
                margin-top: ${V3_Spacing["spacing-4"]};
            `;
        else {
            return css`
                ${V3_Font["body-md-semibold"]}
                margin-top: ${V3_Spacing["spacing-8"]};
            `;
        }
    }}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${V3_Spacing["spacing-4"]};
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
    order: 1;
    ${(props) => {
        if (props.$showMore && props.$hasActionLink)
            return css`
                margin-bottom: ${V3_Spacing["spacing-8"]};
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

export const TextWrapper = styled.div<StyleProps>`
    color: ${V3_Colour.text};

    ${(props) => {
        if (props.$sizeType === "small") {
            return applyHtmlContentStyle({ textSize: "body-sm" });
        }
        return applyHtmlContentStyle({ textSize: "body-md" });
    }}
`;

export const ShowMoreButton = styled.button<StyleProps>`
    ${(props) => {
        if (props.$sizeType === "small")
            return css`
                ${V3_Font["body-sm-semibold"]}
            `;
        else {
            return css`
                ${V3_Font["body-md-semibold"]}
            `;
        }
    }}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${V3_Spacing["spacing-4"]};
    margin-top: ${V3_Spacing["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${V3_Colour["text-primary"]};
`;

export const ChevronIcon = styled(ChevronDownIcon)<ShowMoreIconStyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: transform ${V3_Motion["duration-350"]}
        ${V3_Motion["ease-standard"]};
`;
