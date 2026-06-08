"use strict";var t=require("styled-components"),e=require("../button/button.js"),i=require("../button-with-icon/button-with-icon.js"),n=require("../theme/index.js");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=o(t);const a=r.default.div`
    background-color: ${n.Colour["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,l=r.default.div`
    background-color: ${n.Colour.bg};
    height: 100%;
    width: 100%;
`,p=r.default.div`
    height: 100%;
`,d=r.default.div`
    display: flex;
    align-items: center;
    background-color: ${n.Colour.bg};
    ${t=>t.$insetTop&&`padding-top: ${t.$insetTop}px;`}
`,s=r.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${n.Spacing["spacing-8"]};
    margin: ${n.Spacing["spacing-24"]} 0;
`,u=r.default.h2`
    ${n.Font["heading-xs-semibold"]}
`,g=r.default.span`
    display: inline-flex;
    align-items: center;
    gap: ${n.Spacing["spacing-8"]};
`,c=r.default(e.Button.Small)`
    background-color: transparent;
    height: 100%;
    padding: ${n.Spacing["spacing-24"]} ${n.Spacing["spacing-20"]};
`,f=r.default(i.ButtonWithIcon.Default)`
    width: 100%;
`;exports.FilterButton=f,exports.FilterClearButton=c,exports.FilterHeader=d,exports.FilterTitle=u,exports.FilterTitleGroup=s,exports.FilterToggleContent=g,exports.FloatingWrapper=p,exports.MobileContainer=a,exports.MobileOverlayContainer=l;
//# sourceMappingURL=filter-modal.styles.js.map
