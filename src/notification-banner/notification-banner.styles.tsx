import { CrossIcon } from "@lifesg/react-icons/cross";
import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { V2_Layout } from "../v2_layout";
import { ClickableIcon } from "../shared/clickable-icon";
import { V2_Text, V2_TextStyleHelper } from "../v2_text";
import { Transition } from "../transition";

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
    color: ${V2_Color.Validation.Orange.Icon};

    svg {
        color: ${V2_Color.Validation.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${V2_Color.Validation.Orange.Icon};
        svg {
            color: ${V2_Color.Validation.Orange.Icon};
        }
    }
`;

export const Wrapper = styled.div<WrapperStyleProps>`
    position: ${(props) => (props.$sticky ? "sticky" : "relative")};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${Transition.Base};
    background: ${V2_Color.Neutral[2]};
    z-index: 25;
    cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
`;

export const Container = styled(V2_Layout.Content)`
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

    ${V2_TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${V2_Color.Neutral[8]};

    p {
        display: inline-block;
    }

    strong {
        ${V2_TextStyleHelper.getFontFamily("Body", "semibold")}
        color: ${V2_Color.Neutral[8]};
    }

    a {
        ${V2_TextStyleHelper.getTextStyle("Body", "regular")}
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

export const ContentLink = styled(V2_Text.Hyperlink.Default)`
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
    color: ${V2_Color.Neutral[8]};
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${V2_Color.Validation.Orange.Icon};
    ${V2_TextStyleHelper.getTextStyle("BodySmall", "semibold")};

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
