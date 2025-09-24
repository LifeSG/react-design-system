import styled, { css } from "styled-components";
import { MediaQuery, Motion } from "../theme";
import { ModalAnimationDirection } from "./types";

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

    ${MediaQuery.MaxWidth.sm} {
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
            transition: all ${Motion["duration-250"]}
                ${Motion["ease-entrance"]}
            transition-delay: ${Motion["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${props.$animationFrom}: -3%;
            transition: all ${Motion["duration-250"]}
                ${Motion["ease-exit"]};
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
`;
