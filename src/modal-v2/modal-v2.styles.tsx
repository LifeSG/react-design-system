import styled, { css } from "styled-components";
import { MediaQuery, Motion } from "../theme";
import { ModalAnimationDirection } from "./types";

interface Props {
    $show: boolean;
    $animationFrom?: ModalAnimationDirection;
    $verticalHeight?: number;
    $offsetTop?: number;
}

interface ScrollContainerStyleProps {
    $fullscreen?: boolean;
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
            transition: all ${Motion["duration-250"]} ${Motion["ease-entrance"]};
            transition-delay: ${Motion["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${props.$animationFrom}: -3%;
            transition: all ${Motion["duration-250"]} ${Motion["ease-exit"]};
        }
    `}
`;

export const ScrollContainer = styled.div<ScrollContainerStyleProps>`
    pointer-events: none;

    ${(props) =>
        props.$fullscreen
            ? css`
                  height: 100%;
                  min-height: 100%;
              `
            : css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100%;
              `}
`;

export const ModalContainer = styled.div<ScrollContainerStyleProps>`
    pointer-events: auto;
    width: 100%;
    outline: none;

    ${(props) =>
        props.$fullscreen &&
        css`
            height: 100%;
        `}
`;
