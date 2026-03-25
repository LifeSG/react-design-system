import i,{css as n}from"styled-components";import{V3_Colour as t,V3_MediaQuery as o,V3_Spacing as e}from"../../v3_theme/index.js";import{ClickableIcon as r}from"../clickable-icon/clickable-icon.js";const l=i.div`
    position: relative;
    width: 100%;
`,a=i.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${i=>{let e;const r="rgba(255,255,255,0.001)",l=t.bg(i);return e="left"===i.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${i.$backgroundColor||(i.$showIndicator?`${l}, ${l}`:`${l}`)},\n                    ${r}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${i.$backgroundColor||(i.$showIndicator?`${l}, ${l}`:`${l}`)},\n                    ${r}\n                );\n            `,n`
            ${o.MaxWidth.lg} {
                ${e}
            }
        `}};
`,s=i.div`
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
`,d=i(r)`
    display: none;

    ${o.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${i=>"left"===i.$position?n`
                    justify-content: left;
                    padding-left: ${e["spacing-8"]};
                `:n`
                    justify-content: right;
                    padding-right: ${e["spacing-8"]};
                `}

        svg {
            color: ${t.icon};
        }
    }
`;export{s as Content,a as Fade,d as FadeIndicatorButton,l as Wrapper};
//# sourceMappingURL=fade-wrapper.style.js.map
