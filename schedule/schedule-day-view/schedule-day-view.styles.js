import i,{css as e}from"styled-components";import{IconButton as o}from"../../icon-button/icon-button.js";import{lineClampCss as t}from"../../shared/styles/index.js";import{Typography as r}from"../../typography/index.js";import{V3_Colour as d,V3_Border as n,V3_Radius as s,V3_Spacing as a,V3_Font as l}from"../../v3_theme/index.js";import{HEADER_HEIGHT as p,TIME_INDICATOR_WIDTH as $,MIN_COLUMN_WIDTH as g,CELL_HEIGHT as c}from"../const.js";const b=i(o)`
    color: ${d.icon};
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
    border: ${n["width-010"]} ${n.solid} ${d.border};
    border-radius: ${s.md};
    background: ${d.bg};
`,x=i.div`
    z-index: 3;
    max-height: ${p}px;
    border-top-right-radius: ${s.md};
    border-top-left-radius: ${s.md};
    position: sticky;
    border: ${n["width-010"]} ${n.solid} ${d.border};
    overflow-x: hidden;
    overflow-y: hidden;

    ${i=>i.$isMobile?e`
                  display: block;
                  overflow: hidden;
              `:e`
                  display: grid;
                  grid-template-columns: ${$}px 1fr;
              `}
`,f=i.div`
    min-width: ${$}px;
    background: ${d["bg-strong"]};
    position: sticky;
    left: 0;
`,w=i.div`
    display: grid;
    grid-template-columns: repeat(${i=>i.$columnCount}, 1fr);
`,v=i.div`
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
`,y=i.div`
    width: 15rem;
    padding-left: ${a["spacing-16"]};
`,k=i(r.BodyMD)`
    color: ${d["text-primary"]};
    font-weight: ${l.Spec["weight-semibold"]};
    margin-top: 0;
    ${t(2)}
    text-overflow: ellipsis;
    word-wrap: break-word;
`,j=i(r.BodySM)`
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
`,S=i.div`
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
`,z=i.div`
    display: grid;
    grid-template-columns: repeat(${i=>i.$columnCount}, 1fr);
    min-width: max-content;
    position: relative;
`,B=i.div`
    display: flex;
    flex-direction: column;
    min-width: ${g}px;
    min-height: fit-content;
    border-right: ${n["width-010"]} ${n.solid}
        ${d.border};
    &:last-child {
        border-right: none;
    }
`,M=i.div`
    min-height: ${c}px;
    position: relative;
    border-bottom: ${n["width-010"]} solid ${d.border};
    ${i=>i.$dashed&&e`
            border-bottom-style: dashed;
        `}
    cursor: pointer;
`,C=i(r.BodyXS)`
    margin-top: 0;
    overflow: hidden;
    width: calc(100% - 27px);
    padding: 2px ${a["spacing-8"]};
    position: absolute;
    top: ${i=>i.$offsetTop||0}px;
    ${l["body-xs-semibold"]};
    border-radius: ${s.sm};
    z-index: 1;
    height: ${i=>i.$duration?i.$duration/30*c-1+"px":c-1+"px"};
    display: flex;
    justify-content: space-between;
    background: ${i=>{switch(i.$status){case"pending":return e`
                    repeating-linear-gradient(
                        135deg,
                        ${d["bg-warning"]},
                        ${d["bg-warning"]} 5px,
                        ${d["bg-warning-hover"]} 5px,
                        ${d["bg-warning-hover"]} 10px
                    )
                `;case"blocked":return d["bg-inverse-subtle"];case"available":return d["bg-success-hover"];case"booked":return d["bg-primary-subtler"];default:return d.bg}}};

    color: ${i=>"blocked"===i.$status?d["text-inverse"]:d["text-subtle"]};

    border-left: ${n["width-040"]} solid
        ${i=>"available"===i.$status?d["icon-success"]:"none"};
`,D=i.span`
    ${l["body-xs-regular"]};
`,T=i.span`
    ${l["body-xs-semibold"]};
`,X=i.div`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${d["icon-primary"]};
    top: ${i=>i.$top}px;
    z-index: 2;
`,_=i.div`
    width: 100%;
    height: ${c-1}px;
`;export{b as ArrowButton,h as ArrowContainer,f as BlankCell,S as BodyContainer,j as Description,_ as EmptySlot,x as HeaderContainer,u as LoadingContainer,m as ScheduleContainer,v as ServiceColumn,w as ServiceContainer,y as ServiceHeaderContainer,T as SlotAvailability,M as SlotCell,B as SlotColumn,C as SlotContent,z as SlotGrid,D as SlotTime,X as Timeline,k as Title};
//# sourceMappingURL=schedule-day-view.styles.js.map
