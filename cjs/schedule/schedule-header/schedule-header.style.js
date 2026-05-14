"use strict";var e=require("styled-components"),t=require("../../button/button.js"),a=require("../../date-navigator/date-navigator.js"),i=require("../../typography/index.js"),r=require("../../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=n(e);const o=d.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${r.V3_Spacing["spacing-16"]};
    color: ${r.V3_Colour["text-primary"]};
    gap: ${r.V3_Spacing["spacing-16"]};
`,p=d.default.div`
    display: flex;
    align-items: center;
    gap: ${r.V3_Spacing["spacing-16"]};

    ${r.V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
    }
`,l=d.default.div`
    display: flex;
    align-items: center;
    gap: ${r.V3_Spacing["spacing-16"]};

    ${r.V3_MediaQuery.MaxWidth.lg} {
        display: none;
    }
`,s=d.default(a.DateNavigator)`
    width: 100%;
    max-width: 400px;
`,u=d.default(i.Typography.BodyMD)`
    color: ${r.V3_Colour["text-subtler"]};
`,c=d.default(t.Button.Default)`
    min-width: 5rem;

    ${r.V3_MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;exports.DROPDOWN_WIDTH="240px",exports.LeftSection=p,exports.RightSection=l,exports.ScheduleHeaderWrapper=o,exports.StyledButton=c,exports.StyledDateNavigator=s,exports.StyledText=u;
//# sourceMappingURL=schedule-header.style.js.map
