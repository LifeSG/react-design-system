"use strict";var e=require("styled-components"),r=require("../shared/styles/index.js"),i=require("../theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e);const d=a.default.div`
    overflow: hidden;
    border: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
    border-radius: ${i.Radius.sm};
    background: ${i.Colour.bg};
    padding: ${i.Spacing["spacing-16"]};
    min-width: 23rem;

    ${i.MediaQuery.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${i.Breakpoint["sm-margin"]}px * 2);
    }

    ${i.MediaQuery.MaxWidth.xs} {
        width: calc(100vw - ${i.Breakpoint["xs-margin"]}px * 2);
    }

    ${i.MediaQuery.MaxWidth.xxs} {
        width: calc(100vw - ${i.Breakpoint["xxs-margin"]}px * 2);
    }
`,o=a.default.div`
    display: flex;
    align-items: baseline;
`,l=a.default.div`
    margin: 0 0.5rem;
    color: ${i.Colour.text};
`,n=a.default.div`
    ${e=>"small"===e.$variant?i.Font["body-md-regular"]:i.Font["body-baseline-regular"]}
    text-align: left;
    ${i=>{if("middle"!==i.$truncateType)return e.css`
                    ${r.lineClampCss(1)}
                `}}
    overflow: hidden;
`,s=a.default(n)`
    color: ${i.Colour["text-subtler"]};
`;exports.HistogramSliderDropdownContainer=d,exports.Label=o,exports.PlaceholderLabel=s,exports.Separator=l,exports.ValueLabel=n;
//# sourceMappingURL=select-histogram.styles.js.map
