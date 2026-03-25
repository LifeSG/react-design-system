"use strict";var e=require("styled-components"),r=require("../../typography/index.js"),i=require("../../v3_theme/index.js"),t=require("../const.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=o(e);const n=d.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25rem;
    height: 100%;
    border: ${i.V3_Border["width-010"]} ${i.V3_Border.solid} ${i.V3_Colour.border};
    border-radius: ${i.V3_Radius.md};
    background: ${i.V3_Colour.bg};
`,l=d.default.div`
    display: grid;
    grid-template-columns: ${t.TIME_INDICATOR_WIDTH}px repeat(7, 1fr);
    max-height: ${t.HEADER_HEIGHT}px;
`,a=d.default.div`
    min-width: ${t.TIME_INDICATOR_WIDTH}px;
    position: sticky;
    z-index: 2;
`,p=d.default.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-start: 2;
    grid-column-end: 9;
`,s=d.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: ${i.V3_Spacing["spacing-24"]};
    color: ${i.V3_Colour["text-primary"]};
`,u=d.default(r.Typography.BodyMD)`
    font-weight: ${i.V3_Font.Spec["weight-semibold"]};
`,c=d.default.div`
    display: grid;
    grid-template-columns: ${t.TIME_INDICATOR_WIDTH}px repeat(7, 1fr);
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${i.V3_Border["width-010"]} ${i.V3_Border.solid} ${i.V3_Colour.border};
`,g=d.default.div`
    grid-column-start: 2;
    grid-column-end: 9;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    min-width: max-content;
`,x=d.default.div`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${i.V3_Colour["icon-primary"]};
    top: ${e=>e.$top}px;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        left: -6px;
        top: -6px;
        width: ${i.V3_Spacing["spacing-12"]};
        height: ${i.V3_Spacing["spacing-12"]};
        border-radius: ${i.V3_Radius.full};
        background: ${i.V3_Colour["icon-primary"]};
        z-index: 1;
    }
`,f=d.default.div`
    display: flex;
    position: relative;
    flex-direction: column;
    border-right: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
        ${i.V3_Colour.border};
    &:last-child {
        border-right: none;
    }
`;exports.BlankCell=a,exports.BodyContainer=c,exports.Description=u,exports.HeaderContainer=l,exports.LoadingContainer=n,exports.ServiceContainer=p,exports.ServiceHeader=s,exports.SlotColumn=f,exports.SlotGrid=g,exports.Timeline=x;
//# sourceMappingURL=schedule-week-view.styles.js.map
