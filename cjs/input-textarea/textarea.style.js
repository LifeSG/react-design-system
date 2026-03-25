"use strict";var r=require("styled-components"),o=require("../v3_theme/index.js");function e(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var l=e(r);const t=l.default.div`
    display: flex;
    flex-direction: column;
`,d=l.default.textarea`
    border: ${o.V3_Border["width-010"]} ${o.V3_Border.solid}
        ${o.V3_Colour.border};
    border-radius: ${o.V3_Radius.sm};
    background: ${o.V3_Colour.bg};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${o.V3_Spacing["spacing-12"]} ${o.V3_Spacing["spacing-16"]};
    width: 100%;

    ${o.V3_Font["body-baseline-regular"]}
    color: ${o.V3_Colour.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${o.V3_Border["width-020"]} ${o.V3_Border.solid}
            ${o.V3_Colour["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${o.V3_Colour["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${o.V3_Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${o.V3_Radius.full};
        background-clip: padding-box;
    }

    ${e=>e.readOnly?r.css`
                border-color: transparent;
                background: transparent !important;
                padding: ${o.V3_Spacing["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${o.V3_Colour["border-focus"]};
                }
            `:e.disabled?r.css`
                background: ${o.V3_Colour["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${o.V3_Colour["border-disabled"]};
                }
            `:e.$error?r.css`
                border-color: ${o.V3_Colour["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${o.V3_Colour["border-error-focus"]};
                }
            `:void 0}
`;exports.Element=d,exports.Wrapper=t;
//# sourceMappingURL=textarea.style.js.map
