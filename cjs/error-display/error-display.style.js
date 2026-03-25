"use strict";var t=require("styled-components"),e=require("../button/button.js"),i=require("../shared/html-content/html-content.js"),n=require("../typography/index.js"),a=require("../v3_theme/index.js");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=r(t);const d=o.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,p=o.default.img`
    position: relative;
    width: 400px;
    height: auto;

    ${a.V3_MediaQuery.MaxWidth.sm} {
        width: 320px;
    }

    ${a.V3_MediaQuery.MaxWidth.xs} {
        width: 288px;
    }

    ${a.V3_MediaQuery.MaxWidth.xxs} {
        width: 240px;
    }
`,s=o.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,l=o.default(n.Typography.HeadingMD).attrs((()=>({forwardedAs:"h2"})))`
    margin: ${a.V3_Spacing["spacing-32"]} 0 ${a.V3_Spacing["spacing-16"]};
    text-align: center;
`,u=o.default.div`
    color: ${a.V3_Colour.text};
    text-align: center;

    ${i.applyHtmlContentStyle({textSize:"body-baseline"})}

    p + p {
        margin-top: ${a.V3_Spacing["spacing-16"]};
    }
`,c=o.default(e.Button.Default)`
    margin: ${a.V3_Spacing["spacing-32"]} auto 0;
    width: 21rem;

    ${a.V3_MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
`;exports.ActionButton=c,exports.Container=d,exports.DescriptionContainer=u,exports.Img=p,exports.TextContainer=s,exports.Title=l;
//# sourceMappingURL=error-display.style.js.map
