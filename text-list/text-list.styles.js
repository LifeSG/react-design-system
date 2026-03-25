import t,{css as e}from"styled-components";import{V3_Font as o,V3_Colour as r,V3_MediaQuery as i}from"../v3_theme/index.js";const s=e`
    margin-bottom: ${t=>t.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${t=>t.$size&&o[`${t.$size}-regular`]}
    font-weight: ${o.Spec["weight-regular"]};
    color: ${r.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,n=t.ol`
    ${s}

    margin-left: 3em;

    ${i.MaxWidth.lg} {
        margin-left: 2.5em;
    }

    li {
        position: relative;
    }

    ${t=>{const{reversed:o}=t,r=t.$counterType||"decimal",i=t.$counterSeparator||")";return e`
            li:before {
                content: counter(list, ${r}) "${i}";
                counter-increment: ${o?"list -1":"list"};
                position: absolute;
                left: -2em;
            }
        `}}

    ${t=>{const{reversed:o,start:r}=t;if(r){return e`
                counter-reset: list ${o?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,l=t.ul`
    ${s}

    margin-left: ${t=>t.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${t=>t.$hasCustomIcon?"none":t.$bulletType||"disc"};

    ${t=>t.$hasCustomIcon&&e`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`;export{n as StyledOrderedList,l as StyledUnorderedList};
//# sourceMappingURL=text-list.styles.js.map
