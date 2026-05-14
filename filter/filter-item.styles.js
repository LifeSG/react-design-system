import{ChevronDownIcon as i}from"@lifesg/react-icons/chevron-down";import{animated as o}from"@react-spring/web";import e,{css as n}from"styled-components";import{Button as r}from"../button/button.js";import{ClickableIcon as a}from"../shared/clickable-icon/clickable-icon.js";import{V3_Colour as s,V3_Spacing as t,V3_Font as c,V3_Motion as $}from"../v3_theme/index.js";const d=e.div`
    background-color: ${i=>i.$collapsible?s["bg-strong"]:s.bg};
    ${i=>i.$isMobile&&n`
            background-color: ${s["bg-strong"]};
        `}
`,l=e.div`
    display: ${i=>i.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${s.border};

    ${i=>i.$isMobile&&n`
            display: ${i.$showMobileDivider?"block":"none"};
            margin: 0 ${t["spacing-16"]};
        `}
`,g=e.div`
    display: flex;
    align-items: center;

    background-color: ${s.bg};

    ${i=>i.$isMobile&&n`
            background-color: transparent;
        `}
`,b=e(a)`
    margin: 0 0 0 auto;

    color: ${s.icon};
    &:hover {
        color: ${s["icon-hover"]};
    }
`,p=e(i)`
    height: ${c.Spec["body-size-baseline"]};
    width: ${c.Spec["body-size-baseline"]};

    transform: rotate(${i=>i.$expanded?180:0}deg);
    transition: transform ${$["duration-350"]}
        ${$["ease-standard"]};
`,m=e.h3`
    ${c["heading-xs-semibold"]}
    color: ${s.text};

    margin: ${t["spacing-24"]} 0 ${t["spacing-24"]}
        ${t["spacing-20"]};

    ${i=>i.$isMobile&&n`
            ${c["body-md-semibold"]}
            color: ${s["text-subtle"]};

            margin: ${t["spacing-24"]} ${t["spacing-20"]} 0
                ${t["spacing-20"]};
        `}
`,h=o(e.div`
    overflow: hidden;
`),v=e.div`
    padding: ${t["spacing-24"]} ${t["spacing-20"]};
`,f=o(e.div`
    ${i=>i.$minimisable&&"overflow: hidden;"}
    ${i=>i.$height&&`height: ${i.$height}px;`}
`),u=e(r.Small)`
    height: fit-content;
    padding: 0;
    margin: ${t["spacing-16"]} 0 0 0;
`;export{p as ChevronIcon,l as Divider,h as ExpandableItem,v as FilterItemBody,b as FilterItemExpandButton,g as FilterItemHeader,u as FilterItemMinimiseButton,m as FilterItemTitle,d as FilterItemWrapper,f as MinimisableContent};
//# sourceMappingURL=filter-item.styles.js.map
