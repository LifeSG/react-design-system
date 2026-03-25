"use strict";var e=require("styled-components"),s=require("../shared/styles/index.js"),t=require("../v3_theme/index.js");const r=(s,r,o=!1)=>{const i=`${s}-${r}`;return e.css`
        ${t.V3_Font[i]}
        ${o?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},o=t=>{if(t)return e.css`
            ${s.lineClampCss(t)}
        `},i=(s=!1,t=!1,r=void 0)=>t?e.css`
            display: block;
            ${o(r)}
        `:s?e.css`
            display: inline;
        `:e.css`
            display: block;
            ${o(r)}
        `;exports.createTypographyStyles=(s,o,l,c,n)=>e.css`
    ${r(s,o||"regular",c)}
    ${i(l,c,n)}
    color: ${t.V3_Colour.text};
`,exports.getDisplayStyle=i,exports.getTextStyle=r;
//# sourceMappingURL=helper.js.map
