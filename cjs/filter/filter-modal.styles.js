"use strict";var t=require("styled-components"),e=require("../button/button.js"),i=require("../button-with-icon/button-with-icon.js"),o=require("../theme/index.js");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t);const l=r.default.div`
    background-color: ${o.Colour["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,a=r.default.div`
    background-color: ${o.Colour.bg};
    height: 100%;
    width: 100%;
`,p=r.default.div`
    height: 100%;
`,u=r.default.div`
    display: flex;
    align-items: center;
    background-color: ${o.Colour.bg};
    ${t=>t.$insetTop&&`padding-top: ${t.$insetTop}px;`}
`,d=r.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${o.Spacing["spacing-8"]};
    margin: ${o.Spacing["spacing-24"]} 0;
`,s=r.default.h2`
    ${o.Font["heading-xs-semibold"]}
    color: ${o.Colour.text};
`,c=r.default.span`
    display: inline-flex;
    align-items: center;
    gap: ${o.Spacing["spacing-8"]};
`,g=r.default(e.Button.Small)`
    background-color: transparent;
    height: 100%;
    padding: ${o.Spacing["spacing-24"]} ${o.Spacing["spacing-20"]};
`,f=r.default(i.ButtonWithIcon.Default)`
    width: 100%;
`;exports.FilterButton=f,exports.FilterClearButton=g,exports.FilterHeader=u,exports.FilterTitle=s,exports.FilterTitleGroup=d,exports.FilterToggleContent=c,exports.FloatingWrapper=p,exports.MobileContainer=l,exports.MobileOverlayContainer=a;
//# sourceMappingURL=filter-modal.styles.js.map
