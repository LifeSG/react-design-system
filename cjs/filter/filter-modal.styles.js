"use strict";var t=require("styled-components"),e=require("../button/button.js"),o=require("../v3_theme/index.js");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=i(t);const n=r.default.div`
    background-color: ${o.V3_Colour["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,a=r.default.div`
    background-color: ${o.V3_Colour.bg};
    height: 100%;
    width: 100%;
`,l=r.default.div`
    height: 100%;
`,d=r.default.div`
    display: flex;
    align-items: center;
    background-color: ${o.V3_Colour.bg};
    ${t=>t.$insetTop&&`padding-top: ${t.$insetTop}px;`}
`,u=r.default.h2`
    ${o.V3_Font["heading-xs-semibold"]}
    flex: 1;
    text-align: center;
    margin: ${o.V3_Spacing["spacing-24"]} 0;
`,p=r.default(e.Button.Small)`
    background-color: transparent;
    height: 100%;
    padding: ${o.V3_Spacing["spacing-24"]} ${o.V3_Spacing["spacing-20"]};
`,s=r.default(e.Button)`
    width: 100%;
`;exports.FilterButton=s,exports.FilterClearButton=p,exports.FilterHeader=d,exports.FilterTitle=u,exports.FloatingWrapper=l,exports.MobileContainer=n,exports.MobileOverlayContainer=a;
//# sourceMappingURL=filter-modal.styles.js.map
