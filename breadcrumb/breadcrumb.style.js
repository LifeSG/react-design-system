import{ChevronRightIcon as t}from"@lifesg/react-icons/chevron-right";import i,{css as n}from"styled-components";import{Spacing as e,MediaQuery as o,Font as r,Colour as a}from"../theme/index.js";import{Typography as l}from"../typography/typography.js";const s=i.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${e["spacing-32"]} 0;

    ${o.MaxWidth.xl} {
        margin: ${e["spacing-24"]} 0;
    }

    ${o.MaxWidth.lg} {
        margin: ${e["spacing-16"]} 0;
    }
`,p=i.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${e["spacing-8"]};
    font-size: ${r.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${o.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,g=i.div`
    width: ${e["spacing-64"]};
    height: calc(1lh + ${e["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${t=>{let i;const e="rgba(255,255,255,0.001)",r=a.bg(t);return i="left"===t.$position?`\n\t\t\t\tleft: -8px;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${t.$backgroundColor||r}, \n\t\t\t\t\t${e}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: 8px;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${t.$backgroundColor||r},\n\t\t\t\t\t${e}\n\t\t\t\t);\n\t\t\t`,n`
            ${o.MaxWidth.lg} {
                ${i}
            }
        `}};
`,c=i.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${t=>t.$styleProps||""};
`,d=i(t)`
    height: 1em;
    width: 1em;
    color: ${a["icon-subtle"]};
`,h=i(l.BodyMD)`
    display: inline-block;
    color: ${a["text-subtlest"]};
`,m=i(l.BodyMD)`
    margin: ${e["spacing-8"]} !important;
`,$=i(l.LinkMD)`
    margin: ${e["spacing-8"]} !important;
`;export{d as Caret,p as Content,m as CurrentLabel,g as Fade,c as Item,$ as PreviousLink,h as Slash,s as Wrapper};
//# sourceMappingURL=breadcrumb.style.js.map
