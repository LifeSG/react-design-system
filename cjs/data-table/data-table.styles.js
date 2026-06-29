"use strict";var e=require("styled-components"),r=require("../shared/input-wrapper/input-wrapper.js"),o=require("../shared/styles/index.js"),t=require("../theme/index.js"),d=require("../typography/typography.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=i(e);const s=t.Colour.border,a=t.Colour.text,n=l.default.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${t.Border["width-010"]} ${t.Border.solid} ${s};
    border-radius: ${t.Radius.md};

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
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${t.Border["width-010"]} ${t.Border.solid} ${s}`:"none"};
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
`,f=l.default(r.BasicButton)`
    ${t.Font["body-md-semibold"]}
    cursor: pointer;
    color: ${t.Colour["text-primary"]};
    transition: ${t.Motion["duration-150"]} ${t.Motion["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    &:hover {
        color: ${t.Colour["text-hover"]};
    }
`,m=l.default.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding: ${t.Spacing["spacing-16"]} ${t.Spacing["spacing-24"]};
    border-top: ${t.Border["width-010"]} ${t.Border.solid} ${s};
    background-color: ${t.Colour["bg-selected"]};
    transition: all 300ms ease;
    ${r=>r.$float?e.css`
                transform: translateX(0.5rem) translateY(-2rem);
                border-radius: ${t.Radius.sm};
                box-shadow: ${t.Shadow["xs-subtle"]};
                width: calc(100% - ${t.Spacing["spacing-16"]});
                border: ${t.Border["width-010"]} ${t.Border.solid} ${s};
            `:e.css`
                border-radius: ${t.Radius.none} ${t.Radius.none}
                    ${t.Radius.sm} ${t.Radius.sm};
            `}
`,g=l.default.tr`
    background-color: ${t.Colour["bg-stronger"]};
    height: 6rem;
    border-bottom: ${t.Border["width-010"]} ${t.Border.solid} ${s};
`,b=l.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${a};
    border-bottom: ${t.Border["width-010"]} ${t.Border.solid} ${s};
    ${r=>{if(r.$isCheckbox)return e.css`
                width: 4rem;
            `}};
    &:focus-within {
        outline: 2px solid ${t.Colour["focus-ring"]};
        outline-offset: -3px;
    }
`,h=l.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${a};
        margin-left: 0.5rem;
    }
`,x=l.default.tr`
    background-color: ${r=>r.$isSelected?e.css`
                ${t.Colour["bg-selected"]};
            `:r.$alternating?e.css`
                ${t.Colour["bg-strong"]};
            `:e.css`
                ${t.Colour.bg};
            `};
    border-top: ${t.Border["width-010"]} ${t.Border.solid} ${s};
    &:hover {
        ${r=>{if(r.$isSelectable)return e.css`
                    background-color: ${t.Colour["bg-hover-strong"]};
                `}};
    }
`,y=l.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${a};
    border-bottom: ${t.Border["width-010"]} ${t.Border.solid} ${s};
`,w=l.default(d.Typography.BodyBL)`
    ${o.lineClampCss(2)}
    text-overflow: ellipsis;
`,B=l.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,C=l.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,v=l.default(d.Typography.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,k=l.default.td`
    padding: 4rem 0;
`;exports.ActionBar=m,exports.ActionBarWrapper=u,exports.BodyCell=y,exports.BodyCellContent=w,exports.BodyRow=x,exports.CheckBoxWrapper=B,exports.EmptyViewCell=k,exports.ErrorDisplayTitle=v,exports.HeaderCell=b,exports.HeaderCellWrapper=h,exports.HeaderRow=g,exports.LoaderWrapper=C,exports.Table=c,exports.TableBody=$,exports.TableContainer=p,exports.TableWrapper=n,exports.TextButton=f;
//# sourceMappingURL=data-table.styles.js.map
