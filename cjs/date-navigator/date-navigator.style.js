"use strict";var e=require("styled-components"),t=require("../button/button.js"),n=require("../icon-button/icon-button.js"),r=require("../theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e);const a=i.default(n.IconButton)`
    margin: ${r.Spacing["spacing-8"]};
`,u=i.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${r.Colour["bg-strong"]};
    border-radius: ${r.Radius.sm};
`,s=i.default(t.Button.Default)`
    color: ${e=>e.$enableDateClick?r.Colour["text-primary"]:r.Colour.text};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${t=>{if(t.$enableDateClick)return e.css`
                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`;exports.Container=u,exports.HeaderArrowButton=a,exports.StyledDateTextButton=s;
//# sourceMappingURL=date-navigator.style.js.map
