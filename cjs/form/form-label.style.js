"use strict";var e=require("@lifesg/react-icons/exclamation-circle-fill"),t=require("styled-components"),o=require("../shared/html-content/html-content.js"),r=require("../v3_theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=l(t);const i=n.default.div`
    margin-bottom: ${r.V3_Spacing["spacing-8"]};
`,a=n.default.label`
    color: ${r.V3_Colour["text-subtle"]};
    display: inline-block;

    ${r.V3_Font["form-label"]}
    ${o.applyHtmlContentStyle()}
    font-weight: ${r.V3_Font.Spec["weight-semibold"]};
`,s=n.default(e.ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${r.V3_Colour["icon-error-strong"]};
`,c=n.default.div`
    ${r.V3_Font["body-sm-semibold"]}
    display: flex;
    gap: ${r.V3_Spacing["spacing-4"]};
    margin-top: ${r.V3_Spacing["spacing-8"]};
`,p=n.default.p`
    color: ${r.V3_Colour["text-error"]};
    margin-bottom: 0;
    outline: none;
`,u=n.default.span`
    ${r.V3_Font["form-description"]}
    color: ${r.V3_Colour["text-subtler"]};
    display: block;
`;exports.ErrorIcon=s,exports.ErrorMessage=p,exports.ErrorMessageContainer=c,exports.Label=a,exports.LabelContainer=i,exports.Subtitle=u;
//# sourceMappingURL=form-label.style.js.map
