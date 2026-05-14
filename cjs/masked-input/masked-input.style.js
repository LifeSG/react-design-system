"use strict";var e=require("@lifesg/react-icons/exclamation-triangle"),r=require("styled-components"),n=require("../input-group/input-group.js"),t=require("../shared/component-loading-spinner/component-loading-spinner.js"),i=require("../shared/input-wrapper/input-wrapper.js"),o=require("../typography/index.js"),a=require("../v3_theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=l(r);const s=p.default(n.InputGroup)`
    padding: 0 0 0
        ${({readOnly:e})=>e?"0":a.V3_Spacing["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:r})=>e&&!r?"pointer":"initial"};
    }
`,c=p.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:r=a.V3_Colour.icon,$activeColor:n=a.V3_Colour["icon-primary"]})=>e?r:n};
    padding: ${a.V3_Spacing["spacing-12"]} ${a.V3_Spacing["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,d=p.default.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,u=p.default(o.Typography.BodyBL)`
    color: ${a.V3_Colour["text-subtler"]};
`,g=p.default(t.ComponentLoadingSpinner)`
    margin-right: ${a.V3_Spacing["spacing-8"]};
    color: ${a.V3_Colour.icon};
`,f=p.default.span`
    color: ${a.V3_Colour["text-primary"]};
    text-decoration: underline;
    font-weight: ${a.V3_Font.Spec["weight-semibold"]};
`,x=p.default.span`
    display: flex;
    align-items: center;
    margin-right: ${a.V3_Spacing["spacing-8"]};
`,h=p.default(e.ExclamationTriangleIcon)`
    color: ${a.V3_Colour["icon-warning"]};
    margin-right: ${a.V3_Spacing["spacing-8"]};
    height: 1em;
    width: 1em;
`,y=p.default.span`
    color: ${a.V3_Colour["text-warning"]};
`,m=p.default(i.BasicButton)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${a.V3_Font["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${f} {
            color: ${a.V3_Colour["text-hover"]};
        }
    }
`,$=p.default.button`
    ${a.V3_Font["body-baseline-regular"]}
    color: ${a.V3_Colour.text};
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
`,V=p.default.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${a.V3_Colour["icon-primary"]};
    padding: 0 1rem;
    flex-shrink: 0;

    svg {
        width: ${a.V3_Font.Spec["body-size-baseline"]};
        height: ${a.V3_Font.Spec["body-size-baseline"]};
    }
`;exports.ClickableErrorWrapper=m,exports.ErrorIcon=h,exports.ErrorLabel=y,exports.ErrorTextContainer=x,exports.IconContainer=c,exports.InputGroupWrapper=s,exports.LoadingLabel=u,exports.LoadingWrapper=d,exports.ReadOnlyClickable=$,exports.ReadOnlyIconContainer=V,exports.ReadOnlyValueText=b,exports.Spinner=g,exports.TryAgainLabel=f;
//# sourceMappingURL=masked-input.style.js.map
