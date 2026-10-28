import r,{css as o}from"styled-components";import{MIN_COLUMN_WIDTH as i}from"./const.js";import{ErrorDisplay as d}from"../error-display/error-display.js";import"../error-display/helper.js";import{Border as e,Colour as t,Radius as s,Spacing as p}from"../theme/index.js";const n=r.div`
    min-width: 320px;
    max-width: 90vw;
    box-sizing: border-box;
    ${r=>{if(r.$loading)return o`
                &:hover {
                    cursor: not-allowed;
                }
            `}}
`,l=r.div`
    height: 100%;
    position: relative;
    overflow: hidden;
`,m=r.div`
    display: grid;
    overflow: auto;
    position: relative;
    grid-template-columns: ${i}px auto;
    border: ${e["width-010"]} ${e.solid} ${t.border};
    border-radius: ${s.md};
    background: ${t.bg};
`,a=r(d)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${p["spacing-72"]} 0;
`;export{n as Container,m as EmptyTableContainer,a as NoResultsFound,l as ScheduleBodyContainer};
//# sourceMappingURL=schedule.styles.js.map
