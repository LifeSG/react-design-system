"use strict";var e=require("styled-components"),t=require("../../v3_theme/index.js"),l=require("../styles/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=i(e);const o=r.default.div`
    font-weight: ${e=>e.$bold?t.V3_Font.Spec["weight-semibold"]:t.V3_Font.Spec["weight-regular"]};

    ${l=>l.$disabled?e.css`
                color: ${t.V3_Colour["text-disabled"]};
            `:l.$selected?e.css`
                color: ${t.V3_Colour["text-selected"]};
            `:e.css`
                color: ${t.V3_Colour.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&l.lineClampCss(e.$maxLines||2)}
    overflow-wrap: break-word;
`,n=r.default.div`
    color: ${t.V3_Colour["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&l.lineClampCss(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${l=>"next-line"===l.$labelDisplayType?e.css`
                    ${t.V3_Font["body-md-semibold"]}
                `:e.css`
                    ${t.V3_Font["body-baseline-regular"]}
                `}
`,s=r.default.span`
    font-weight: ${t.V3_Font.Spec["weight-semibold"]};
`,a=r.default.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?t.V3_Font["body-md-regular"]:t.V3_Font["body-baseline-regular"]}

    ${t=>{switch(t.$labelDisplayType){case"next-line":return e.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return e.css`
                    ${o} {
                        display: inline;
                    }

                    ${n} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,d=r.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,c=r.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;exports.Label=a,exports.MatchedText=s,exports.PrimaryText=o,exports.SecondaryText=n,exports.TruncateFirstLine=d,exports.TruncateSecondLine=c;
//# sourceMappingURL=dropdown-label.styles.js.map
