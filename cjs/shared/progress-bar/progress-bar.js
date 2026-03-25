"use strict";var t=require("react/jsx-runtime"),e=require("styled-components"),r=require("../../v3_theme/index.js");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const s=o(e).default.div`
    position: relative;
    width: 100%;
    height: 8px;
    background: transparent;

    progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    ${t=>{const{$color:o}=t;let s;return s=o&&"string"==typeof o?o:o?o(t):r.V3_Colour["icon-primary-subtle"](t),e.css`
            border: ${r.V3_Border["width-010"]} ${r.V3_Border.solid}
                ${s};
            border-radius: ${r.V3_Radius.sm};

            &:after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-radius: inherit;
                background: ${s};
                width: ${100*t.$innerWidth}%;
            }
        `}}
`;exports.ProgressBar=({className:e,progress:r,color:o,"data-testid":i})=>t.jsx(s,{className:e,$innerWidth:r,$color:o,"data-testid":i,children:t.jsx("progress",{value:100*r,max:100})});
//# sourceMappingURL=progress-bar.js.map
