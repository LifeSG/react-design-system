import e,{css as i}from"styled-components";import{Button as o}from"../../button/button.js";import{lineClampCss as t}from"../../shared/styles/index.js";import{Typography as r}from"../../typography/index.js";import{V3_Colour as d,V3_Border as n,V3_Radius as s,V3_Spacing as a,V3_Font as l}from"../../v3_theme/index.js";import{HEADER_HEIGHT as p,TIME_INDICATOR_WIDTH as $,MIN_COLUMN_WIDTH as g,CELL_HEIGHT as c}from"../const.js";const b=e(o)`
    color: ${d.icon};
`,h=e.div`
    width: 2rem;
`,m=e.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`,u=e.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25rem;
    height: 100%;
    border: ${n["width-010"]} ${n.solid} ${d.border};
    border-radius: ${s.md};
    background: ${d.bg};
`,x=e.div`
    z-index: 3;
    max-height: ${p}px;
    border-top-right-radius: ${s.md};
    border-top-left-radius: ${s.md};
    position: sticky;
    border: ${n["width-010"]} ${n.solid} ${d.border};
    overflow-x: hidden;
    overflow-y: hidden;

    ${e=>e.$isMobile?i`
                  display: block;
                  overflow: hidden;
              `:i`
                  display: grid;
                  grid-template-columns: ${$}px 1fr;
              `}
`,f=e.div`
    min-width: ${$}px;
    background: ${d["bg-strong"]};
    position: sticky;
    left: 0;
`,w=e.div`
    display: grid;
    grid-template-columns: repeat(${e=>e.$columnCount}, 1fr);
`,v=e.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: ${g}px;
    padding: ${a["spacing-16"]} ${a["spacing-8"]};
    background: ${d["bg-strong"]};
    border-right: ${n["width-010"]} ${n.solid}
        ${d.border};
    &:last-child {
        border-right: none;
    }
`,y=e.div`
    width: 15rem;
    padding-left: ${a["spacing-16"]};
`,k=e(r.BodyMD)`
    color: ${d["text-primary"]};
    font-weight: ${l.Spec["weight-semibold"]};
    margin-top: 0;
    ${t(2)}
    text-overflow: ellipsis;
    word-wrap: break-word;
`,j=e(r.BodySM)`
    margin-top: ${a["spacing-8"]};
    background-color: ${d["bg-success-hover"]};
    border-radius: ${s.full};
    width: fit-content;
    padding: ${a["spacing-4"]} ${a["spacing-8"]};
    color: ${d["text-success"]};
    font-weight: ${l.Spec["weight-regular"]};
    span {
        font-weight: ${l.Spec["weight-semibold"]};
    }
`,S=e.div`
    display: grid;
    grid-template-columns: ${$}px 1fr;
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${n["width-010"]} ${n.solid} ${d.border};
    border-top: none;
    border-bottom-right-radius: ${s.md};
    border-bottom-left-radius: ${s.md};
`,z=e.div`
    display: grid;
    grid-template-columns: repeat(${e=>e.$columnCount}, 1fr);
    min-width: max-content;
    position: relative;
`,B=e.div`
    display: flex;
    flex-direction: column;
    min-width: ${g}px;
    min-height: fit-content;
    border-right: ${n["width-010"]} ${n.solid}
        ${d.border};
    &:last-child {
        border-right: none;
    }
`,M=e.div`
    min-height: ${c}px;
    position: relative;
    border-bottom: ${n["width-010"]} solid ${d.border};
    ${e=>e.$dashed&&i`
            border-bottom-style: dashed;
        `}
    cursor: pointer;
`,C=e(r.BodyXS)`
    margin-top: 0;
    overflow: hidden;
    width: calc(100% - 27px);
    padding: 2px ${a["spacing-8"]};
    position: absolute;
    top: ${e=>e.$offsetTop||0}px;
    ${l["body-xs-semibold"]};
    border-radius: ${s.sm};
    z-index: 1;
    height: ${e=>e.$duration?e.$duration/30*c-1+"px":c-1+"px"};
    display: flex;
    justify-content: space-between;
    background: ${e=>{switch(e.$status){case"pending":return i`
                    repeating-linear-gradient(
                        135deg,
                        ${d["bg-warning"]},
                        ${d["bg-warning"]} 5px,
                        ${d["bg-warning-hover"]} 5px,
                        ${d["bg-warning-hover"]} 10px
                    )
                `;case"blocked":return d["bg-inverse-subtle"];case"available":return d["bg-success-hover"];case"booked":return d["bg-primary-subtler"];default:return d.bg}}};

    color: ${e=>"blocked"===e.$status?d["text-inverse"]:d["text-subtle"]};

    border-left: ${n["width-040"]} solid
        ${e=>"available"===e.$status?d["icon-success"]:"none"};
`,D=e.span`
    ${l["body-xs-regular"]};
`,T=e.span`
    ${l["body-xs-semibold"]};
`,X=e.div`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${d["icon-primary"]};
    top: ${e=>e.$top}px;
    z-index: 2;
`,_=e.div`
    width: 100%;
    height: ${c-1}px;
`;export{b as ArrowButton,h as ArrowContainer,f as BlankCell,S as BodyContainer,j as Description,_ as EmptySlot,x as HeaderContainer,u as LoadingContainer,m as ScheduleContainer,v as ServiceColumn,w as ServiceContainer,y as ServiceHeaderContainer,T as SlotAvailability,M as SlotCell,B as SlotColumn,C as SlotContent,z as SlotGrid,D as SlotTime,X as Timeline,k as Title};
//# sourceMappingURL=schedule-day-view.styles.js.map
