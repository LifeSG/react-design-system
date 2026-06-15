"use strict";var r=require("@lifesg/react-icons"),o=require("styled-components"),e=require("../theme/index.js");function i(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var t=i(o);const n=t.default.div`
    width: 100%;
`,a=t.default.div`
    ${e.Font["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${e.Spacing["spacing-8"]} ${e.Spacing["spacing-16"]};
    border-radius: ${e.Radius.sm};
    color: ${e.Colour["text-primary"]};
    border: ${e.Border["width-010"]} ${e.Border.solid};
    border-color: ${e.Colour["border-primary"]};
    background-color: ${e.Colour.bg};

    ${e.MediaQuery.MaxWidth.sm} {
        padding: ${e.Spacing["spacing-16"]};
    }

    ${r=>{if(r.$warn)return o.css`
                color: ${e.Colour["text-error"]};
                border-color: ${e.Colour["border-error"]};
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

            box-shadow: ${a?e.Shadow["xs-error-strong"]:e.Shadow["xs-focus-strong"]};

            ${e.MediaQuery.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,l=t.default.div`
    font-weight: ${e.Font.Spec["weight-bold"]};
    margin-left: ${e.Spacing["spacing-8"]};
    margin-right: ${e.Spacing["spacing-24"]};

    ${e.MediaQuery.MaxWidth.sm} {
        margin-right: ${e.Spacing["spacing-48"]};
    }
`,c=t.default.div`
    font-weight: ${e.Font.Spec["weight-semibold"]};
    margin-left: auto;
`,p=t.default(r.ClockIcon)`
    color: ${r=>r.$warn?e.Colour["icon-error"]:e.Colour["icon-primary"]};
`;exports.BaseCountdown=a,exports.Countdown=d,exports.FixedCountdown=s,exports.TimeLeft=l,exports.Timer=c,exports.TimerIcon=p,exports.Wrapper=n;
//# sourceMappingURL=countdown-timer.style.js.map
