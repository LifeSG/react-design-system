"use strict";var e=require("@lifesg/react-icons/exclamation-triangle"),r=require("styled-components"),n=require("../input-group/input-group.js"),t=require("../shared/component-loading-spinner/component-loading-spinner.js"),i=require("../theme/index.js"),o=require("../typography/typography.js"),a=require("../shared/input-wrapper/input-wrapper.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=l(r);const s=p.default(n.InputGroup)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":i.Spacing["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:r})=>e&&!r?"pointer":"initial"};
    }
`,c=p.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:r=i.Colour.icon,$activeColor:n=i.Colour["icon-primary"]})=>e?r:n};
    padding: ${i.Spacing["spacing-12"]} ${i.Spacing["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,u=p.default.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,d=p.default(o.Typography.BodyBL)`
    color: ${i.Colour["text-subtler"]};
`,g=p.default(t.ComponentLoadingSpinner)`
    margin-right: ${i.Spacing["spacing-8"]};
    color: ${i.Colour.icon};
`,f=p.default.span`
    color: ${i.Colour["text-primary"]};
    font-weight: ${i.Font.Spec["weight-semibold"]};
`,y=p.default.span`
    display: flex;
    align-items: center;
    margin-right: ${i.Spacing["spacing-8"]};
`,h=p.default(e.ExclamationTriangleIcon)`
    color: ${i.Colour["icon-warning"]};
    margin-right: ${i.Spacing["spacing-8"]};
    height: 1em;
    width: 1em;
`,x=p.default.span`
    color: ${i.Colour["text-warning"]};
`,m=p.default(a.BasicButton)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${i.Font["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${f} {
            color: ${i.Colour["text-hover"]};
        }
    }
`,$=p.default.button`
    ${i.Font["body-baseline-regular"]}
    color: ${i.Colour.text};
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    width: 100%;
    justify-content: space-between;
    min-height: 3rem;
`,b=p.default.span`
    overflow-wrap: anywhere;
`,C=p.default.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${i.Colour["icon-primary"]};
    padding: 0 1rem;
    flex-shrink: 0;

    svg {
        width: ${i.Font.Spec["body-size-baseline"]};
        height: ${i.Font.Spec["body-size-baseline"]};
    }
`;exports.ClickableErrorWrapper=m,exports.ErrorIcon=h,exports.ErrorLabel=x,exports.ErrorTextContainer=y,exports.IconContainer=c,exports.InputGroupWrapper=s,exports.LoadingLabel=d,exports.LoadingWrapper=u,exports.ReadOnlyClickable=$,exports.ReadOnlyIconContainer=C,exports.ReadOnlyValueText=b,exports.Spinner=g,exports.TryAgainLabel=f;
//# sourceMappingURL=masked-input.style.js.map
