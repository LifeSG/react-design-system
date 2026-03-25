import{css as o}from"styled-components";import{V3_BorderValues as r}from"../border/theme-helper.js";import{V3_ColourSemantic as t}from"../colour-semantic/theme-helper.js";const e=e=>n=>{var i,s,d;const{thickness:l,radius:u,colour:c}=e||{},a=null!==(i="function"==typeof l?l(n):l+"px")&&void 0!==i?i:r["width-010"](n),f=null!==(s="function"==typeof u?u(n):u+"px")&&void 0!==s?s:0,h=null!==(d="function"==typeof c?c(n):c)&&void 0!==d?d:t.border(n),p=r.solid;return o`
            border: ${a} ${p} ${h};
            border-radius: ${f};
        `},n=e=>n=>{var i,s,d;const{thickness:l,radius:u,colour:c}=e||{},a=null!==(i="function"==typeof l?l(n):l)&&void 0!==i?i:r["width-010"](n),f=null!==(s="function"==typeof u?u(n):u)&&void 0!==s?s:0,h=null!==(d="function"==typeof c?c(n):c)&&void 0!==d?d:t.border(n),p=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${f}' ry='${f}' stroke='${h}' stroke-width='${a}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return o`
            background-image: url("data:image/svg+xml,${p}");
            border-radius: ${f};
        `};export{n as dashedBorderStyle,e as solidBorderStyle};
//# sourceMappingURL=utils.js.map
