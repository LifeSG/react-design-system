"use strict";var e=require("styled-components"),r=require("../button/button.js"),t=require("../theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e);const n=i.default.div`
    background-color: ${t.Colour.bg};
    border: ${t.Border["width-010"]} ${t.Border.solid} ${t.Colour.border};
    border-radius: ${t.Radius.md};
    overflow: hidden;
    width: 100%;
`,a=i.default.div`
    display: flex;
    align-items: center;

    background-color: ${t.Colour.bg};
`,d=i.default.h2`
    ${t.Font["heading-xs-semibold"]}
    flex: 1;
    margin: ${t.Spacing["spacing-24"]} 0 ${t.Spacing["spacing-24"]}
        ${t.Spacing["spacing-20"]};
`,l=i.default(r.Button.Small)`
    background-color: transparent;
    padding-right: ${t.Spacing["spacing-20"]};
    padding-left: ${t.Spacing["spacing-20"]};
    height: 100%;
`;exports.DesktopContainer=n,exports.FilterClearButton=l,exports.FilterHeader=a,exports.FilterTitle=d;
//# sourceMappingURL=filter-sidebar.styles.js.map
