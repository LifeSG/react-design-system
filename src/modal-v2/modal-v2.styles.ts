import styled, { css } from "styled-components";

import { V3_MediaQuery, V3_Motion } from "../v3_theme";
import type { ModalAnimationDirection } from "./types";

interface Props {
    $show: boolean;
    $animationFrom?: ModalAnimationDirection;
    $verticalHeight?: number;
    $offsetTop?: number;
}

export const Container = styled.div<Props>`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${V3_MediaQuery.MaxWidth.sm} {
        ${(props) => {
            return css`
                height: calc(
                    ${props.$verticalHeight
                            ? `${props.$verticalHeight}px`
                            : "1vh"} * 100
                );
            `;
        }}

        top: ${(props) => props.$offsetTop || 0}px;
    }

    ${(props) => css`
        &[data-status="initial"] {
            opacity: 0;
            ${props.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${props.$animationFrom}: 0;
            transition: all ${V3_Motion["duration-250"]}
                ${V3_Motion["ease-entrance"]};
            transition-delay: ${V3_Motion["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${props.$animationFrom}: -3%;
            transition: all ${V3_Motion["duration-250"]}
                ${V3_Motion["ease-exit"]};
        }
    `}
`;

export const ScrollContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`;

export const ModalContainer = styled.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`;
