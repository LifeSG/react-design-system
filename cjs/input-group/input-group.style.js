"use strict";var e=require("styled-components"),i=require("../input/input.js"),r=require("../shared/input-wrapper/input-wrapper.js"),n=require("../v3_theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);const a=o.default(r.InputBox)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":n.V3_Spacing["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,p=o.default(r.InputBox)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":n.V3_Spacing["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,s=o.default(i.Input)``,d=o.default.div`
    position: relative;
    display: flex;
    align-items: center;

    ${n.V3_Font["body-baseline-regular"]}
    color: ${n.V3_Colour.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${i=>{if(i.$disabled)return e.css`
                color: ${n.V3_Colour["text-subtler"]};
            `}}

    ${i=>"right"===i.$position?e.css`
                    margin-left: ${i.$readOnly?n.V3_Spacing["spacing-4"]:n.V3_Spacing["spacing-12"]};
                `:e.css`
                    margin-right: ${i.$readOnly?n.V3_Spacing["spacing-4"]:n.V3_Spacing["spacing-12"]};
                `};
`;exports.AddonWrapper=a,exports.LabelAddonContainer=d,exports.MainInput=s,exports.NoAddonWrapper=p;
//# sourceMappingURL=input-group.style.js.map
