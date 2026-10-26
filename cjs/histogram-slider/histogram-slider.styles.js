"use strict";var e=require("styled-components"),r=require("../input-range-slider/input-range-slider.js"),t=require("../theme/index.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=s(e);const i=d.default.div`
    display: flex;
    margin-bottom: ${t.Spacing["spacing-16"]};
    align-items: baseline;
`,a=d.default.div`
    margin: 0 0.5rem;
`,l=d.default.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,o=d.default.div`
    flex: 1;
    border-radius: ${t.Radius.sm} ${t.Radius.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${r=>{let s=t.Colour["bg-strongest"];return r.$disabled&&r.$selected?s=t.Colour["bg-selected-stronger-disabled"]:r.$disabled?s=t.Colour["bg-disabled"]:r.$selected&&(s=t.Colour["bg-selected-stronger"]),e.css`
            background-color: ${s};
        `}}
`,n=d.default(r.InputRangeSlider)`
    margin-top: -0.3125rem;
`;exports.Bar=o,exports.Histogram=l,exports.Label=i,exports.Separator=a,exports.Slider=n;
//# sourceMappingURL=histogram-slider.styles.js.map
