import { CrossIcon } from "@lifesg/react-icons/cross";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { IconButton } from "../icon-button";
import { Layout } from "../layout";
import { Text, TextStyleHelper } from "../text";
import { Transition } from "../transition";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface WrapperStyleProps {
    $sticky: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const commonLinkStyle = css`
    color: ${Color.Validation.Orange.Icon};

    svg {
        color: ${Color.Validation.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Color.Validation.Orange.Icon};
        svg {
            color: ${Color.Validation.Orange.Icon};
        }
    }
`;

export const Wrapper = styled.div<WrapperStyleProps>`
    position: ${(props) => (props.$sticky ? "sticky" : "relative")};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${Transition.Base};
    background: ${Color.Neutral[2]};
    z-index: 25;
`;

export const Container = styled(Layout.Content)`
    display: flex;
`;

export const TextContainer = styled.div`
    display: flex;
    flex: 1;
    padding: 1.5rem 0;
`;

export const Content = styled.div`
    display: inline-block;
    width: 100%;

    ${TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${Color.Neutral[8]};

    p {
        display: inline-block;
    }

    strong {
        ${TextStyleHelper.getFontFamily("Body", "semibold")}
        color: ${Color.Neutral[8]};
    }

    a {
        ${TextStyleHelper.getTextStyle("Body", "regular")}
        ${commonLinkStyle}
    }
`;

export const ContentLink = styled(Text.Hyperlink.Default)`
    position: relative;

    ${commonLinkStyle}
`;

export const StyledIconButton = styled(IconButton)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`;

export const StyledIcon = styled(CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Color.Neutral[8]};
`;
