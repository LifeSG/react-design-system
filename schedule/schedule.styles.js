import o,{css as r}from"styled-components";import{ErrorDisplay as i}from"../error-display/error-display.js";import{V3_Border as d,V3_Colour as e,V3_Radius as t,V3_Spacing as n}from"../v3_theme/index.js";import{MIN_COLUMN_WIDTH as s}from"./const.js";const m=o.div`
    min-width: 320px;
    max-width: 90vw;
    box-sizing: border-box;
    ${o=>{if(o.$loading)return r`
                &:hover {
                    cursor: not-allowed;
                }
            `}}
`,p=o.div`
    height: 100%;
    position: relative;
    overflow: hidden;
`,a=o.div`
    display: grid;
    overflow: auto;
    position: relative;
    grid-template-columns: ${s}px auto;
    border: ${d["width-010"]} ${d.solid} ${e.border};
    border-radius: ${t.md};
    background: ${e.bg};
`,l=o(i)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${n["spacing-72"]} 0;
`;export{m as Container,a as EmptyTableContainer,l as NoResultsFound,p as ScheduleBodyContainer};
//# sourceMappingURL=schedule.styles.js.map
