"use strict";var e=require("styled-components"),o=require("@lifesg/react-icons/exclamation-circle-fill"),t=require("../shared/html-content/html-content.js"),r=require("../theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=l(e);const n=i.default.div`
    margin-bottom: ${r.Spacing["spacing-8"]};
    display: flex;
    flex-direction: column;
    gap: ${r.Spacing["spacing-4"]};
`,a=i.default.label`
    color: ${r.Colour["text-subtle"]};
    display: inline-block;

    ${r.Font["form-label"]}
    ${t.applyHtmlContentStyle()}
    font-weight: ${r.Font.Spec["weight-semibold"]};
`,s=i.default(o.ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${r.Colour["icon-error-strong"]};
`,c=i.default.div`
    ${r.Font["body-sm-semibold"]}
    display: flex;
    gap: ${r.Spacing["spacing-4"]};
    margin-top: ${r.Spacing["spacing-8"]};
`,p=i.default.p`
    color: ${r.Colour["text-error"]};
    margin-bottom: 0;
    outline: none;
`,u=i.default.span`
    ${r.Font["form-description"]}
    color: ${r.Colour["text-subtler"]};
    display: block;
`;exports.ErrorIcon=s,exports.ErrorMessage=p,exports.ErrorMessageContainer=c,exports.Label=a,exports.LabelContainer=n,exports.Subtitle=u;
//# sourceMappingURL=form-label.style.js.map
