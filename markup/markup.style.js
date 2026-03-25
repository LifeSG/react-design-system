import t,{css as o}from"styled-components";import{applyHtmlContentStyle as e}from"../shared/html-content/html-content.js";const r=t.div`
    ${t=>e({textSize:t.$textSize})}
    ${t=>t.$textColor&&o`
            color: ${t.$textColor};
        `}
`;export{r as Container};
//# sourceMappingURL=markup.style.js.map
