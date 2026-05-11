import { CrossIcon } from "@lifesg/react-icons/cross";
import styled, { css } from "styled-components";

import { ClickableIcon } from "../shared/clickable-icon";
import {
    V3_Colour,
    V3_MediaQuery,
    V3_Motion,
    V3_Shadow,
    V3_Spacing,
} from "../v3_theme";

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
            transition: all 300ms ${V3_Motion["ease-entrance"]};
            transition-delay: 200ms;
        `;
    }

    return css`
        right: -100%;
        transition: all 300ms ${V3_Motion["ease-exit"]};
    `;
};

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    display: none;

    ${V3_MediaQuery.MaxWidth.lg} {
        display: flex;
    }
`;

export const Container = styled.nav<StyleProps>`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${V3_Spacing["spacing-16"]};
    background-color: ${V3_Colour.bg};
    box-shadow: ${V3_Shadow["xs-subtle"]};
    visibility: ${(props) => (props.$show ? "visible" : "hidden")};
    outline: none;

    ${(props) => VISIBILITY_STYLE(props.$show)}
    ${(props) => {
        let viewHeight = "1vh";
        if (props.$viewHeight) {
            viewHeight = `${props.$viewHeight}px`;
        }
        return css`
            height: calc(${viewHeight} * 100);
        `;
    }}

	${V3_MediaQuery.MaxWidth.lg} {
        width: 75%;
    }

    ${V3_MediaQuery.MaxWidth.sm} {
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
    padding: ${V3_Spacing["spacing-40"]} ${V3_Spacing["spacing-20"]}
        ${V3_Spacing["spacing-32"]};
`;

export const CloseIcon = styled(CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
`;

export const CloseButton = styled(ClickableIcon)`
    position: absolute;
    right: -${V3_Spacing["spacing-4"]};
    color: ${V3_Colour["icon"]};

    &:active,
    &:focus {
        color: ${V3_Colour["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`;
