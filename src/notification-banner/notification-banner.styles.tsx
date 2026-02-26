import styled, { css } from "styled-components";
import { Layout } from "../layout";
import { ClickableIcon } from "../shared/clickable-icon";
import {
    V3_Colour,
    V3_Font,
    V3_Motion,
    V3_Radius,
    V3_Spacing,
} from "../v3_theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface WrapperStyleProps {
    $sticky: boolean;
    $clickable: boolean;
}

interface ContentStyleProps {
    $maxCollapsedHeight?: number;
}

// =============================================================================
// STYLING
// =============================================================================
const commonLinkStyle = css`
    color: ${V3_Colour["hyperlink-inverse"]};

    svg {
        color: ${V3_Colour["icon-primary-inverse"]};
    }

    &:hover,
    &:active,
    &:visited,
    &:focus {
        color: ${V3_Colour["hyperlink-inverse"]};
        svg {
            color: ${V3_Colour["icon-primary-inverse"]};
        }
    }
`;

export const Wrapper = styled.div<WrapperStyleProps>`
    position: ${(props) => (props.$sticky ? "sticky" : "relative")};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${V3_Motion["duration-800"]} ${V3_Motion["ease-default"]};
    background: ${V3_Colour["bg-inverse-subtle"]};
    border-radius: ${V3_Radius["none"]};
    z-index: 25;
    cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
`;

export const Container = styled(Layout.Content)``;

export const ContentContainer = styled.div`
    flex: 1;
    align-items: flex-start;
    padding: ${V3_Spacing["spacing-24"]} 0;
`;

export const Content = styled.div<ContentStyleProps>`
    display: flex;
    flex: 1;
    align-items: flex-start;

    ${V3_Font["body-baseline-regular"]}
    color: ${V3_Colour["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${V3_Font["body-baseline-semibold"]}
        color: ${V3_Colour["text-inverse"]};
    }

    a {
        ${V3_Font["body-baseline-regular"]}
        ${commonLinkStyle}
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const ContentText = styled.div<{ $maxCollapsedHeight?: number }>`
    flex: 1;
    word-wrap: break-word;
    overflow-wrap: break-word;
    ${(props) => {
        const gradient =
            "linear-gradient(to bottom, black 50%, transparent 100%)";
        if (props.$maxCollapsedHeight) {
            return css`
                max-height: ${props.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${gradient};
                mask-image: ${gradient};
            `;
        }
    }}
`;

export const ContentLink = styled(Typography.LinkBL)`
    position: relative;

    ${commonLinkStyle}
`;

export const StyledIconButton = styled(ClickableIcon)`
    margin-right: -${V3_Spacing["spacing-24"]};
    padding-left: ${V3_Spacing["spacing-16"]};
    height: max-content;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${V3_Colour["icon-inverse"]};
    }
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    gap: ${V3_Spacing["spacing-4"]};
    align-self: flex-start;
    margin-top: ${V3_Spacing["spacing-8"]};

    border: none;
    background: transparent;
    color: ${V3_Colour["hyperlink-inverse"]};
    ${V3_Font["body-md-semibold"]};

    cursor: pointer;
`;

export const AccessibleBannerButton = styled.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const IconContainer = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    margin: ${V3_Spacing["spacing-24"]} ${V3_Spacing["spacing-24"]} 0 0;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
        color: ${V3_Colour["hyperlink-inverse"]};
    }
`;
