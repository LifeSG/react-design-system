import e,{css as t}from"styled-components";import{Typography as r}from"../../typography/index.js";import{V3_Spacing as i,V3_Radius as o,V3_Colour as n,V3_Border as s,V3_Font as a}from"../../v3_theme/index.js";import{CELL_HEIGHT as p}from"../const.js";const l=e(r.BodyXS)`
    width: calc(100% - 1px);
    height: ${e=>e.$duration?e.$duration/30*p-1+"px":p-1+"px"};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${i["spacing-4"]};
    position: absolute;
    top: ${e=>e.$offsetTop||0}px;
    border-radius: ${o.sm};

    background: ${e=>{switch(e.$status){case"pending":return t`
                    repeating-linear-gradient(
                        135deg,
                        ${n["bg-warning"]},
                        ${n["bg-warning"]} 5px,
                        ${n["bg-warning-hover"]} 5px,
                        ${n["bg-warning-hover"]} 10px
                    )
                `;case"blocked":return n["bg-inverse-subtle"];case"available":return n["bg-success-hover"];case"booked":return n["bg-primary-subtler"];default:return n.bg}}};

    color: ${e=>"blocked"===e.$status?n["text-inverse"]:"inherit"};

    border-left: ${s["width-040"]} solid
        ${e=>"available"===e.$status?n["icon-success"]:"none"};
`,d=e.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${a.Spec["weight-regular"]};
`,c=e.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${a.Spec["weight-semibold"]};
`;export{c as SlotAvailability,l as SlotContentContainer,d as SlotServiceName};
//# sourceMappingURL=slot-content.styles.js.map
