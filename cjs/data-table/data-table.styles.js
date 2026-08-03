"use strict";var e=require("styled-components"),r=require("../shared/input-wrapper/input-wrapper.js"),o=require("../shared/styles/index.js"),t=require("../theme/index.js"),i=require("../typography/typography.js");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=d(e);const l=t.Colour.border,a=t.Colour.text,n=s.default.div`
    /* we separate the overflow styles so that sticky elements can still work
       with horizontal scrolling on supported browsers
       see: https://github.com/w3c/csswg-drafts/issues/12289 */
    overflow-y: ${e=>e.$scrollable?"auto":"clip"};
    overflow-x: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    border: ${t.Border["width-010"]} ${t.Border.solid} ${l};
    border-radius: ${t.Radius.md};

    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,c=s.default.div`
    flex: 1;
`,p=s.default.table`
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
`,$=s.default.thead`
    ${r=>{if(r.$stickyHeader)return e.css`
                position: sticky;
                top: 0;
                z-index: 20;
            `}};
`,u=s.default.tbody``,f=s.default.div`
    ${r=>{const o=r.$left?`${r.$left}px`:"0",t=r.$width?`${r.$width}px`:"100%";switch(r.$strategy){case"inline":return e.css`
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: ${t};
                `;case"fixed":return e.css`
                    position: fixed;
                    bottom: 0;
                    left: ${o};
                    width: ${t};
                `;case"sticky":return e.css`
                    position: sticky;
                    bottom: 0;
                    width: ${t};
                `}}}
`,m=s.default(r.BasicButton)`
    ${t.Font["body-md-semibold"]}
    cursor: pointer;
    color: ${t.Colour["text-primary"]};
    transition: ${t.Motion["duration-150"]} ${t.Motion["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    &:hover {
        color: ${t.Colour["text-hover"]};
    }
`,h=s.default.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding: ${t.Spacing["spacing-16"]} ${t.Spacing["spacing-24"]};
    border-top: ${t.Border["width-010"]} ${t.Border.solid} ${l};
    background-color: ${t.Colour["bg-selected"]};
    transition: transform ${t.Motion["duration-350"]} ${t.Motion["ease-default"]};
    ${r=>r.$float?e.css`
                transform: translateX(0.5rem) translateY(-2rem);
                border-radius: ${t.Radius.sm};
                box-shadow: ${t.Shadow["xs-subtle"]};
                width: calc(100% - ${t.Spacing["spacing-16"]});
                border: ${t.Border["width-010"]} ${t.Border.solid} ${l};
            `:e.css`
                border-radius: ${t.Radius.none} ${t.Radius.none}
                    ${t.Radius.sm} ${t.Radius.sm};
            `}
`,b=s.default.div`
    height: 3.5rem;
`,g=s.default.tr`
    background-color: ${t.Colour["bg-stronger"]};
    height: 6rem;
    border-bottom: ${t.Border["width-010"]} ${t.Border.solid} ${l};
`,x=s.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${a};
    border-bottom: ${t.Border["width-010"]} ${t.Border.solid} ${l};
    ${r=>{if(r.$isCheckbox)return e.css`
                width: 4rem;
            `}};
    &:focus-within {
        outline: 2px solid ${t.Colour["focus-ring"]};
        outline-offset: -3px;
    }
`,w=s.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${a};
        margin-left: 0.5rem;
    }
`,y=s.default.tr`
    background-color: ${r=>r.$isSelected?e.css`
                ${t.Colour["bg-selected"]};
            `:r.$alternating?e.css`
                ${t.Colour["bg-strong"]};
            `:e.css`
                ${t.Colour.bg};
            `};
    border-top: ${t.Border["width-010"]} ${t.Border.solid} ${l};
    &:hover {
        ${r=>{if(r.$isSelectable)return e.css`
                    background-color: ${t.Colour["bg-hover-strong"]};
                `}};
    }

    &:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${t.Border["width-010"]} ${t.Border.solid} ${l}`:"none"};
        }
    }
`,B=s.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${a};
    border-bottom: ${t.Border["width-010"]} ${t.Border.solid} ${l};
`,C=s.default(i.Typography.BodyBL)`
    ${o.lineClampCss(2)}
    text-overflow: ellipsis;
`,v=s.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,k=s.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,R=s.default(i.Typography.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,S=s.default.td`
    padding: 4rem 0;
`;exports.ActionBar=h,exports.ActionBarSpacer=b,exports.ActionBarWrapper=f,exports.BodyCell=B,exports.BodyCellContent=C,exports.BodyRow=y,exports.CheckBoxWrapper=v,exports.EmptyViewCell=S,exports.ErrorDisplayTitle=R,exports.HeaderCell=x,exports.HeaderCellWrapper=w,exports.HeaderRow=g,exports.LoaderWrapper=k,exports.Table=p,exports.TableBody=u,exports.TableContainer=c,exports.TableHead=$,exports.TableWrapper=n,exports.TextButton=m;
//# sourceMappingURL=data-table.styles.js.map
