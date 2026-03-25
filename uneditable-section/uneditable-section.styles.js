import r,{css as t}from"styled-components";import{Layout as m}from"../layout/index.js";import{Typography as o}from"../typography/index.js";import{V3_MediaQuery as n,V3_Colour as a}from"../v3_theme/index.js";const e=t`
    grid-column: ${r=>r.$stretch?"1 / -1":"span 8"};

    ${n.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,i=r(m.Content)`
    background: ${({$background:r})=>r?a["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,d=r.div`
    background: ${({$background:r})=>r?a["bg-strong"]:"transparent"};
`,g=r(o.HeadingSM)`
    margin-bottom: 1rem;
    ${e}
`,p=r(o.BodyBL)`
    margin-bottom: 2rem;
    ${e}
`,s=r.div`
    ${e}
`,l=r.ul`
    ${e}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: ${({$fullWidth:r})=>r?"repeat(2, minmax(0, 1fr))":"repeat(8, minmax(0, 1fr))"};

    ${n.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${n.MaxWidth.sm} {
        column-gap: 1rem;
    }

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;export{s as CustomSection,p as Description,d as FullWidthWrapper,l as GridUl,g as Title,i as Wrapper};
//# sourceMappingURL=uneditable-section.styles.js.map
