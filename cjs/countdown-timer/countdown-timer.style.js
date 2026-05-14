"use strict";var r=require("@lifesg/react-icons"),o=require("styled-components"),e=require("../v3_theme/index.js");function i(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var t=i(o);const n=t.default.div`
    width: 100%;
`,a=t.default.div`
    ${e.V3_Font["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${e.V3_Spacing["spacing-8"]} ${e.V3_Spacing["spacing-16"]};
    border-radius: ${e.V3_Radius.sm};
    color: ${e.V3_Colour["text-primary"]};
    border: ${e.V3_Border["width-010"]} ${e.V3_Border.solid};
    border-color: ${e.V3_Colour["border-primary"]};
    background-color: ${e.V3_Colour.bg};

    ${e.V3_MediaQuery.MaxWidth.sm} {
        padding: ${e.V3_Spacing["spacing-16"]};
    }

    ${r=>{if(r.$warn)return o.css`
                color: ${e.V3_Colour["text-error"]};
                border-color: ${e.V3_Colour["border-error"]};
            `}}
`,d=t.default(a)`
    position: relative;
    opacity: ${r=>r.$visible?1:0};
`,s=t.default(a)`
    position: fixed;
    z-index: 10;

    ${r=>{const{$top:i,$left:t,$right:n,$warn:a}=r;return o.css`
            /* style object will be converted to px */
            ${{top:i,left:t,right:n}}

            box-shadow: ${a?e.V3_Shadow["xs-error-strong"]:e.V3_Shadow["xs-focus-strong"]};

            ${e.V3_MediaQuery.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,l=t.default.div`
    font-weight: ${e.V3_Font.Spec["weight-bold"]};
    margin-left: ${e.V3_Spacing["spacing-8"]};
    margin-right: ${e.V3_Spacing["spacing-24"]};

    ${e.V3_MediaQuery.MaxWidth.sm} {
        margin-right: ${e.V3_Spacing["spacing-48"]};
    }
`,c=t.default.div`
    font-weight: ${e.V3_Font.Spec["weight-semibold"]};
    margin-left: auto;
`,p=t.default(r.ClockIcon)`
    color: ${r=>r.$warn?e.V3_Colour["icon-error"]:e.V3_Colour["icon-primary"]};
`;exports.BaseCountdown=a,exports.Countdown=d,exports.FixedCountdown=s,exports.TimeLeft=l,exports.Timer=c,exports.TimerIcon=p,exports.Wrapper=n;
//# sourceMappingURL=countdown-timer.style.js.map
