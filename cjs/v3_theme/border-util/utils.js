"use strict";var e=require("styled-components"),r=require("../border/theme-helper.js"),o=require("../colour-semantic/theme-helper.js");exports.dashedBorderStyle=t=>s=>{var i,n,d;const{thickness:l,radius:u,colour:a}=t||{},c=null!==(i="function"==typeof l?l(s):l)&&void 0!==i?i:r.V3_BorderValues["width-010"](s),h=null!==(n="function"==typeof u?u(s):u)&&void 0!==n?n:0,p=null!==(d="function"==typeof a?a(s):a)&&void 0!==d?d:o.V3_ColourSemantic.border(s),f=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${h}' ry='${h}' stroke='${p}' stroke-width='${c}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return e.css`
            background-image: url("data:image/svg+xml,${f}");
            border-radius: ${h};
        `},exports.solidBorderStyle=t=>s=>{var i,n,d;const{thickness:l,radius:u,colour:a}=t||{},c=null!==(i="function"==typeof l?l(s):l+"px")&&void 0!==i?i:r.V3_BorderValues["width-010"](s),h=null!==(n="function"==typeof u?u(s):u+"px")&&void 0!==n?n:0,p=null!==(d="function"==typeof a?a(s):a)&&void 0!==d?d:o.V3_ColourSemantic.border(s),f=r.V3_BorderValues.solid;return e.css`
            border: ${c} ${f} ${p};
            border-radius: ${h};
        `};
//# sourceMappingURL=utils.js.map
