"use strict";var e=require("styled-components"),r=require("../button/button.js"),t=require("../v3_theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e);const n=i.default.div`
    background-color: ${t.V3_Colour.bg};
    border: ${t.V3_Border["width-010"]} ${t.V3_Border.solid}
        ${t.V3_Colour.border};
    border-radius: ${t.V3_Radius.md};
    overflow: hidden;
    width: 100%;
`,a=i.default.div`
    display: flex;
    align-items: center;

    background-color: ${t.V3_Colour.bg};
`,d=i.default.h2`
    ${t.V3_Font["heading-xs-semibold"]}
    flex: 1;
    margin: ${t.V3_Spacing["spacing-24"]} 0 ${t.V3_Spacing["spacing-24"]}
        ${t.V3_Spacing["spacing-20"]};
`,l=i.default(r.Button.Small)`
    background-color: transparent;
    padding-right: ${t.V3_Spacing["spacing-20"]};
    padding-left: ${t.V3_Spacing["spacing-20"]};
    height: 100%;
`;exports.DesktopContainer=n,exports.FilterClearButton=l,exports.FilterHeader=a,exports.FilterTitle=d;
//# sourceMappingURL=filter-sidebar.styles.js.map
