import e,{css as t}from"styled-components";import{V3_Border as o,V3_Colour as i,V3_Font as r,V3_Radius as n,V3_Shadow as s}from"../../v3_theme/index.js";import{CELL_HEIGHT as d}from"../const.js";const h=e.div`
    min-height: ${d}px;
    position: relative;
    border-bottom: ${o["width-010"]} solid ${i.border};
    ${e=>e.$dashed&&t`
            border-bottom-style: dashed;
        `}
    cursor: pointer;
`,$=e.div`
    position: absolute;
    top: 0;
    left: ${e=>`calc((100% - 14px) * ${e.$leftPosition} / 100)`};
    width: ${e=>`calc((100% - 14px) * ${e.$actualWidthPercentage} / 100)`};
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: visible;
    z-index: 1;
`,c=e.button`
    background-color: unset;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${i["text-primary"]};
    ${r["body-xs-semibold"]};
    min-height: ${e=>e.$heightPercentage?`${e.$heightPercentage}%`:`${d}px`};
    height: ${e=>e.$heightPercentage?`${e.$heightPercentage}%`:"auto"};
    &:hover {
        border-radius: ${n.sm};
        box-shadow: ${s["sm-subtle"]};
    }
`;export{c as HiddenColumns,h as SlotCell,$ as SlotColumnOverlay};
//# sourceMappingURL=time-cell.styles.js.map
