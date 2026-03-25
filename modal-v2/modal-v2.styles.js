import t,{css as i}from"styled-components";import{V3_MediaQuery as e,V3_Motion as a}from"../v3_theme/index.js";const o=t.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${e.MaxWidth.sm} {
        ${t=>i`
                height: calc(
                    ${t.$verticalHeight?`${t.$verticalHeight}px`:"1vh"} * 100
                );
            `}

        top: ${t=>t.$offsetTop||0}px;
    }

    ${t=>i`
        &[data-status="initial"] {
            opacity: 0;
            ${t.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${t.$animationFrom}: 0;
            transition: all ${a["duration-250"]}
                ${a["ease-entrance"]};
            transition-delay: ${a["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${t.$animationFrom}: -3%;
            transition: all ${a["duration-250"]}
                ${a["ease-exit"]};
        }
    `}
`,n=t.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,s=t.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`;export{o as Container,s as ModalContainer,n as ScrollContainer};
//# sourceMappingURL=modal-v2.styles.js.map
