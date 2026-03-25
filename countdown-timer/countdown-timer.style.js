import{ClockIcon as r}from"@lifesg/react-icons";import o,{css as i}from"styled-components";import{V3_Font as e,V3_Spacing as t,V3_Radius as n,V3_Colour as d,V3_Border as s,V3_MediaQuery as a,V3_Shadow as $}from"../v3_theme/index.js";const g=o.div`
    width: 100%;
`,c=o.div`
    ${e["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${t["spacing-8"]} ${t["spacing-16"]};
    border-radius: ${n.sm};
    color: ${d["text-primary"]};
    border: ${s["width-010"]} ${s.solid};
    border-color: ${d["border-primary"]};
    background-color: ${d.bg};

    ${a.MaxWidth.sm} {
        padding: ${t["spacing-16"]};
    }

    ${r=>{if(r.$warn)return i`
                color: ${d["text-error"]};
                border-color: ${d["border-error"]};
            `}}
`,l=o(c)`
    position: relative;
    opacity: ${r=>r.$visible?1:0};
`,p=o(c)`
    position: fixed;
    z-index: 10;

    ${r=>{const{$top:o,$left:e,$right:t,$warn:n}=r;return i`
            /* style object will be converted to px */
            ${{top:o,left:e,right:t}}

            box-shadow: ${n?$["xs-error-strong"]:$["xs-focus-strong"]};

            ${a.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,m=o.div`
    font-weight: ${e.Spec["weight-bold"]};
    margin-left: ${t["spacing-8"]};
    margin-right: ${t["spacing-24"]};

    ${a.MaxWidth.sm} {
        margin-right: ${t["spacing-48"]};
    }
`,b=o.div`
    font-weight: ${e.Spec["weight-semibold"]};
    margin-left: auto;
`,h=o(r)`
    color: ${r=>r.$warn?d["icon-error"]:d["icon-primary"]};
`;export{c as BaseCountdown,l as Countdown,p as FixedCountdown,m as TimeLeft,b as Timer,h as TimerIcon,g as Wrapper};
//# sourceMappingURL=countdown-timer.style.js.map
