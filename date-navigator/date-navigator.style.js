import t,{css as e}from"styled-components";import{Button as n}from"../button/button.js";import{IconButton as o}from"../icon-button/icon-button.js";import{V3_Spacing as r,V3_Colour as i,V3_Radius as a}from"../v3_theme/index.js";const s=t(o)`
    margin: ${r["spacing-8"]};
`,c=t.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${i["bg-strong"]};
    border-radius: ${a.sm};
`,l=t(n.Default)`
    color: ${t=>t.$enableDateClick?i["text-primary"]:i.text};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${t=>{if(t.$enableDateClick)return e`
                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`;export{c as Container,s as HeaderArrowButton,l as StyledDateTextButton};
//# sourceMappingURL=date-navigator.style.js.map
