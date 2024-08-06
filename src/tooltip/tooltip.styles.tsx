import { Card } from "src/card";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { v2_MediaQuery } from "../v2_media";
import { Transition } from "../transition";
import { TooltipPosition } from "./types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface TooltipStyleProps {
    position?: TooltipPosition;
    visible?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const getVisibilityStyle = (visible: boolean) => {
    if (visible) {
        return css`
            visibility: "visible";
            opacity: 1;
            transition: ${Transition.Base};
            z-index: 2;
        `;
    } else {
        return css`
            visibility: "hidden";
            opacity: 0;
            transition: ${Transition.Base};
            z-index: -1;
        `;
    }
};

const getBubblePositionStyle = (position: TooltipPosition) => {
    switch (position) {
        case "left":
            return css`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${v2_MediaQuery.MaxWidth.mobileL} {
                    width: auto;
                }
            `;
        case "right":
            return css`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${v2_MediaQuery.MaxWidth.mobileL} {
                    width: auto;
                }
            `;
        case "bottom":
            return css`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${v2_MediaQuery.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;
        case "top":
        default:
            return css`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${v2_MediaQuery.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;
    }
};

export const BubbleWrap = styled.div<TooltipStyleProps>`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${(props) => getBubblePositionStyle(props.position)}
    ${(props) => getVisibilityStyle(props.visible)}
`;

export const Bubble = styled(Card)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`;

export const Arrow = styled.div<TooltipStyleProps>`
    position: absolute;
    overflow: hidden;

    ${(props) => {
        switch (props.position) {
            case "top":
            default:
                return css`
                    width: 50%;
                    height: 30px;
                    top: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px 2px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 16px 8px 0 8px;
                        border-color: ${Color.Neutral[8]} transparent
                            transparent transparent;
                    }
                `;
            case "right":
                return css`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    left: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        right: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 2px 3px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        right: -10%;
                        border-style: solid;
                        border-width: 8px 16px 8px 0;
                        border-color: transparent ${Color.Neutral[8]}
                            transparent transparent;
                    }
                `;
            case "left":
                return css`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    right: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        left: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 4px 0px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        left: -10%;
                        border-style: solid;
                        border-width: 8px 0 8px 16px;
                        border-color: transparent transparent transparent
                            ${Color.Neutral[8]};
                    }
                `;
            case "bottom":
                return css`
                    width: 50%;
                    height: 30px;
                    bottom: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        bottom: -10px;
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px -9px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        bottom: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 0 8px 16px 8px;
                        border-color: transparent transparent
                            ${Color.Neutral[8]} transparent;
                    }
                `;
        }
    }}
`;

export const HOCWrapper = styled.div`
    position: relative;
`;
