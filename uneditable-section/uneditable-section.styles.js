import r,{css as t}from"styled-components";import{Layout as o}from"../layout/index.js";import{MediaQuery as m,Colour as n}from"../theme/index.js";import{Typography as a}from"../typography/typography.js";const e=t`
    grid-column: ${r=>r.$stretch?"1 / -1":"span 8"};

    ${m.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,i=r(o.Content)`
    background: ${({$background:r})=>r?n["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,d=r.div`
    background: ${({$background:r})=>r?n["bg-strong"]:"transparent"};
`,g=r(a.HeadingSM)`
    margin-bottom: 1rem;
    ${e}
`,p=r(a.BodyBL)`
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

    ${m.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${m.MaxWidth.sm} {
        column-gap: 1rem;
    }

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;export{s as CustomSection,p as Description,d as FullWidthWrapper,l as GridUl,g as Title,i as Wrapper};
//# sourceMappingURL=uneditable-section.styles.js.map
