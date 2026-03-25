"use strict";var e=require("@lifesg/react-icons/cross"),r=require("styled-components"),t=require("../shared/input-wrapper/input-wrapper.js"),i=require("../v3_theme/index.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(r);const p=n.default(t.BasicInput)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&r.css`
            padding-left: ${e.$visuallyReadOnly?0:i.V3_Spacing["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:i.V3_Spacing["spacing-16"]};
        `}
`,s=n.default(t.BasicButton)`
    height: auto;
    padding: ${i.V3_Spacing["spacing-12"]} ${i.V3_Spacing["spacing-16"]};

    cursor: pointer;
    color: ${i.V3_Colour.icon};

    ${e=>"no-border"===e.$styleType&&r.css`
            margin-right: -${i.V3_Spacing["spacing-12"]};
        `}
`,o=n.default(e.CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,l=n.default.div`
    display: flex;
    width: 100%;
`,d=n.default(t.InputBox)`
    display: flex;
    align-items: center;
    width: 100%;
`;exports.ClearButton=s,exports.ClearIcon=o,exports.DefaultWrapper=d,exports.InputElement=p,exports.NoBorderWrapper=l;
//# sourceMappingURL=input.style.js.map
