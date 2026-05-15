"use strict";var e=require("styled-components"),t=require("@lifesg/react-icons/exclamation-circle-fill"),o=require("../shared/html-content/html-content.js"),r=require("../theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=l(e);const i=n.default.div`
    margin-bottom: ${r.Spacing["spacing-8"]};
`,a=n.default.label`
    color: ${r.Colour["text-subtle"]};
    display: inline-block;

    ${r.Font["form-label"]}
    ${o.applyHtmlContentStyle()}
    font-weight: ${r.Font.Spec["weight-semibold"]};
`,s=n.default(t.ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${r.Colour["icon-error-strong"]};
`,c=n.default.div`
    ${r.Font["body-sm-semibold"]}
    display: flex;
    gap: ${r.Spacing["spacing-4"]};
    margin-top: ${r.Spacing["spacing-8"]};
`,p=n.default.p`
    color: ${r.Colour["text-error"]};
    margin-bottom: 0;
    outline: none;
`,u=n.default.span`
    ${r.Font["form-description"]}
    color: ${r.Colour["text-subtler"]};
    display: block;
`;exports.ErrorIcon=s,exports.ErrorMessage=p,exports.ErrorMessageContainer=c,exports.Label=a,exports.LabelContainer=i,exports.Subtitle=u;
//# sourceMappingURL=form-label.style.js.map
