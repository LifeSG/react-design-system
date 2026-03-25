"use strict";var e=require("styled-components"),r=require("../shared/styles/index.js"),i=require("../v3_theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e);const d=a.default.div`
    overflow: hidden;
    border: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
        ${i.V3_Colour.border};
    border-radius: ${i.V3_Radius.sm};
    background: ${i.V3_Colour.bg};
    padding: ${i.V3_Spacing["spacing-16"]};
    min-width: 23rem;

    ${i.V3_MediaQuery.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${i.V3_Breakpoint["sm-margin"]}px * 2);
    }

    ${i.V3_MediaQuery.MaxWidth.xs} {
        width: calc(100vw - ${i.V3_Breakpoint["xs-margin"]}px * 2);
    }

    ${i.V3_MediaQuery.MaxWidth.xxs} {
        width: calc(100vw - ${i.V3_Breakpoint["xxs-margin"]}px * 2);
    }
`,o=a.default.div`
    display: flex;
    align-items: baseline;
`,l=a.default.div`
    margin: 0 0.5rem;
    color: ${i.V3_Colour.text};
`,n=a.default.div`
    ${e=>"small"===e.$variant?i.V3_Font["body-md-regular"]:i.V3_Font["body-baseline-regular"]}
    text-align: left;
    ${i=>{if("middle"!==i.$truncateType)return e.css`
                    ${r.lineClampCss(1)}
                `}}
    overflow: hidden;
`,s=a.default(n)`
    color: ${i.V3_Colour["text-subtler"]};
`;exports.HistogramSliderDropdownContainer=d,exports.Label=o,exports.PlaceholderLabel=s,exports.Separator=l,exports.ValueLabel=n;
//# sourceMappingURL=select-histogram.styles.js.map
