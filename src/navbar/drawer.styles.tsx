import { CrossIcon } from "@lifesg/react-icons/cross";
import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { Colour, MediaQuery, Motion, Spacing } from "../theme";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
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
            transition: all 300ms ${Motion["ease-entrance"]};
            transition-delay: 200ms;
        `;
    }

    return css`
        right: -100%;
        transition: all 300ms ${Motion["ease-exit"]};
    `;
};

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
    }
`;

export const Container = styled.div<StyleProps>`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${Spacing["spacing-16"]};
    background-color: ${Colour.bg};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${(props) => (props.$show ? "visible" : "hidden")};

    ${(props) => VISIBILITY_STYLE(props.$show)}
    ${(props) => {
        const viewHeight = `${props.$viewHeight}px` || "1vh";
        return css`
            height: calc(${viewHeight} * 100);
        `;
    }}

	${MediaQuery.MaxWidth.lg} {
        width: 75%;
    }

    ${MediaQuery.MaxWidth.sm} {
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
    align-items: center;
    position: relative;
    padding: ${Spacing["spacing-40"]} ${Spacing["spacing-20"]}
        ${Spacing["spacing-32"]};
`;

export const CloseIcon = styled(CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
`;

export const CloseButton = styled(ClickableIcon)`
    position: absolute;
    right: -${Spacing["spacing-4"]};
    color: ${Colour["icon"]};

    :active,
    :focus {
        color: ${Colour["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`;
