"use strict";var t=require("../_virtual/_tslib.js"),e=require("react/jsx-runtime"),r=require("react"),i=require("styled-components"),a=require("../v2_media/media.js");function d(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=d(r),s=d(i);const c=n.default.forwardRef(((r,i)=>{const{children:a,"data-testid":d="section",stretch:n=!1}=r,s=t.__rest(r,["children","data-testid","stretch"]);return e.jsx(o,Object.assign({ref:i,"data-testid":d,$stretch:n},s,{children:a}))})),o=s.default.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?i.css`
                ${a.V2_MediaQuery.MaxWidth.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:i.css`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`;exports.V2_Section=c;
//# sourceMappingURL=section.js.map
