import e,{css as r}from"styled-components";import{BasicButton as t}from"../shared/input-wrapper/input-wrapper.js";import{lineClampCss as o}from"../shared/styles/index.js";import{Typography as i}from"../typography/index.js";import{V3_Colour as d,V3_Border as l,V3_Radius as n,V3_Font as s,V3_Motion as a,V3_Spacing as $,V3_Shadow as m}from"../v3_theme/index.js";const c=d.border,p=d.text,b=e.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${l["width-010"]} ${l.solid} ${c};
    border-radius: ${n.md};

    // Hide scrollbar
    &::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,g=e.div`
    flex: 1;
`,h=e.table`
    th:last-child,
    td:last-child {
        padding-right: 1.5rem;
    }
    th:first-child,
    td:first-child {
        padding-left: 1.5rem;
    }
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;

    ${e=>{if(e.$stickyHeader)return r`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,f=e.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${l["width-010"]} ${l.solid} ${c}`:"none"};
        }
    }
`,x=e.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",o=e.$width?`${e.$width}px`:"100%";return r`
                position: fixed;
                left: ${t};
                width: ${o};
            `}return r`
                position: sticky;
                left: 0;
            `}};
`,w=e(t)`
    ${s["body-md-semibold"]}
    cursor: pointer;
    color: ${d["text-primary"]};
    transition: ${a["duration-150"]} ${a["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    &:hover {
        color: ${d["text-hover"]};
    }
`,u=e.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding: ${$["spacing-16"]} ${$["spacing-24"]};
    border-top: ${l["width-010"]} ${l.solid} ${c};
    background-color: ${d["bg-selected"]};
    transition: all 300ms ease;
    ${e=>e.$float?r`
                transform: translateX(0.5rem) translateY(-2rem);
                border-radius: ${n.sm};
                box-shadow: ${m["xs-subtle"]};
                width: calc(100% - ${$["spacing-16"]});
                border: ${l["width-010"]} ${l.solid}
                    ${c};
            `:r`
                border-radius: ${n.none} ${n.none}
                    ${n.sm} ${n.sm};
            `}
`,v=e.tr`
    background-color: ${d["bg-stronger"]};
    height: 6rem;
    border-bottom: ${l["width-010"]} ${l.solid}
        ${c};
`,y=e.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${p};
    border-bottom: ${l["width-010"]} ${l.solid}
        ${c};
    ${e=>{if(e.$isCheckbox)return r`
                width: 4rem;
            `}};
`,k=e.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${p};
        margin-left: 0.5rem;
    }
`,j=e.tr`
    background-color: ${e=>e.$isSelected?r`
                ${d["bg-selected"]};
            `:e.$alternating?r`
                ${d["bg-strong"]};
            `:r`
                ${d.bg};
            `};
    border-top: ${l["width-010"]} ${l.solid} ${c};
    &:hover {
        ${e=>{if(e.$isSelectable)return r`
                    background-color: ${d["bg-hover-strong"]};
                `}};
    }
`,B=e.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${p};
    border-bottom: ${l["width-010"]} ${l.solid}
        ${c};
`,C=e(i.BodyBL)`
    ${o(2)}
    text-overflow: ellipsis;
`,H=e.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,S=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,E=e(i.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,L=e.td`
    padding: 4rem 0;
`;export{u as ActionBar,x as ActionBarWrapper,B as BodyCell,C as BodyCellContent,j as BodyRow,H as CheckBoxWrapper,L as EmptyViewCell,E as ErrorDisplayTitle,y as HeaderCell,k as HeaderCellWrapper,v as HeaderRow,S as LoaderWrapper,h as Table,f as TableBody,g as TableContainer,b as TableWrapper,w as TextButton};
//# sourceMappingURL=data-table.styles.js.map
