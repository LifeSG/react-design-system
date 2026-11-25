"use strict";var e=require("styled-components"),r=require("../../theme/index.js"),i=require("../../typography/typography.js"),t=require("../const.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=o(e);const n=d.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25rem;
    height: 100%;
    border: ${r.Border["width-010"]} ${r.Border.solid} ${r.Colour.border};
    border-radius: ${r.Radius.md};
    background: ${r.Colour.bg};
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
    padding: ${r.Spacing["spacing-24"]};
    color: ${r.Colour["text-primary"]};
`,u=d.default(i.Typography.BodyMD)`
    font-weight: ${r.Font.Spec["weight-semibold"]};
`,c=d.default.div`
    display: grid;
    grid-template-columns: ${t.TIME_INDICATOR_WIDTH}px repeat(7, 1fr);
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${r.Border["width-010"]} ${r.Border.solid} ${r.Colour.border};
`,g=d.default.div`
    grid-column-start: 2;
    grid-column-end: 9;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    min-width: max-content;
`,f=d.default.div`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${r.Colour["icon-primary"]};
    top: ${e=>e.$top}px;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        left: -6px;
        top: -6px;
        width: ${r.Spacing["spacing-12"]};
        height: ${r.Spacing["spacing-12"]};
        border-radius: ${r.Radius.full};
        background: ${r.Colour["icon-primary"]};
        z-index: 1;
    }
`,x=d.default.div`
    display: flex;
    position: relative;
    flex-direction: column;
    border-right: ${r.Border["width-010"]} ${r.Border.solid} ${r.Colour.border};
    &:last-child {
        border-right: none;
    }
`;exports.BlankCell=a,exports.BodyContainer=c,exports.Description=u,exports.HeaderContainer=l,exports.LoadingContainer=n,exports.ServiceContainer=p,exports.ServiceHeader=s,exports.SlotColumn=x,exports.SlotGrid=g,exports.Timeline=f;
//# sourceMappingURL=schedule-week-view.styles.js.map
