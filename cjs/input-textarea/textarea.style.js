"use strict";var r=require("styled-components"),o=require("../theme/index.js");function e(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var l=e(r);const t=l.default.div`
    display: flex;
    flex-direction: column;
`,d=l.default.textarea`
    border: ${o.Border["width-010"]} ${o.Border.solid} ${o.Colour.border};
    border-radius: ${o.Radius.sm};
    background: ${o.Colour.bg};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${o.Spacing["spacing-12"]} ${o.Spacing["spacing-16"]};
    width: 100%;

    ${o.Font["body-baseline-regular"]}
    color: ${o.Colour.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${o.Border["width-020"]} ${o.Border.solid}
            ${o.Colour["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${o.Colour["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${o.Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${o.Radius.full};
        background-clip: padding-box;
    }

    ${e=>e.readOnly?r.css`
                border-color: transparent;
                background: transparent !important;
                padding: ${o.Spacing["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${o.Colour["border-focus"]};
                }
            `:e.disabled?r.css`
                background: ${o.Colour["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${o.Colour["border-disabled"]};
                }
            `:e.$error?r.css`
                border-color: ${o.Colour["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${o.Colour["border-error-focus"]};
                }
            `:void 0}
`;exports.Element=d,exports.Wrapper=t;
//# sourceMappingURL=textarea.style.js.map
