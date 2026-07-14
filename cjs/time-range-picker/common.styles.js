"use strict";var e=require("styled-components"),t=require("../shared/input-wrapper/input-wrapper.js"),r=require("../theme/index.js");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=p(e);const a=i.default.div`
    position: relative;
`,o=i.default(t.InputWrapper)`
    height: 3rem;
    gap: ${r.Spacing["spacing-8"]};
`,s=i.default(t.BasicInput)`
    display: block;
    width: 100%;
    flex: 1;
    ${t=>t.$disabled&&e.css`
            color: ${r.Colour["text-subtler"]};
            cursor: not-allowed;
        `}
`;exports.SelectorInput=s,exports.TimeContainer=o,exports.Wrapper=a;
//# sourceMappingURL=common.styles.js.map
