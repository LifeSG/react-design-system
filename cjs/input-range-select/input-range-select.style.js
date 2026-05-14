"use strict";var e=require("styled-components"),r=require("../shared/input-wrapper/input-wrapper.js");require("../theme/theme-provider/index.js"),require("react"),require("../theme/theme-provider/context.js"),require("../theme/tokens/border.js");var t=require("../theme/tokens/colour.js");require("../theme/tokens/font.js"),require("../theme/tokens/media-query.js");var i=require("../theme/tokens/spacing.js");require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../util/simple-id-generator.js"),require("../util/string-helper.js"),require("@react-aria/live-announcer");var o=require("../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e);const s=a.default.button`
    height: auto;
    padding: ${i.Spacing["spacing-12"]} ${i.Spacing["spacing-16"]};
    cursor: pointer;
    color: ${t.Colour.icon};

    /* Position styles */
    position: absolute;
    right: 0;
    padding-left: ${o.V3_Spacing["spacing-8"]};
    margin-right: 0;
`,u=a.default(r.InputWrapper)`
    height: 3rem;
`,p=a.default.button`
    appearance: none;
    border: 0;
    background: transparent;
    display: flex;
    flex: 1;
    color: ${o.V3_Colour.text};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${o.V3_Colour["border-focus"]};
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;exports.ClearIconContainer=s,exports.RangeSelectorButton=p,exports.StyledInputWrapper=u;
//# sourceMappingURL=input-range-select.style.js.map
