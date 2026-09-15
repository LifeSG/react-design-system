import t from"styled-components";import{MediaQuery as i}from"../theme/index.js";const n=t.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;

    ${t=>{return i=t.$show,n=t.$animationFrom||"bottom",e=t.$ready,i&&!e?`\n\t\t\t${n}: -3%;\n\t\t\topacity: 0;\n\t\t\ttransition: none;\n\t\t`:i?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var i,n,e}}

    ${i.MaxWidth.sm} {
        height: calc(
            ${t=>t.$verticalHeight?`${t.$verticalHeight}px`:"1vh"} * 100
        );
    }
`;export{n as Container};
//# sourceMappingURL=modal.styles.js.map
