"use strict";var e=require("styled-components"),t=require("../shared/input-wrapper/input-wrapper.js"),r=require("../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e);const p=i.default(t.InputWrapper)`
    ${t=>{if(t.$wrap)return!0===t.$readOnly?e.css`
                    padding: ${r.V3_Spacing["spacing-12"]} 0;
                `:e.css`
                padding: ${r.V3_Spacing["spacing-12"]} ${r.V3_Spacing["spacing-16"]};
            `}}
`,a=i.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${t=>t.$wrap&&e.css`
            height: fit-content;
        `}
`;exports.Container=p,exports.InputContainer=a,exports.MOBILE_WRAP_WIDTH=320;
//# sourceMappingURL=date-range-input.style.js.map
