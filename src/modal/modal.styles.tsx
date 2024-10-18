import styled from "styled-components";
import { ModalAnimationDirection } from "./types";
import { MediaQuery } from "../theme";

interface Props {
    show: boolean;
    animationFrom?: ModalAnimationDirection;
    verticalHeight?: number;
    offsetTop?: number;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${(props) => visibilityStyle(props.show, props.animationFrom || "bottom")}

    ${MediaQuery.MaxWidth.sm} {
        height: calc(
            ${(props) =>
                    props.verticalHeight
                        ? `${props.verticalHeight}px`
                        : "1vh"} * 100
        );

        top: ${(props) => props.offsetTop || 0}px;
    }
`;
