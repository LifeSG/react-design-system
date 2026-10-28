import{ChevronRightIcon as i}from"@lifesg/react-icons/chevron-right";import e from"styled-components";import{Spacing as t,MediaQuery as a,Font as r,Colour as n}from"../theme/index.js";import{Typography as o}from"../typography/typography.js";import{FadeWrapper as p}from"../shared/fade-wrapper/fade-wrapper.js";const s=e(p)`
    z-index: 1;
    margin: ${t["spacing-32"]} 0;

    ${a.MaxWidth.xl} {
        margin: ${t["spacing-24"]} 0;
    }

    ${a.MaxWidth.lg} {
        margin: ${t["spacing-16"]} 0;
    }

    [data-id="left-fade"],
    [data-id="right-fade"] {
        height: calc(1lh + ${t["spacing-4"]});
        top: 50%;
        transform: translateY(-50%);
    }
`,l=e.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${t["spacing-8"]};
    font-size: ${r.Spec["body-size-md"]};
    ${a.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,d=e.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${i=>i.$styleProps||""};
`,m=e(i)`
    height: 1em;
    width: 1em;
    color: ${n["icon-subtle"]};
`,g=e(o.BodyMD)`
    display: inline-block;
    color: ${n["text-subtlest"]};
`,c=e(o.BodyMD)`
    margin: ${t["spacing-8"]} !important;
`,h=e(o.LinkMD)`
    margin: ${t["spacing-8"]} !important;
`;export{m as Caret,l as Content,c as CurrentLabel,d as Item,h as PreviousLink,g as Slash,s as Wrapper};
//# sourceMappingURL=breadcrumb.style.js.map
