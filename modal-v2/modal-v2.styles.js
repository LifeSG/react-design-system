import t,{css as i}from"styled-components";import{MediaQuery as e,Motion as a}from"../theme/index.js";const n=t.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${e.MaxWidth.sm} {
        height: calc(
            ${t=>t.$verticalHeight?`${t.$verticalHeight}px`:"1vh"} * 100
        );
    }

    @supports (height: 100dvh) {
        height: 100dvh;
    }

    ${t=>i`
        &[data-status="initial"] {
            opacity: 0;
            ${t.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${t.$animationFrom}: 0;
            transition: all ${a["duration-250"]} ${a["ease-entrance"]};
            transition-delay: ${a["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${t.$animationFrom}: -3%;
            transition: all ${a["duration-250"]} ${a["ease-exit"]};
        }
    `}
`,o=t.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,s=t.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`;export{n as Container,s as ModalContainer,o as ScrollContainer};
//# sourceMappingURL=modal-v2.styles.js.map
