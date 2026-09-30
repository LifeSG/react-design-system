"use strict";var t=require("styled-components"),e=require("../../date-navigator/date-navigator.js"),a=require("../../icon-button/icon-button.js"),r=require("../../theme/index.js"),o=require("../../typography/typography.js");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=i(t);const s=t.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,p=n.default(a.IconButton)`
    color: ${r.Colour.icon};
    svg {
        ${e=>{if(e.$loading)return t.css`
                    animation: ${s} 4s linear infinite;
                `}}
    }
`,d=n.default.div`
    display: flex;
    padding-bottom: ${r.Spacing["spacing-16"]};
    justify-content: space-between;
    gap: ${r.Spacing["spacing-8"]};
`,u=n.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${r.Spacing["spacing-8"]};
`,l=n.default(o.Typography.BodySM)`
    color: ${r.Colour["text-subtler"]};
`,c=n.default(e.DateNavigator)`
    width: 400px;
`;exports.NavigationHeaderSubtitleWrapper=u,exports.NavigationHeaderWrapper=d,exports.StyledDateNavigator=c,exports.StyledRefreshButton=p,exports.StyledResultText=l;
//# sourceMappingURL=timetable-header.style.js.map
