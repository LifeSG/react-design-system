"use strict";var t=require("styled-components"),e=require("../v3_theme/index.js");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const n=i(t).default.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${t=>{return e=t.$show,i=t.$animationFrom||"bottom",e?`\n\t\t\t${i}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${i}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var e,i}}

    ${e.V3_MediaQuery.MaxWidth.sm} {
        height: calc(
            ${t=>t.$verticalHeight?`${t.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${t=>t.$offsetTop||0}px;
    }
`;exports.Container=n;
//# sourceMappingURL=modal.styles.js.map
