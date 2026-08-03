import i,{css as o,keyframes as t}from"styled-components";import"../animations/loading-spinner/loading-spinner.js";import"../animations/loading-dots/loading-dots.js";import{LoadingDotsSpinner as r}from"../animations/loading-dots-spinner/loading-dots-spinner.js";import"react/jsx-runtime";import"react";import{ErrorDisplay as e}from"../error-display/error-display.js";import"../error-display/helper.js";import"../_virtual/_tslib.js";import{Colour as d,Border as n,Shadow as s,Spacing as l}from"../theme/index.js";import{Typography as a}from"../typography/typography.js";import"../popover-v2/popover.styles.js";import"../modal-v2/index.js";import{PopoverTrigger as p}from"../popover-v2/popover-trigger.js";import"../popover-v2/popover-inline/popover-inline.styles.js";import{ROW_HEADER_WIDTH as $,ROW_HEIGHT as m,MIN_HOURLY_INTERVAL_WIDTH as c}from"./const.js";const g=i.div``,h=i.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${$}px auto;
`,x=i.div`
    display: grid;
    align-content: start;
    overflow: scroll;
    position: relative;
    padding-bottom: ${i=>i.$allRecordsLoaded?"0":"128px"};
    isolation: isolate;
    ${i=>{if(i.$loading)return o`
                &:hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,b=i.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${d.bg};
    width: ${$}px;
    height: ${m}px;
    z-index: 2;
    border-bottom: ${n["width-010"]} ${n.solid} ${d.border};
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
`,u=i.div`
    display: grid;
    position: sticky;
    top: 0;
    z-index: 4;
    background-color: ${d.bg};
    grid-template-columns: ${$}px max-content;
    width: max-content;
    min-width: 100%;
    height: ${m}px;
`,w=i.div`
    display: grid;
    background-color: ${d.bg};
    height: ${m}px;
    grid-template-columns: repeat(
        ${i=>i.$numOfColumns},
        ${i=>Math.max(4*i.$intervalWidth,c)}px
    );
    border-bottom: ${n["width-010"]} ${n.solid} ${d.border};
    transition: all 0.5s ease-in-out;
    ${i=>{if(i.$isScrolled)return o`
                box-shadow: ${s["md-subtle"]};
            `}};
`,v=i.div`
    min-width: ${c}px;
    display: flex;
    align-items: flex-end;
    padding-bottom: ${l["spacing-4"]};
`,y=i(a.BodySM)`
    color: ${d["text-subtler"]};
`,f=i.div`
    width: max-content;
    min-width: 100%;
`,j=i.div`
    display: grid;
    grid-template-columns: ${$}px max-content;
    width: max-content;
    min-width: 100%;
    height: ${m}px;
`,k=i.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${d.bg};
    z-index: 3;
    width: ${$}px;
    height: ${m}px;
    text-align: right;
    padding: 0 ${l["spacing-16"]} 0 ${l["spacing-32"]};
    border-bottom: ${n["width-010"]} ${n.solid} ${d.border};
    border-right: ${n["width-005"]} ${n.solid}
        ${d["border-primary"]};
    border-left: ${n["width-010"]} ${n.solid} ${d.border};
    transition: all 0.5s ease-in-out;
    ${i=>i.$isScrolled?o`
                box-shadow: ${s["md-subtle"]};
                clip-path: inset(0 -6px 0 0);
            `:o`
                box-shadow: none;
            `};
`,S=i(a.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${d["text-primary"]};
    &:hover {
        cursor: ${i=>i.$isClickable?"pointer":"default"};
    }
`,z=i(a.BodyXS)`
    display: inline-flex;
    gap: ${l["spacing-4"]};
    align-items: center;
    color: ${d["text-subtler"]};
    ${i=>{if(!i.$show)return o`
                display: none;
            `}}
`,B=i(r)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${i=>i.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,C=i(e)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${l["spacing-72"]} 0;
`,M=i.div`
    display: flex;
    border-bottom: ${n["width-010"]} ${n.solid} ${d.border};
`,P=i.div`
    border-right: ${n["width-005"]} ${n.solid}
        ${d["border-primary"]};
    width: ${i=>`${i.$width}px`};
    height: 100%;
    padding: ${l["spacing-20"]} ${l["spacing-12"]};
`,X=t`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,Y=i.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${d.Primitive["neutral-95"]} 8%,
        ${d.Primitive["neutral-100"]} 18%,
        ${d.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${X} 1.5s forwards infinite;
`,_=i(p)`
    max-width: 24rem !important;
    &:hover {
        cursor: default;
    }
`;export{S as ClickableRowHeaderTitle,v as ColumnHeader,w as ColumnHeaderRow,y as ColumnHeaderTitle,g as Container,h as EmptyTableContainer,B as Loader,Y as LoadingBar,P as LoadingCell,M as LoadingWrapper,C as NoResultsFound,b as RowColumnHeader,k as RowHeader,z as RowHeaderSubtitle,_ as StyledPopoverTrigger,f as TimeTableBody,x as TimeTableContainer,u as TimeTableHeaderRow,j as TimeTableRow};
//# sourceMappingURL=timetable.style.js.map
