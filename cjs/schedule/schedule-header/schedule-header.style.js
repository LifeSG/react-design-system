"use strict";var e=require("styled-components"),t=require("../../date-navigator/date-navigator.js"),a=require("../../theme/index.js"),i=require("../../typography/typography.js"),r=require("../../button/button.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e);const d=o.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${a.Spacing["spacing-16"]};
    color: ${a.Colour["text-primary"]};
    gap: ${a.Spacing["spacing-16"]};
`,p=o.default.div`
    display: flex;
    align-items: center;
    gap: ${a.Spacing["spacing-16"]};

    ${a.MediaQuery.MaxWidth.md} {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
    }
`,l=o.default.div`
    display: flex;
    align-items: center;
    gap: ${a.Spacing["spacing-16"]};

    ${a.MediaQuery.MaxWidth.lg} {
        display: none;
    }
`,s=o.default(t.DateNavigator)`
    width: 100%;
    max-width: 400px;
`,u=o.default(i.Typography.BodyMD)`
    color: ${a.Colour["text-subtler"]};
`,c=o.default(r.Button.Default)`
    min-width: 5rem;

    ${a.MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;exports.DROPDOWN_WIDTH="240px",exports.LeftSection=p,exports.RightSection=l,exports.ScheduleHeaderWrapper=d,exports.StyledButton=c,exports.StyledDateNavigator=s,exports.StyledText=u;
//# sourceMappingURL=schedule-header.style.js.map
