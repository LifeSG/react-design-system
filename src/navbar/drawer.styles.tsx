import styled, { css } from "styled-components";
import { Color } from "../color";
import { Icon } from "../icon";
import { IconButton } from "../icon-button";
import { MediaQuery } from "../media";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface IStyleProps {
    $show: boolean;
    $viewHeight?: number | undefined;
}

// =============================================================================
// STYLING HELPERS
// =============================================================================
const VISIBILITY_STYLE = (show: boolean | undefined) => {
    if (show) {
        return css`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `;
    }

    return css`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `;
};

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    display: none;

    ${MediaQuery.MaxWidth.tablet} {
        display: flex;
    }
`;

export const Container = styled.div<IStyleProps>`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${(props) => (props.$show ? "visible" : "hidden")};

    ${(props) => VISIBILITY_STYLE(props.$show)}
    ${(props) => {
        const viewHeight = `${props.$viewHeight}px` || "1vh";
        return css`
            height: calc(${viewHeight} * 100);
        `;
    }}

	${MediaQuery.MaxWidth.tablet} {
        width: 75%;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

// -----------------------------------------------------------------------------
// NAV CONTENTS
// -----------------------------------------------------------------------------
export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1rem 2rem;
`;

export const CloseButton = styled(IconButton)`
    position: absolute;
    right: -0.5rem;
    bottom: 0.65rem;

    span {
        color: ${Color.Neutral[1]};
    }

    :active,
    :focus {
        background: transparent;

        span {
            color: ${Color.Primary};
        }
    }
`;

export const CloseIcon = styled(Icon)`
    font-size: 2rem;
    margin-right: -0.25rem;
`;
