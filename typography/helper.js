import{css as o}from"styled-components";import{lineClampCss as t}from"../shared/styles/index.js";import{V3_Colour as r,V3_Font as e}from"../v3_theme/index.js";const i=(t,r,i=!1)=>o`
        ${e[`${t}-${r}`]}
        ${i?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,m=r=>{if(r)return o`
            ${t(r)}
        `},s=(t=!1,r=!1,e=void 0)=>r?o`
            display: block;
            ${m(e)}
        `:t?o`
            display: inline;
        `:o`
            display: block;
            ${m(e)}
        `,l=(t,e,m,l,n)=>o`
    ${i(t,e||"regular",l)}
    ${s(m,l,n)}
    color: ${r.text};
`;export{l as createTypographyStyles,s as getDisplayStyle,i as getTextStyle};
//# sourceMappingURL=helper.js.map
