import { CrossIcon } from "@lifesg/react-icons/cross";
import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { Colour, Font, Motion } from "../theme";
import { Layout } from "../layout";
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

    :hover,
    :active,
    :visited,
    :focus {
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
    z-index: 25;
    cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
`;

export const Container = styled(Layout.Content)`
    display: flex;
`;

export const ContentContainer = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`;

export const Content = styled.div<ContentStyleProps>`
    display: inline-block;
    width: 100%;

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

    ${(props) => {
        const gradient =
            "linear-gradient(to bottom, black 50%, transparent 100%)";
        if (props.$maxCollapsedHeight)
            return css`
                max-height: ${props.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${gradient};
                mask-image: ${gradient};
            `;
    }}
`;

export const ContentLink = styled(Typography.LinkBL)`
    position: relative;

    ${commonLinkStyle}
`;

export const StyledIconButton = styled(ClickableIcon)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`;

export const StyledIcon = styled(CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Colour["icon-inverse"]};
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

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
