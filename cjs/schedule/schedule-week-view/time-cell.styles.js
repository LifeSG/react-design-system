"use strict";var e=require("styled-components"),t=require("../../v3_theme/index.js"),o=require("../const.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(e);const n=i.default.div`
    min-height: ${o.CELL_HEIGHT}px;
    position: relative;
    border-bottom: ${t.V3_Border["width-010"]} solid ${t.V3_Colour.border};
    ${t=>t.$dashed&&e.css`
            border-bottom-style: dashed;
        `}
    cursor: pointer;
`,s=i.default.div`
    position: absolute;
    top: 0;
    left: ${e=>`calc((100% - 14px) * ${e.$leftPosition} / 100)`};
    width: ${e=>`calc((100% - 14px) * ${e.$actualWidthPercentage} / 100)`};
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: visible;
    z-index: 1;
`,l=i.default.button`
    background-color: unset;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${t.V3_Colour["text-primary"]};
    ${t.V3_Font["body-xs-semibold"]};
    min-height: ${e=>e.$heightPercentage?`${e.$heightPercentage}%`:`${o.CELL_HEIGHT}px`};
    height: ${e=>e.$heightPercentage?`${e.$heightPercentage}%`:"auto"};
    &:hover {
        border-radius: ${t.V3_Radius.sm};
        box-shadow: ${t.V3_Shadow["sm-subtle"]};
    }
`;exports.HiddenColumns=l,exports.SlotCell=n,exports.SlotColumnOverlay=s;
//# sourceMappingURL=time-cell.styles.js.map
