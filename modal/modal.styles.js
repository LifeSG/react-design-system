import t from"styled-components";import{V3_MediaQuery as i}from"../v3_theme/index.js";const e=t.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${t=>{return i=t.$show,e=t.$animationFrom||"bottom",i?`\n\t\t\t${e}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${e}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var i,e}}

    ${i.MaxWidth.sm} {
        height: calc(
            ${t=>t.$verticalHeight?`${t.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${t=>t.$offsetTop||0}px;
    }
`;export{e as Container};
//# sourceMappingURL=modal.styles.js.map
