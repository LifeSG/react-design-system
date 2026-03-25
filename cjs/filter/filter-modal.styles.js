"use strict";var t=require("styled-components"),e=require("../button/button.js"),o=require("../button-with-icon/button-with-icon.js"),i=require("../v3_theme/index.js");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t);const a=r.default.div`
    background-color: ${i.V3_Colour["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,l=r.default.div`
    background-color: ${i.V3_Colour.bg};
    height: 100%;
    width: 100%;
`,u=r.default.div`
    height: 100%;
`,d=r.default.div`
    display: flex;
    align-items: center;
    background-color: ${i.V3_Colour.bg};
    ${t=>t.$insetTop&&`padding-top: ${t.$insetTop}px;`}
`,s=r.default.h2`
    ${i.V3_Font["heading-xs-semibold"]}
    flex: 1;
    text-align: center;
    margin: ${i.V3_Spacing["spacing-24"]} 0;
`,c=r.default(e.Button.Small)`
    background-color: transparent;
    height: 100%;
    padding: ${i.V3_Spacing["spacing-24"]} ${i.V3_Spacing["spacing-20"]};
`,p=r.default(o.ButtonWithIcon.Default)`
    width: 100%;
`;exports.FilterButton=p,exports.FilterClearButton=c,exports.FilterHeader=d,exports.FilterTitle=s,exports.FloatingWrapper=u,exports.MobileContainer=a,exports.MobileOverlayContainer=l;
//# sourceMappingURL=filter-modal.styles.js.map
