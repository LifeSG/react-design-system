import { CrossIcon } from "@lifesg/react-icons/cross";
import styled, { css } from "styled-components";
import { Color } from "../color";
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
interface StyleProps {
    $compress?: boolean | undefined;
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

export const CloseIcon = styled(CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`;

export const CloseButton = styled(IconButton)`
    position: absolute;
    right: -0.5rem;
    bottom: 0.65rem;
    color: ${Color.Neutral[1]};

    :active,
    :focus {
        color: ${Color.Primary};
    }
`;

export const NavBrandContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

export const NavLogoContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
export const NavSeparator = styled.div<StyleProps>`
    display: flex;
    background-color: ${Color.Neutral[5]};
    height: ${(props) => (props.$compress ? 1.375 : 2)}rem;
    width: 1px;
    left: 29.8px;
    margin-right: 29.8px;

    ${MediaQuery.MaxWidth.tablet} {
        height: 1.375rem;
        margin-right: 23.86px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        height: 1.375rem;
        margin-right: 23.86px;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        height: 1.375rem;
        margin-right: 18.59px;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        height: 1.375rem;
        margin-right: 18.59px;
    }
`;
