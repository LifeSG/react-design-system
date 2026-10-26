"use strict";var e=require("@lifesg/react-icons/chevron-right"),a=require("styled-components"),i=require("../theme/index.js"),r=require("../typography/typography.js"),t=require("../shared/fade-wrapper/fade-wrapper.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=n(a);const o=p.default(t.FadeWrapper)`
    z-index: 1;
    margin: ${i.Spacing["spacing-32"]} 0;

    ${i.MediaQuery.MaxWidth.xl} {
        margin: ${i.Spacing["spacing-24"]} 0;
    }

    ${i.MediaQuery.MaxWidth.lg} {
        margin: ${i.Spacing["spacing-16"]} 0;
    }

    [data-id="left-fade"],
    [data-id="right-fade"] {
        height: calc(1lh + ${i.Spacing["spacing-4"]});
        top: 50%;
        transform: translateY(-50%);
    }
`,l=p.default.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${i.Spacing["spacing-8"]};
    font-size: ${i.Font.Spec["body-size-md"]};
    ${i.MediaQuery.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,s=p.default.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,d=p.default(e.ChevronRightIcon)`
    height: 1em;
    width: 1em;
    color: ${i.Colour["icon-subtle"]};
`,g=p.default(r.Typography.BodyMD)`
    display: inline-block;
    color: ${i.Colour["text-subtlest"]};
`,c=p.default(r.Typography.BodyMD)`
    margin: ${i.Spacing["spacing-8"]} !important;
`,h=p.default(r.Typography.LinkMD)`
    margin: ${i.Spacing["spacing-8"]} !important;
`;exports.Caret=d,exports.Content=l,exports.CurrentLabel=c,exports.Item=s,exports.PreviousLink=h,exports.Slash=g,exports.Wrapper=o;
//# sourceMappingURL=breadcrumb.style.js.map
