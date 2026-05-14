import i,{css as o,keyframes as t}from"styled-components";import"../animations/loading-dots/loading-dots.js";import{LoadingDotsSpinner as e}from"../animations/loading-dots-spinner/loading-dots-spinner.js";import"../animations/loading-spinner/loading-spinner.js";import"react/jsx-runtime";import"react";import"../theme/theme-provider/context.js";import{ErrorDisplay as r}from"../error-display/error-display.js";import"../_virtual/_tslib.js";import"clsx";import{Typography as n}from"../typography/index.js";import"../card/card.styles_1gh9gs3.css";import"../markup/markup.js";import"../modal-v2/index.js";import"../theme/theme-provider/index.js";import{Border as s}from"../theme/tokens/border.js";import{Colour as d}from"../theme/tokens/colour.js";import"../theme/tokens/font.js";import"../theme/tokens/media-query.js";import{Spacing as p}from"../theme/tokens/spacing.js";import"../util/calendar-helper.js";import"../external/dayjs/dayjs.min.js";import"../util/simple-id-generator.js";import"../util/string-helper.js";import"@react-aria/live-announcer";import"../popover-v2/popover.styles_lslc72.css";import{PopoverTrigger as l}from"../popover-v2/popover-trigger.js";import"../popover-v2/popover-inline/popover-inline.styles_ziag9c.css";import{V3_Colour as a,V3_Border as m,V3_Shadow as c,V3_Spacing as $}from"../v3_theme/index.js";import{ROW_HEADER_WIDTH as h,ROW_HEIGHT as g,MIN_HOURLY_INTERVAL_WIDTH as x}from"./const.js";const u=i.div``,b=i.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${h}px auto;
`,v=i.div`
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
`,w=i.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${a.bg};
    width: ${h}px;
    height: ${g}px;
    z-index: 2;
    border-bottom: ${m["width-010"]} ${m.solid}
        ${a.border};
    ${i=>i.$isScrolledX||i.$isScrolledY?o`
                box-shadow: ${c["md-subtle"]};
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
`,f=i.div`
    display: grid;
    position: sticky;
    top: 0;
    z-index: 4;
    background-color: ${d.bg};
    grid-template-columns: ${h}px max-content;
    width: max-content;
    min-width: 100%;
    height: ${g}px;
`,y=i.div`
    display: grid;
    background-color: ${d.bg};
    height: ${g}px;
    grid-template-columns: repeat(
        ${i=>i.$numOfColumns},
        ${i=>Math.max(4*i.$intervalWidth,x)}px
    );
    border-bottom: ${s["width-010"]} ${s.solid} ${d.border};
    transition: all 0.5s ease-in-out;
    ${i=>{if(i.$isScrolled)return o`
                box-shadow: ${c["md-subtle"]};
            `}};
`,j=i.div`
    min-width: ${x}px;
    display: flex;
    align-items: flex-end;
    padding-bottom: ${p["spacing-4"]};
`,k=i(n.BodySM)`
    color: ${a["text-subtler"]};
`,_=i.div`
    width: max-content;
    min-width: 100%;
`,S=i.div`
    display: grid;
    grid-template-columns: ${h}px max-content;
    width: max-content;
    min-width: 100%;
    height: ${g}px;
`,A=i.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${d.bg};
    z-index: 3;
    width: ${h}px;
    height: ${g}px;
    text-align: right;
    padding: 0 ${$["spacing-16"]} 0 ${$["spacing-32"]};
    border-bottom: ${m["width-010"]} ${m.solid}
        ${a.border};
    border-right: ${m["width-005"]} ${m.solid}
        ${a["border-primary"]};
    border-left: ${m["width-010"]} ${m.solid}
        ${a.border};
    transition: all 0.5s ease-in-out;
    ${i=>i.$isScrolled?o`
                box-shadow: ${c["md-subtle"]};
                clip-path: inset(0 -6px 0 0);
            `:o`
                box-shadow: none;
            `};
`,C=i(n.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${a["text-primary"]};
    &:hover {
        cursor: ${i=>i.$isClickable?"pointer":"default"};
    }
`,M=i(n.BodyXS)`
    display: inline-flex;
    gap: ${$["spacing-4"]};
    align-items: center;
    color: ${a["text-subtler"]};
    ${i=>{if(!i.$show)return o`
                display: none;
            `}}
`,P=i(e)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${i=>i.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,z=i(r)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${$["spacing-72"]} 0;
`,B=i.div`
    display: flex;
    border-bottom: ${m["width-010"]} ${m.solid}
        ${a.border};
`,G=i.div`
    border-right: ${m["width-005"]} ${m.solid}
        ${a["border-primary"]};
    width: ${i=>`${i.$width}px`};
    height: 100%;
    padding: ${$["spacing-20"]} ${$["spacing-12"]};
`,H=t`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,I=i.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${a.Primitive["neutral-95"]} 8%,
        ${a.Primitive["neutral-100"]} 18%,
        ${a.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${H} 1.5s forwards infinite;
`,T=i(l)`
    max-width: 24rem !important;
    &:hover {
        cursor: default;
    }
`;export{C as ClickableRowHeaderTitle,j as ColumnHeader,y as ColumnHeaderRow,k as ColumnHeaderTitle,u as Container,b as EmptyTableContainer,P as Loader,I as LoadingBar,G as LoadingCell,B as LoadingWrapper,z as NoResultsFound,w as RowColumnHeader,A as RowHeader,M as RowHeaderSubtitle,T as StyledPopoverTrigger,_ as TimeTableBody,v as TimeTableContainer,f as TimeTableHeaderRow,S as TimeTableRow};
//# sourceMappingURL=timetable.style.js.map
