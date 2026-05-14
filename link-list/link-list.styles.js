import{ChevronRightIcon as r}from"@lifesg/react-icons/chevron-right";import{MinusIcon as o}from"@lifesg/react-icons/minus";import{PlusIcon as e}from"@lifesg/react-icons/plus";import{animated as t}from"@react-spring/web";import i,{css as d}from"styled-components";import{Typography as n}from"../typography/index.js";import{V3_Colour as m,V3_Border as $}from"../v3_theme/index.js";const l=d`
    height: 1.125rem;
    width: 1.125rem;
    color: ${m["icon-primary"]};
`,a=i.div`
    border-top: ${$["width-010"]} ${$.solid} ${m.border};
    border-bottom: ${$["width-010"]} ${$.solid}
        ${m.border};
`,c=i(n.HeadingSM)`
    color: ${m["text-primary"]};
    margin-bottom: 0.5rem;
`,s=i(n.HeadingXS)`
    color: ${m["text-primary"]};
`,p=i(r)`
    ${l}
`,g=i.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    &:not(:last-of-type) {
        border-bottom: ${$["width-010"]} ${$.solid}
            ${m.border};
    }

    &:hover {
        ${c},
        ${s},
        ${p} {
            color: ${m["text-hover"]};
        }
    }
`,f=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,h=i(n.BodyMD)`
    margin-top: 0.25rem;
`,b=t(i.div`
    overflow: hidden;
`),x=i.div`
    ${r=>r.$border&&d`
            border-top: ${$["width-010"]} ${$.solid}
                ${m.border};
        `}
`,y=i(n.BodyMD)`
    color: ${m["text-primary"]};
`,v=i(e)`
    ${l}
`,u=i(o)`
    ${l}
`,w=i.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${$["width-010"]} ${$.solid} ${m.border};
    gap: 1rem;

    ${r=>r.$loading&&d`
            cursor: default;
            flex-direction: row-reverse;

            ${y},
            ${v},
            ${u} {
                color: ${m["text-disabled"]};
                text-decoration: none;
            }
        `}

    ${r=>!r.$loading&&d`
            &:hover {
                ${y},
                ${v},
                ${u} {
                    color: ${m["text-hover"]};
                    text-decoration: underline;
                }
            }
        `}
`;export{a as Container,h as Description,b as Expandable,x as ExpandableChild,g as ItemContainer,f as ItemContentContainer,p as ItemIcon,c as ItemTitleDefault,s as ItemTitleSmall,w as ToggleButton,y as ToggleButtonLabel,u as ViewLessIcon,v as ViewMoreIcon};
//# sourceMappingURL=link-list.styles.js.map
