import e,{css as t}from"styled-components";import{BasicButton as r}from"../shared/input-wrapper/input-wrapper.js";import{lineClampCss as o}from"../shared/styles/index.js";import{Colour as i,Border as d,Radius as s,Font as l,Motion as n,Spacing as a,Shadow as $}from"../theme/index.js";import{Typography as c}from"../typography/typography.js";const m=i.border,p=i.text,h=e.div`
    /* we separate the overflow styles so that sticky elements can still work
       with horizontal scrolling on supported browsers
       see: https://github.com/w3c/csswg-drafts/issues/12289 */
    overflow-y: ${e=>e.$scrollable?"auto":"clip"};
    overflow-x: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    border: ${d["width-010"]} ${d.solid} ${m};
    border-radius: ${s.md};

    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,b=e.div`
    flex: 1;
`,g=e.table`
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
`,f=e.thead`
    ${e=>{if(e.$stickyHeader)return t`
                position: sticky;
                top: 0;
                z-index: 20;
            `}};
`,w=e.tbody``,u=e.div`
    ${e=>{const r=e.$left?`${e.$left}px`:"0",o=e.$width?`${e.$width}px`:"100%";switch(e.$strategy){case"inline":return t`
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: ${o};
                `;case"fixed":return t`
                    position: fixed;
                    bottom: 0;
                    left: ${r};
                    width: ${o};
                `;case"sticky":return t`
                    position: sticky;
                    bottom: 0;
                    width: ${o};
                `}}}
`,x=e(r)`
    ${l["body-md-semibold"]}
    cursor: pointer;
    color: ${i["text-primary"]};
    transition: ${n["duration-150"]} ${n["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    &:hover {
        color: ${i["text-hover"]};
    }
`,y=e.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding: ${a["spacing-16"]} ${a["spacing-24"]};
    border-top: ${d["width-010"]} ${d.solid} ${m};
    background-color: ${i["bg-selected"]};
    transition: transform ${n["duration-350"]} ${n["ease-default"]};
    ${e=>e.$float?t`
                transform: translateX(0.5rem) translateY(-2rem);
                border-radius: ${s.sm};
                box-shadow: ${$["xs-subtle"]};
                width: calc(100% - ${a["spacing-16"]});
                border: ${d["width-010"]} ${d.solid} ${m};
            `:t`
                border-radius: ${s.none} ${s.none}
                    ${s.sm} ${s.sm};
            `}
`,v=e.div`
    height: 3.5rem;
`,k=e.tr`
    background-color: ${i["bg-stronger"]};
    height: 6rem;
    border-bottom: ${d["width-010"]} ${d.solid} ${m};
`,j=e.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${p};
    border-bottom: ${d["width-010"]} ${d.solid} ${m};
    ${e=>{if(e.$isCheckbox)return t`
                width: 4rem;
            `}};
    &:focus-within {
        outline: 2px solid ${i["focus-ring"]};
        outline-offset: -3px;
    }
`,B=e.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${p};
        margin-left: 0.5rem;
    }
`,C=e.tr`
    background-color: ${e=>e.$isSelected?t`
                ${i["bg-selected"]};
            `:e.$alternating?t`
                ${i["bg-strong"]};
            `:t`
                ${i.bg};
            `};
    border-top: ${d["width-010"]} ${d.solid} ${m};
    &:hover {
        ${e=>{if(e.$isSelectable)return t`
                    background-color: ${i["bg-hover-strong"]};
                `}};
    }

    &:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${d["width-010"]} ${d.solid} ${m}`:"none"};
        }
    }
`,S=e.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${p};
    border-bottom: ${d["width-010"]} ${d.solid} ${m};
`,H=e(c.BodyBL)`
    ${o(2)}
    text-overflow: ellipsis;
`,z=e.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,L=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,E=e(c.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,F=e.td`
    padding: 4rem 0;
`;export{y as ActionBar,v as ActionBarSpacer,u as ActionBarWrapper,S as BodyCell,H as BodyCellContent,C as BodyRow,z as CheckBoxWrapper,F as EmptyViewCell,E as ErrorDisplayTitle,j as HeaderCell,B as HeaderCellWrapper,k as HeaderRow,L as LoaderWrapper,g as Table,w as TableBody,b as TableContainer,f as TableHead,h as TableWrapper,x as TextButton};
//# sourceMappingURL=data-table.styles.js.map
