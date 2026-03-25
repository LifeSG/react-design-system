import{jsx as t}from"react/jsx-runtime";import o,{css as r}from"styled-components";import{V3_Colour as e,V3_Border as i,V3_Radius as s}from"../../v3_theme/index.js";const n=({className:o,progress:r,color:e,"data-testid":i})=>t(a,{className:o,$innerWidth:r,$color:e,"data-testid":i,children:t("progress",{value:100*r,max:100})}),a=o.div`
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

    ${t=>{const{$color:o}=t;let n;return n=o&&"string"==typeof o?o:o?o(t):e["icon-primary-subtle"](t),r`
            border: ${i["width-010"]} ${i.solid}
                ${n};
            border-radius: ${s.sm};

            &:after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-radius: inherit;
                background: ${n};
                width: ${100*t.$innerWidth}%;
            }
        `}}
`;export{n as ProgressBar};
//# sourceMappingURL=progress-bar.js.map
