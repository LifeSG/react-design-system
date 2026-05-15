import i,{css as e}from"styled-components";import{Colour as o,Border as t,Radius as r,Spacing as d,Font as n}from"../../theme/index.js";import{Typography as s}from"../../typography/typography.js";import{HEADER_HEIGHT as a,TIME_INDICATOR_WIDTH as l,MIN_COLUMN_WIDTH as p,CELL_HEIGHT as $}from"../const.js";import{IconButton as g}from"../../icon-button/icon-button.js";import{lineClampCss as c}from"../../shared/styles/index.js";const b=i(g)`
    color: ${o.icon};
`,h=i.div`
    width: 2rem;
`,m=i.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`,u=i.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25rem;
    height: 100%;
    border: ${t["width-010"]} ${t.solid} ${o.border};
    border-radius: ${r.md};
    background: ${o.bg};
`,x=i.div`
    z-index: 3;
    max-height: ${a}px;
    border-top-right-radius: ${r.md};
    border-top-left-radius: ${r.md};
    position: sticky;
    border: ${t["width-010"]} ${t.solid} ${o.border};
    overflow-x: hidden;
    overflow-y: hidden;

    ${i=>i.$isMobile?e`
                  display: block;
                  overflow: hidden;
              `:e`
                  display: grid;
                  grid-template-columns: ${l}px 1fr;
              `}
`,f=i.div`
    min-width: ${l}px;
    background: ${o["bg-strong"]};
    position: sticky;
    left: 0;
`,w=i.div`
    display: grid;
    grid-template-columns: repeat(${i=>i.$columnCount}, 1fr);
`,y=i.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: ${p}px;
    padding: ${d["spacing-16"]} ${d["spacing-8"]};
    background: ${o["bg-strong"]};
    border-right: ${t["width-010"]} ${t.solid} ${o.border};
    &:last-child {
        border-right: none;
    }
`,v=i.div`
    width: 15rem;
    padding-left: ${d["spacing-16"]};
`,k=i(s.BodyMD)`
    color: ${o["text-primary"]};
    font-weight: ${n.Spec["weight-semibold"]};
    margin-top: 0;
    ${c(2)}
    text-overflow: ellipsis;
    word-wrap: break-word;
`,j=i(s.BodySM)`
    margin-top: ${d["spacing-8"]};
    background-color: ${o["bg-success-hover"]};
    border-radius: ${r.full};
    width: fit-content;
    padding: ${d["spacing-4"]} ${d["spacing-8"]};
    color: ${o["text-success"]};
    font-weight: ${n.Spec["weight-regular"]};
    span {
        font-weight: ${n.Spec["weight-semibold"]};
    }
`,S=i.div`
    display: grid;
    grid-template-columns: ${l}px 1fr;
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${t["width-010"]} ${t.solid} ${o.border};
    border-top: none;
    border-bottom-right-radius: ${r.md};
    border-bottom-left-radius: ${r.md};
`,z=i.div`
    display: grid;
    grid-template-columns: repeat(${i=>i.$columnCount}, 1fr);
    min-width: max-content;
    position: relative;
`,B=i.div`
    display: flex;
    flex-direction: column;
    min-width: ${p}px;
    min-height: fit-content;
    border-right: ${t["width-010"]} ${t.solid} ${o.border};
    &:last-child {
        border-right: none;
    }
`,M=i.div`
    min-height: ${$}px;
    position: relative;
    border-bottom: ${t["width-010"]} solid ${o.border};
    ${i=>i.$dashed&&e`
            border-bottom-style: dashed;
        `}
    cursor: pointer;
`,C=i(s.BodyXS)`
    margin-top: 0;
    overflow: hidden;
    width: calc(100% - 27px);
    padding: 2px ${d["spacing-8"]};
    position: absolute;
    top: ${i=>i.$offsetTop||0}px;
    ${n["body-xs-semibold"]};
    border-radius: ${r.sm};
    z-index: 1;
    height: ${i=>i.$duration?i.$duration/30*$-1+"px":$-1+"px"};
    display: flex;
    justify-content: space-between;
    background: ${i=>{switch(i.$status){case"pending":return e`
                    repeating-linear-gradient(
                        135deg,
                        ${o["bg-warning"]},
                        ${o["bg-warning"]} 5px,
                        ${o["bg-warning-hover"]} 5px,
                        ${o["bg-warning-hover"]} 10px
                    )
                `;case"blocked":return o["bg-inverse-subtle"];case"available":return o["bg-success-hover"];case"booked":return o["bg-primary-subtler"];default:return o.bg}}};

    color: ${i=>"blocked"===i.$status?o["text-inverse"]:o["text-subtle"]};

    border-left: ${t["width-040"]} solid
        ${i=>"available"===i.$status?o["icon-success"]:"none"};
`,D=i.span`
    ${n["body-xs-regular"]};
`,T=i.span`
    ${n["body-xs-semibold"]};
`,X=i.div`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${o["icon-primary"]};
    top: ${i=>i.$top}px;
    z-index: 2;
`,q=i.div`
    width: 100%;
    height: ${$-1}px;
`;export{b as ArrowButton,h as ArrowContainer,f as BlankCell,S as BodyContainer,j as Description,q as EmptySlot,x as HeaderContainer,u as LoadingContainer,m as ScheduleContainer,y as ServiceColumn,w as ServiceContainer,v as ServiceHeaderContainer,T as SlotAvailability,M as SlotCell,B as SlotColumn,C as SlotContent,z as SlotGrid,D as SlotTime,X as Timeline,k as Title};
//# sourceMappingURL=schedule-day-view.styles.js.map
