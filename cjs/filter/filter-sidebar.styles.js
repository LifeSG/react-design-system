"use strict";var e=require("styled-components"),t=require("../button/button.js"),r=require("../theme/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(e);const n=o.default.div`
    background-color: ${r.Colour.bg};
    border: ${r.Border["width-010"]} ${r.Border.solid} ${r.Colour.border};
    border-radius: ${r.Radius.md};
    overflow: hidden;
    width: 100%;
`,a=o.default.div`
    display: flex;
    align-items: center;

    background-color: ${r.Colour.bg};
    color: ${r.Colour.text};
`,d=o.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${r.Spacing["spacing-8"]};
    margin: ${r.Spacing["spacing-24"]} 0 ${r.Spacing["spacing-24"]}
        ${r.Spacing["spacing-20"]};
`,l=o.default.h2`
    ${r.Font["heading-xs-semibold"]}
`,s=o.default(t.Button.Small)`
    background-color: transparent;
    padding-right: ${r.Spacing["spacing-20"]};
    padding-left: ${r.Spacing["spacing-20"]};
    height: 100%;
`;exports.DesktopContainer=n,exports.FilterClearButton=s,exports.FilterHeader=a,exports.FilterTitle=l,exports.FilterTitleGroup=d;
//# sourceMappingURL=filter-sidebar.styles.js.map
