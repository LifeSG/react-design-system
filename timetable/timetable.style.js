import i,{css as o,keyframes as t}from"styled-components";import"../animations/loading-dots/loading-dots.js";import{LoadingDotsSpinner as r}from"../animations/loading-dots-spinner/loading-dots-spinner.js";import"../animations/loading-spinner/loading-spinner.js";import"react/jsx-runtime";import"react";import{ErrorDisplay as e}from"../error-display/error-display.js";import{V3_Colour as d,V3_Border as n,V3_Shadow as s,V3_Spacing as l}from"../v3_theme/index.js";import"../_virtual/_tslib.js";import"../modal-v2/index.js";import{Typography as p}from"../typography/index.js";import"../popover-v2/popover.styles.js";import{PopoverTrigger as a}from"../popover-v2/popover-trigger.js";import"../popover-v2/popover-inline/popover-inline.styles.js";import{ROW_HEADER_WIDTH as $,ROW_HEIGHT as m,MIN_HOURLY_INTERVAL_WIDTH as c}from"./const.js";const g=i.div``,h=i.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${$}px auto;
`,b=i.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${$}px fit-content(100%);
    padding-bottom: ${i=>i.$allRecordsLoaded?"0":"128px"};
    ${i=>{if(i.$loading)return o`
                &:hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,u=i.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${d.bg};
    width: ${$}px;
    z-index: 2;
    border-bottom: ${n["width-010"]} ${n.solid}
        ${d.border};
    ${i=>i.$isScrolledX||i.$isScrolledY?o`
                box-shadow: ${s["md-subtle"]};
                clip-path: inset(
                    0 ${i.$isScrolledX?"-0.12px":"0"}
                        ${i.$isScrolledY?"-0.12px":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:o`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,x=i.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${d.bg};
    grid-template-rows: repeat(${i=>i.$numOfRows}, ${m}px);
`,w=i.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${d.bg};
    grid-template-columns: repeat(${i=>i.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${n["width-010"]} ${n.solid}
        ${d.border};
    transition: all 0.5s ease-in-out;
    ${i=>{if(i.$isScrolled)return o`
                box-shadow: ${s["md-subtle"]};
            `}};
`,v=i.div`
    min-width: ${c}px;
    align-content: end;
    margin-bottom: ${l["spacing-4"]};
`,f=i(p.BodySM)`
    color: ${d["text-subtler"]};
`,y=i.div`
    display: grid;
    grid-template-rows: repeat(${i=>i.$numOfRows}, ${m}px);
`,j=i.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${d.bg};
    width: ${$}px;
    height: ${m}px;
    text-align: right;
    padding: 0 ${l["spacing-16"]} 0 ${l["spacing-32"]};
    border-bottom: ${n["width-010"]} ${n.solid}
        ${d.border};
    border-right: ${n["width-005"]} ${n.solid}
        ${d["border-primary"]};
    border-left: ${n["width-010"]} ${n.solid}
        ${d.border};
    transition: all 0.5s ease-in-out;
    ${i=>i.$isScrolled?o`
                box-shadow: ${s["md-subtle"]};
                clip-path: inset(0 -6px 0 0);
            `:o`
                box-shadow: none;
            `};
`,k=i(p.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${d["text-primary"]};
    &:hover {
        cursor: ${i=>i.$isClickable?"pointer":"default"};
    }
`,S=i(p.BodyXS)`
    display: inline-flex;
    gap: ${l["spacing-4"]};
    align-items: center;
    color: ${d["text-subtler"]};
    ${i=>{if(!i.$show)return o`
                display: none;
            `}}
`,z=i(r)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${i=>i.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,B=i(e)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${l["spacing-72"]} 0;
`,C=i.div`
    display: flex;
    border-bottom: ${n["width-010"]} ${n.solid}
        ${d.border};
`,O=i.div`
    border-right: ${n["width-005"]} ${n.solid}
        ${d["border-primary"]};
    width: ${i=>`${i.$width}px`};
    height: 100%;
    padding: ${l["spacing-20"]} ${l["spacing-12"]};
`,P=t`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,R=i.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${d.Primitive["neutral-95"]} 8%,
        ${d.Primitive["neutral-100"]} 18%,
        ${d.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${P} 1.5s forwards infinite;
`,X=i(a)`
    max-width: 24rem !important;
    &:hover {
        cursor: default;
    }
`;export{k as ClickableRowHeaderTitle,v as ColumnHeader,w as ColumnHeaderRow,f as ColumnHeaderTitle,g as Container,y as ContentContainer,h as EmptyTableContainer,z as Loader,R as LoadingBar,O as LoadingCell,C as LoadingWrapper,B as NoResultsFound,u as RowColumnHeader,j as RowHeader,x as RowHeaderColumn,S as RowHeaderSubtitle,X as StyledPopoverTrigger,b as TimeTableContainer};
//# sourceMappingURL=timetable.style.js.map
