import{ChevronRightIcon as r}from"@lifesg/react-icons/chevron-right";import{MinusIcon as o}from"@lifesg/react-icons/minus";import{PlusIcon as e}from"@lifesg/react-icons/plus";import{animated as t}from"@react-spring/web";import i,{css as d}from"styled-components";import{Colour as n,Border as m}from"../theme/index.js";import{Typography as $}from"../typography/typography.js";const l=d`
    height: 1.125rem;
    width: 1.125rem;
    color: ${n["icon-primary"]};
`,a=i.div`
    border-top: ${m["width-010"]} ${m.solid} ${n.border};
    border-bottom: ${m["width-010"]} ${m.solid} ${n.border};
`,c=i($.HeadingSM)`
    color: ${n["text-primary"]};
    margin-bottom: 0.5rem;
`,p=i($.HeadingXS)`
    color: ${n["text-primary"]};
`,s=i(r)`
    ${l}
`,g=i.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    &:not(:last-of-type) {
        border-bottom: ${m["width-010"]} ${m.solid} ${n.border};
    }

    &:hover {
        ${c},
        ${p},
        ${s} {
            color: ${n["text-hover"]};
        }
    }
`,h=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,f=i($.BodyMD)`
    margin-top: 0.25rem;
`,b=t(i.div`
    overflow: hidden;
`),y=i.div`
    ${r=>r.$border&&d`
            border-top: ${m["width-010"]} ${m.solid} ${n.border};
        `}
`,x=i($.BodyMD)`
    color: ${n["text-primary"]};
`,u=i(e)`
    ${l}
`,v=i(o)`
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
    border-top: ${m["width-010"]} ${m.solid} ${n.border};
    gap: 1rem;

    ${r=>r.$loading&&d`
            cursor: default;
            flex-direction: row-reverse;

            ${x},
            ${u},
            ${v} {
                color: ${n["text-disabled"]};
                text-decoration: none;
            }
        `}

    ${r=>!r.$loading&&d`
            &:hover {
                ${x},
                ${u},
                ${v} {
                    color: ${n["text-hover"]};
                    text-decoration: underline;
                }
            }
        `}
`;export{a as Container,f as Description,b as Expandable,y as ExpandableChild,g as ItemContainer,h as ItemContentContainer,s as ItemIcon,c as ItemTitleDefault,p as ItemTitleSmall,w as ToggleButton,x as ToggleButtonLabel,v as ViewLessIcon,u as ViewMoreIcon};
//# sourceMappingURL=link-list.styles.js.map
