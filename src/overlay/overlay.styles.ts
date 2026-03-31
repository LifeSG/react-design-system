import styled from "styled-components";

import { Colour } from "../theme";

export const tokens = {
    root: {
        zIndex: "--fds-internal-overlay-root-zIndex",
    },
} as const;

export const Root = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: var(${tokens.root.zIndex});

    &.rootShow {
        height: 100%;
        width: 100vw;
        visibility: visible;
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${Colour["overlay-strong"]};
    backdrop-filter: none;
    transition: opacity 200ms ease;

    &.wrapperStacked {
        background-color: ${Colour["overlay-subtle"]};
    }

    &.wrapperBackgroundBlur {
        backdrop-filter: blur(10px);
    }

    &.wrapperShow {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
        height: 100%;
        width: 100vw;
    }

    &.wrapperHide {
        visibility: hidden;
        opacity: 0;
        transition-delay: 400ms;
        pointer-events: none;
        height: 0;
        width: 0;
    }

    &.wrapperDisableTransition {
        transition: none;
        transition-delay: 0ms;
    }
`;
