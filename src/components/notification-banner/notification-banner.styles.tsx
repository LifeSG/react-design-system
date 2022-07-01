import styled from "styled-components";
import { IconButton } from "../button/icon-button";
import { Icon } from "../icon";
import { Layout } from "../layout";
import { Transition } from "../styles/spec";
import { Color } from "../styles/theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface WrapperStyleProps {
    sticky: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div<WrapperStyleProps>`
    position: ${(props) => (props.sticky ? "sticky" : "relative")};
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

export const TextContent = styled.div`
    display: inline-block;
`;

export const StyledIconButton = styled(IconButton)`
    background: transparent;
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;

    img {
        height: 1.5rem;
        width: 1.5rem;
    }

    :focus,
    :active {
        background: transparent;
    }
`;

export const StyledIcon = styled(Icon)`
    font-weight: bold;
    font-size: 2rem;
    color: ${Color.Neutral[8]};
`;
