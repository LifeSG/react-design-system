import{ChevronDownIcon as i}from"@lifesg/react-icons/chevron-down";import{ExclamationCircleFillIcon as e}from"@lifesg/react-icons/exclamation-circle-fill";import{animated as r}from"@react-spring/web";import n,{css as a}from"styled-components";import{V3_Border as t,V3_Colour as o,V3_Radius as s,V3_Spacing as d,V3_MediaQuery as c,V3_Font as g,V3_Motion as p}from"../v3_theme/index.js";const $=n.section`
    border: ${t["width-010"]} ${t.solid}
        ${o.border};
    border-radius: ${s.sm};
    margin-bottom: ${d["spacing-32"]};
`,l=r(n.div`
    overflow: hidden;
`),m=n.div`
    height: max-content;
`,h=n.div`
    border-top: ${t["width-010"]} ${t.solid}
        ${o.border};
`,f=n.div`
    padding: ${d["spacing-16"]} ${d["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${c.MaxWidth.sm} {
        padding: ${d["spacing-16"]} ${d["spacing-20"]};
        display: block;
    }

    ${i=>{if(i.$interactive)return a`
                cursor: pointer;
            `}}
`,x=n.div`
    ${g["heading-sm-semibold"]}
    color: ${o.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${d["spacing-16"]};
`,w=n.div`
    display: flex;
`,b=n(e)`
    height: ${g.Spec["heading-size-sm"]};
    width: ${g.Spec["heading-size-sm"]};
    align-self: center;
    margin-right: ${d["spacing-40"]};
    flex-shrink: 0;

    ${c.MaxWidth.sm} {
        margin-right: 0;
    }

    ${i=>{switch(i.$displayState){case"error":return a`
                    color: ${o["icon-error"]};
                `;case"warning":return a`
                    color: ${o["icon-warning"]};
                `}}}
`,u=n.div`
    display: flex;
    margin-left: auto;
    ${c.MaxWidth.sm} {
        flex-direction: column;
    }
    ${i=>{if(i.$collapsible)return a`
                margin-right: ${d["spacing-40"]};
                ${c.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${d["spacing-16"]};
                }
            `}}
`,v=n.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${d["spacing-16"]};
    margin: -${d["spacing-16"]};
    display: flex;
    align-items: center;

    ${c.MaxWidth.sm} {
        margin: -${d["spacing-16"]} -${d["spacing-16"]} -${d["spacing-16"]} 0;
        margin-left: auto;
    }
`,y=n.div`
    transform: rotate(${i=>i.$expanded?180:0}deg);
    transition: ${p["duration-250"]} ${p["ease-default"]};
`,M=n(i)`
    color: ${o.icon};
    height: ${g.Spec["heading-size-sm"]};
    width: ${g.Spec["heading-size-sm"]};
`;export{b as AlertIcon,u as CallToActionContainer,h as ChildContainer,$ as Container,l as Expandable,v as Handle,M as HandleIcon,y as HandleIconContainer,f as Header,x as LabelText,w as LabelWrapper,m as NonExpandable};
//# sourceMappingURL=box-container.styles.js.map
