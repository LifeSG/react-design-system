import e,{css as t}from"styled-components";import{Spacing as r,Radius as o,Colour as i,Border as s,Font as n}from"../../theme/index.js";import{Typography as a}from"../../typography/typography.js";import{CELL_HEIGHT as p}from"../const.js";const l=e(a.BodyXS)`
    width: calc(100% - 1px);
    height: ${e=>e.$duration?e.$duration/30*p-1+"px":p-1+"px"};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${r["spacing-4"]};
    position: absolute;
    top: ${e=>e.$offsetTop||0}px;
    border-radius: ${o.sm};

    background: ${e=>{switch(e.$status){case"pending":return t`
                    repeating-linear-gradient(
                        135deg,
                        ${i["bg-warning"]},
                        ${i["bg-warning"]} 5px,
                        ${i["bg-warning-hover"]} 5px,
                        ${i["bg-warning-hover"]} 10px
                    )
                `;case"blocked":return i["bg-inverse-subtle"];case"available":return i["bg-success-hover"];case"booked":return i["bg-primary-subtler"];default:return i.bg}}};

    color: ${e=>"blocked"===e.$status?i["text-inverse"]:"inherit"};

    border-left: ${s["width-040"]} solid
        ${e=>"available"===e.$status?i["icon-success"]:"none"};
`,d=e.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${n.Spec["weight-regular"]};
`,g=e.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${n.Spec["weight-semibold"]};
`;export{g as SlotAvailability,l as SlotContentContainer,d as SlotServiceName};
//# sourceMappingURL=slot-content.styles.js.map
