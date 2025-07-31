import styled, { css } from "styled-components";
import { MediaQuery } from "../theme";
import { ModalAnimationDirection } from "./types";

interface Props {
    $show: boolean;
    $animationFrom?: ModalAnimationDirection;
    $verticalHeight?: number;
    $offsetTop?: number;
    $enableScroll?: boolean;
}

const visibilityStyle = (
    show: boolean,
    animationFrom: ModalAnimationDirection
) => {
    if (show) {
        return `
			${animationFrom}: 0;
			opacity: 1;
			transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
			transition-delay: 200ms;
		`;
    }

    return `
		${animationFrom}: -3%;
		opacity: 0;
		transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
	`;
};

export const Container = styled.div<Props>`
    position: relative;
    width: 100%;
    height: 100%;

    ${(props) =>
        props.$enableScroll
            ? css`
                  overflow: auto;
              `
            : css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  overflow: hidden;
              `}

    ${(props) => visibilityStyle(props.$show, props.$animationFrom || "bottom")}

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
`;

export const ScrollContainer = styled.div`
    margin: 4rem 0;
    display: flex;
    justify-content: center;
`;

export const ModalContainer = styled.div`
    ${MediaQuery.MaxWidth.md} {
        width: 90%;
    }
`;
