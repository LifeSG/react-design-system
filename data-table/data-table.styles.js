import e,{css as r}from"styled-components";import{BasicButton as t}from"../shared/input-wrapper/input-wrapper.js";import{lineClampCss as o}from"../shared/styles/index.js";import{Colour as i,Border as d,Radius as l,Font as s,Motion as n,Spacing as a,Shadow as $}from"../theme/index.js";import{Typography as m}from"../typography/typography.js";const c=i.border,p=i.text,g=e.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${d["width-010"]} ${d.solid} ${c};
    border-radius: ${l.md};

    // Hide scrollbar
    &::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,b=e.div`
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
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${d["width-010"]} ${d.solid} ${c}`:"none"};
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
`,u=e(t)`
    ${s["body-md-semibold"]}
    cursor: pointer;
    color: ${i["text-primary"]};
    transition: ${n["duration-150"]} ${n["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    &:hover {
        color: ${i["text-hover"]};
    }
`,w=e.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding: ${a["spacing-16"]} ${a["spacing-24"]};
    border-top: ${d["width-010"]} ${d.solid} ${c};
    background-color: ${i["bg-selected"]};
    transition: all 300ms ease;
    ${e=>e.$float?r`
                transform: translateX(0.5rem) translateY(-2rem);
                border-radius: ${l.sm};
                box-shadow: ${$["xs-subtle"]};
                width: calc(100% - ${a["spacing-16"]});
                border: ${d["width-010"]} ${d.solid} ${c};
            `:r`
                border-radius: ${l.none} ${l.none}
                    ${l.sm} ${l.sm};
            `}
`,y=e.tr`
    background-color: ${i["bg-stronger"]};
    height: 6rem;
    border-bottom: ${d["width-010"]} ${d.solid} ${c};
`,v=e.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${p};
    border-bottom: ${d["width-010"]} ${d.solid} ${c};
    ${e=>{if(e.$isCheckbox)return r`
                width: 4rem;
            `}};
    &:focus-within {
        outline: 2px solid ${i["focus-ring"]};
        outline-offset: -3px;
    }
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
                ${i["bg-selected"]};
            `:e.$alternating?r`
                ${i["bg-strong"]};
            `:r`
                ${i.bg};
            `};
    border-top: ${d["width-010"]} ${d.solid} ${c};
    &:hover {
        ${e=>{if(e.$isSelectable)return r`
                    background-color: ${i["bg-hover-strong"]};
                `}};
    }
`,B=e.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${p};
    border-bottom: ${d["width-010"]} ${d.solid} ${c};
`,C=e(m.BodyBL)`
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
`,E=e(m.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,L=e.td`
    padding: 4rem 0;
`;export{w as ActionBar,x as ActionBarWrapper,B as BodyCell,C as BodyCellContent,j as BodyRow,H as CheckBoxWrapper,L as EmptyViewCell,E as ErrorDisplayTitle,v as HeaderCell,k as HeaderCellWrapper,y as HeaderRow,S as LoaderWrapper,h as Table,f as TableBody,b as TableContainer,g as TableWrapper,u as TextButton};
//# sourceMappingURL=data-table.styles.js.map
