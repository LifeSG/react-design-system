"use strict";var e=require("styled-components"),t=require("../../date-navigator/date-navigator.js"),a=require("../../icon-button/icon-button.js"),r=require("../../typography/index.js"),i=require("../../v3_theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e);const s=e.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,d=n.default(a.IconButton)`
    color: ${i.V3_Colour.icon};
    svg {
        ${t=>{if(t.$loading)return e.css`
                    animation: ${s} 4s linear infinite;
                `}}
    }
`,p=n.default.div`
    display: flex;
    padding-bottom: ${i.V3_Spacing["spacing-16"]};
    justify-content: space-between;
    gap: ${i.V3_Spacing["spacing-8"]};
`,u=n.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${i.V3_Spacing["spacing-8"]};
`,l=n.default(r.Typography.BodySM)`
    color: ${i.V3_Colour["text-subtler"]};
`,c=n.default(t.DateNavigator)`
    width: 400px;
`;exports.NavigationHeaderSubtitleWrapper=u,exports.NavigationHeaderWrapper=p,exports.StyledDateNavigator=c,exports.StyledRefreshButton=d,exports.StyledResultText=l;
//# sourceMappingURL=timetable-header.style.js.map
