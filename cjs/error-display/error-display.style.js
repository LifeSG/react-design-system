"use strict";var t=require("styled-components"),e=require("../shared/html-content/html-content.js"),i=require("../button/button.js"),n=require("../theme/index.js"),a=require("../typography/typography.js");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=r(t);const p=o.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,d=o.default.img`
    position: relative;
    width: 400px;
    height: auto;

    ${n.MediaQuery.MaxWidth.sm} {
        width: 320px;
    }

    ${n.MediaQuery.MaxWidth.xs} {
        width: 288px;
    }

    ${n.MediaQuery.MaxWidth.xxs} {
        width: 240px;
    }
`,s=o.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,l=o.default(a.Typography.HeadingMD).attrs((()=>({forwardedAs:"h2"})))`
    margin: ${n.Spacing["spacing-32"]} 0 ${n.Spacing["spacing-16"]};
    text-align: center;
`,u=o.default.div`
    color: ${n.Colour.text};
    text-align: center;

    ${e.applyHtmlContentStyle({textSize:"body-baseline"})}

    p + p {
        margin-top: ${n.Spacing["spacing-16"]};
    }
`,c=o.default(i.Button.Default)`
    margin: ${n.Spacing["spacing-32"]} auto 0;
    width: 21rem;

    ${n.MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
`;exports.ActionButton=c,exports.Container=p,exports.DescriptionContainer=u,exports.Img=d,exports.TextContainer=s,exports.Title=l;
//# sourceMappingURL=error-display.style.js.map
