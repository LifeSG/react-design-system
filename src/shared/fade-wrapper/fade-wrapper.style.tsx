import styled, { css } from "styled-components";
import { Colour, MediaQuery, Spacing } from "../../theme";
import { ClickableIcon } from "../clickable-icon";

// =============================================================================
// STYLE TYPES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface FadeProps {
    $backgroundColor?: string[];
    $position?: "left" | "right";
    $showIndicator?: boolean;
}

interface IndicatorButtonProps {
    $position?: "left" | "right";
}

// =============================================================================
// STYLE COMPONENTS
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const Fade = styled.div<FadeProps>`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${(props) => {
        let positionStyle: string;
        const transparentColor = "rgba(255,255,255,0.001)";

        if (props.$position === "left") {
            positionStyle = `
                left: 0;
                background-image: linear-gradient(
                    to right,
                    ${
                        props.$backgroundColor ||
                        (props.$showIndicator ? "white, white" : "white")
                    },
                    ${transparentColor}
                );
            `;
        } else {
            positionStyle = `
                right: 0;
                background-image: linear-gradient(
                    to left,
                    ${
                        props.$backgroundColor ||
                        (props.$showIndicator ? "white, white" : "white")
                    },
                    ${transparentColor}
                );
            `;
        }

        return css`
            ${MediaQuery.MaxWidth.lg} {
                ${positionStyle}
            }
        `;
    }};
`;

export const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`;

export const FadeIndicatorButton = styled(ClickableIcon)<IndicatorButtonProps>`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${(props) => {
            if (props.$position === "left") {
                return css`
                    justify-content: left;
                    padding-left: ${Spacing["spacing-8"]};
                `;
            } else {
                return css`
                    justify-content: right;
                    padding-right: ${Spacing["spacing-8"]};
                `;
            }
        }}

        svg {
            color: ${Colour["icon"]};
        }
    }
`;
