import{ChevronUpIcon as e}from"@lifesg/react-icons/chevron-up";import{animated as o}from"@react-spring/web";import i,{css as t}from"styled-components";import{V3_Colour as n,V3_Border as r,V3_Spacing as d,V3_Radius as a,V3_Motion as s,V3_Font as l,V3_MediaQuery as p}from"../v3_theme/index.js";const $=i.div`
    background-color: ${n.bg};
    border-top: ${r["width-010"]} ${r.solid} ${n.border};
    ${e=>e.$expanded&&t`
            padding-bottom: ${d["spacing-16"]};
        `}
`,c=i.button`
    background: transparent;
    border: none;
    border-radius: ${a.sm};
    outline: none;
    text-align: left;
    user-select: text;

    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${d["spacing-48"]};
    padding: ${d["spacing-16"]} 0;

    ${e=>e.$expanded&&t`
            padding-bottom: ${d["spacing-8"]};
        `}

    ${e=>e.$collapsible&&t`
            cursor: pointer;
        `}

    &:focus-visible {
        outline: 2px solid ${n["focus-ring"]};
        outline-offset: 0;
    }
`,g=i.span`
    flex: 1;
    transition: all ${s["duration-250"]} ${s["ease-standard"]};
    color: ${n.text};

    ${e=>"small"===e.$type?l["heading-xs-bold"]:l["heading-sm-bold"]}
`,m=i.span`
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${s["duration-250"]}${s["ease-default"]};
`,f=i(e)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${n["icon-primary"]};
`,b=o(i.div`
    overflow: hidden;
`),u=i.div`
    display: inline-block;
    padding-right: ${d["spacing-64"]};

    ${p.MaxWidth.lg} {
        padding-right: 0;
    }
`;export{f as ChevronIcon,$ as Container,u as ContentContainer,c as ExpandCollapseButton,b as Expandable,m as IconContainer,g as Title};
//# sourceMappingURL=accordion-item.style.js.map
