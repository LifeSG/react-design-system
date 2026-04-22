import styled, { css } from "styled-components";
import { Layout } from "../layout";
import { ClickableIcon } from "../shared/clickable-icon";
import { Colour, Font, Motion, Radius, Spacing } from "../theme";
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
    color: ${Colour["hyperlink-inverse"]};

    svg {
        color: ${Colour["icon-primary-inverse"]};
    }

    &:hover,
    &:active,
    &:visited,
    &:focus {
        color: ${Colour["hyperlink-inverse"]};
        svg {
            color: ${Colour["icon-primary-inverse"]};
        }
    }
`;

export const Wrapper = styled.div<WrapperStyleProps>`
    position: ${(props) => (props.$sticky ? "sticky" : "relative")};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${Motion["duration-800"]} ${Motion["ease-default"]};
    background: ${Colour["bg-inverse-subtle"]};
    border-radius: ${Radius["none"]};
    z-index: 25;
    cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
`;

export const Container = styled(Layout.Content)``;

export const ContentContainer = styled.div`
    flex: 1;
    align-items: flex-start;
    padding: ${Spacing["spacing-24"]} 0;
`;

export const Content = styled.div<ContentStyleProps>`
    display: flex;
    flex: 1;
    align-items: flex-start;

    ${Font["body-baseline-regular"]}
    color: ${Colour["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${Font["body-baseline-semibold"]}
        color: ${Colour["text-inverse"]};
    }

    a {
        ${Font["body-baseline-regular"]}
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
    margin-right: -${Spacing["spacing-24"]};
    padding-left: ${Spacing["spacing-16"]};
    height: max-content;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Colour["icon-inverse"]};
    }
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-4"]};
    align-self: flex-start;
    margin-top: ${Spacing["spacing-8"]};

    border: none;
    background: transparent;
    color: ${Colour["hyperlink-inverse"]};
    ${Font["body-md-semibold"]};

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
    margin: ${Spacing["spacing-24"]} ${Spacing["spacing-24"]} 0 0;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
        color: ${Colour["hyperlink-inverse"]};
    }
`;
