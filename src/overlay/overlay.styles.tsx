import styled, { css } from "styled-components";
import { Colour } from "../theme";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $show: boolean;
    $backgroundBlur?: boolean | undefined;
    $disableTransition?: boolean | undefined;
    $zIndex?: number | undefined;
    $stacked?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
const getBackdropFilter = (blur: boolean) => {
    let styleString = "";

    if (blur) {
        styleString += "blur(10px)";
    }

    return styleString.length > 0 ? styleString : "none";
};

export const Root = styled.div<StyleProps>`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${(props) => props.$zIndex};

    ${(props) => {
        if (props.$show) {
            return css`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `;
        }
    }}
`;

export const Wrapper = styled.div<StyleProps>`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) =>
        props.$stacked ? Colour["overlay-subtle"] : Colour["overlay-strong"]};
    backdrop-filter: ${(props) => getBackdropFilter(props.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${(props) => {
        let customStyles = "";
        if (props.$show) {
            customStyles += css`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `;
        } else {
            customStyles += css`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${props.$disableTransition ? "0ms" : "400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `;
        }
        if (props.$disableTransition) {
            customStyles += css`
                transition: none;
            `;
        }

        return customStyles;
    }}
`;
