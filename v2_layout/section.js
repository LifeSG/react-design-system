import{__rest as t}from"../_virtual/_tslib.js";import{jsx as r}from"react/jsx-runtime";import e from"react";import i,{css as a}from"styled-components";import{V2_MediaQuery as d}from"../v2_media/media.js";const n=e.forwardRef(((e,i)=>{const{children:a,"data-testid":d="section",stretch:n=!1}=e,m=t(e,["children","data-testid","stretch"]);return r(o,Object.assign({ref:i,"data-testid":d,$stretch:n},m,{children:a}))})),o=i.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?a`
                ${d.MaxWidth.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:a`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`;export{n as V2_Section};
//# sourceMappingURL=section.js.map
