import styled, { css } from "styled-components";
import { v2_MediaQuery } from "../../v2_media";
import { ClickableIcon } from "../clickable-icon";
import { V2_Color } from "../../v2_color";

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
    width: 4rem;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${(props) => {
        let positionStyle;
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

        return `
			${v2_MediaQuery.MaxWidth.tablet} {
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

    ${v2_MediaQuery.MaxWidth.tablet} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${(props) => {
            if (props.$position === "left") {
                return css`
                    justify-content: left;
                    padding-left: 0.5rem;
                `;
            } else {
                return css`
                    justify-content: right;
                    padding-right: 0.5rem;
                `;
            }
        }}

        svg {
            color: ${V2_Color.Neutral[3]};
        }
    }
`;
