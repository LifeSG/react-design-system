"use strict";var e=require("styled-components"),t=require("../../v3_theme/index.js"),i=require("../clickable-icon/clickable-icon.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e);const r=o.default.div`
    position: relative;
    width: 100%;
`,a=o.default.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${i=>{let n;const o="rgba(255,255,255,0.001)",r=t.V3_Colour.bg(i);return n="left"===i.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${i.$backgroundColor||(i.$showIndicator?`${r}, ${r}`:`${r}`)},\n                    ${o}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${i.$backgroundColor||(i.$showIndicator?`${r}, ${r}`:`${r}`)},\n                    ${o}\n                );\n            `,e.css`
            ${t.V3_MediaQuery.MaxWidth.lg} {
                ${n}
            }
        `}};
`,l=o.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,s=o.default(i.ClickableIcon)`
    display: none;

    ${t.V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${i=>"left"===i.$position?e.css`
                    justify-content: left;
                    padding-left: ${t.V3_Spacing["spacing-8"]};
                `:e.css`
                    justify-content: right;
                    padding-right: ${t.V3_Spacing["spacing-8"]};
                `}

        svg {
            color: ${t.V3_Colour.icon};
        }
    }
`;exports.Content=l,exports.Fade=a,exports.FadeIndicatorButton=s,exports.Wrapper=r;
//# sourceMappingURL=fade-wrapper.style.js.map
