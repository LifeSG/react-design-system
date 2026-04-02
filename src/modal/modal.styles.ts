import styled from "styled-components";

import { MediaQuery } from "../theme";

export const tokens = {
    container: {
        verticalHeight: "--fds-internal-modal-container-verticalHeight",
        offsetTop: "--fds-internal-modal-container-offsetTop",
    },
} as const;

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;

    ${tokens.container.verticalHeight}: initial;
    ${tokens.container.offsetTop}: initial;

    &.modalContainerFromTop {
        top: -3%;
    }

    &.modalContainerFromBottom {
        bottom: -3%;
    }

    &.modalContainerFromLeft {
        left: -3%;
    }

    &.modalContainerFromRight {
        right: -3%;
    }

    &.modalContainerShow {
        opacity: 1;
        transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
        transition-delay: 200ms;
    }

    &.modalContainerHide {
        opacity: 0;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    }

    &.modalContainerFromTop.modalContainerShow {
        top: 0;
    }

    &.modalContainerFromBottom.modalContainerShow {
        bottom: 0;
    }

    &.modalContainerFromLeft.modalContainerShow {
        left: 0;
    }

    &.modalContainerFromRight.modalContainerShow {
        right: 0;
    }

    ${MediaQuery.MaxWidth.sm} {
        height: calc(var(${tokens.container.verticalHeight}, 1vh) * 100);
        top: var(${tokens.container.offsetTop}, 0px);
    }
`;
