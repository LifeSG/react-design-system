import{ChevronRightIcon as t}from"@lifesg/react-icons/chevron-right";import i,{css as n}from"styled-components";import{Typography as e}from"../typography/index.js";import{V3_Spacing as o,V3_MediaQuery as r,V3_Font as a,V3_Colour as l}from"../v3_theme/index.js";const s=i.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${o["spacing-32"]} 0;

    ${r.MaxWidth.xl} {
        margin: ${o["spacing-24"]} 0;
    }

    ${r.MaxWidth.lg} {
        margin: ${o["spacing-16"]} 0;
    }
`,p=i.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${o["spacing-8"]};
    font-size: ${a.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${r.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,g=i.div`
    width: ${o["spacing-64"]};
    height: calc(1lh + ${o["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${t=>{let i;const e="rgba(255,255,255,0.001)",o=l.bg(t);return i="left"===t.$position?`\n\t\t\t\tleft: -8px;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${t.$backgroundColor||o}, \n\t\t\t\t\t${e}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: 8px;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${t.$backgroundColor||o},\n\t\t\t\t\t${e}\n\t\t\t\t);\n\t\t\t`,n`
            ${r.MaxWidth.lg} {
                ${i}
            }
        `}};
`,d=i.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${t=>t.$styleProps||""};
`,c=i(t)`
    height: 1em;
    width: 1em;
    color: ${l["icon-subtle"]};
`,h=i(e.BodyMD)`
    display: inline-block;
    color: ${l["text-subtlest"]};
`,m=i(e.BodyMD)`
    margin: ${o["spacing-8"]} !important;
`,$=i(e.LinkMD)`
    margin: ${o["spacing-8"]} !important;
`;export{c as Caret,p as Content,m as CurrentLabel,g as Fade,d as Item,$ as PreviousLink,h as Slash,s as Wrapper};
//# sourceMappingURL=breadcrumb.style.js.map
