"use strict";var e=require("styled-components"),r=require("../input/input.style.js"),t=require("../shared/input-wrapper/input-wrapper.js"),o=require("../theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e);const u=a.default(r.ClearButton)`
    position: absolute;
    right: 0;
    padding-left: ${o.Spacing["spacing-8"]};
    margin-right: 0;
`,i=a.default(t.InputWrapper)`
    height: 3rem;
`,p=a.default.button`
    appearance: none;
    border: 0;
    background: transparent;
    display: flex;
    flex: 1;
    color: ${o.Colour.text};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${o.Colour["border-focus"]};
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;exports.ClearIconContainer=u,exports.RangeSelectorButton=p,exports.StyledInputWrapper=i;
//# sourceMappingURL=input-range-select.style.js.map
