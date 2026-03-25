"use strict";var e=require("styled-components"),r=require("../shared/input-wrapper/input-wrapper.js"),o=require("../shared/styles/index.js"),t=require("../typography/index.js"),d=require("../v3_theme/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=i(e);const s=d.V3_Colour.border,a=d.V3_Colour.text,n=l.default.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${d.V3_Border["width-010"]} ${d.V3_Border.solid} ${s};
    border-radius: ${d.V3_Radius.md};

    // Hide scrollbar
    &::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,p=l.default.div`
    flex: 1;
`,c=l.default.table`
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

    ${r=>{if(r.$stickyHeader)return e.css`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,$=l.default.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${d.V3_Border["width-010"]} ${d.V3_Border.solid} ${s}`:"none"};
        }
    }
`,u=l.default.div`
    bottom: 0;
    ${r=>{if(r.$fixed){const o=r.$left?`${r.$left}px`:"0",t=r.$width?`${r.$width}px`:"100%";return e.css`
                position: fixed;
                left: ${o};
                width: ${t};
            `}return e.css`
                position: sticky;
                left: 0;
            `}};
`,m=l.default(r.BasicButton)`
    ${d.V3_Font["body-md-semibold"]}
    cursor: pointer;
    color: ${d.V3_Colour["text-primary"]};
    transition: ${d.V3_Motion["duration-150"]} ${d.V3_Motion["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    &:hover {
        color: ${d.V3_Colour["text-hover"]};
    }
`,f=l.default.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding: ${d.V3_Spacing["spacing-16"]} ${d.V3_Spacing["spacing-24"]};
    border-top: ${d.V3_Border["width-010"]} ${d.V3_Border.solid} ${s};
    background-color: ${d.V3_Colour["bg-selected"]};
    transition: all 300ms ease;
    ${r=>r.$float?e.css`
                transform: translateX(0.5rem) translateY(-2rem);
                border-radius: ${d.V3_Radius.sm};
                box-shadow: ${d.V3_Shadow["xs-subtle"]};
                width: calc(100% - ${d.V3_Spacing["spacing-16"]});
                border: ${d.V3_Border["width-010"]} ${d.V3_Border.solid}
                    ${s};
            `:e.css`
                border-radius: ${d.V3_Radius.none} ${d.V3_Radius.none}
                    ${d.V3_Radius.sm} ${d.V3_Radius.sm};
            `}
`,b=l.default.tr`
    background-color: ${d.V3_Colour["bg-stronger"]};
    height: 6rem;
    border-bottom: ${d.V3_Border["width-010"]} ${d.V3_Border.solid}
        ${s};
`,g=l.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${a};
    border-bottom: ${d.V3_Border["width-010"]} ${d.V3_Border.solid}
        ${s};
    ${r=>{if(r.$isCheckbox)return e.css`
                width: 4rem;
            `}};
`,x=l.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${a};
        margin-left: 0.5rem;
    }
`,h=l.default.tr`
    background-color: ${r=>r.$isSelected?e.css`
                ${d.V3_Colour["bg-selected"]};
            `:r.$alternating?e.css`
                ${d.V3_Colour["bg-strong"]};
            `:e.css`
                ${d.V3_Colour.bg};
            `};
    border-top: ${d.V3_Border["width-010"]} ${d.V3_Border.solid} ${s};
    &:hover {
        ${r=>{if(r.$isSelectable)return e.css`
                    background-color: ${d.V3_Colour["bg-hover-strong"]};
                `}};
    }
`,V=l.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${a};
    border-bottom: ${d.V3_Border["width-010"]} ${d.V3_Border.solid}
        ${s};
`,_=l.default(t.Typography.BodyBL)`
    ${o.lineClampCss(2)}
    text-overflow: ellipsis;
`,w=l.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,y=l.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,B=l.default(t.Typography.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,C=l.default.td`
    padding: 4rem 0;
`;exports.ActionBar=f,exports.ActionBarWrapper=u,exports.BodyCell=V,exports.BodyCellContent=_,exports.BodyRow=h,exports.CheckBoxWrapper=w,exports.EmptyViewCell=C,exports.ErrorDisplayTitle=B,exports.HeaderCell=g,exports.HeaderCellWrapper=x,exports.HeaderRow=b,exports.LoaderWrapper=y,exports.Table=c,exports.TableBody=$,exports.TableContainer=p,exports.TableWrapper=n,exports.TextButton=m;
//# sourceMappingURL=data-table.styles.js.map
