"use strict";var e=require("styled-components"),t=require("../shared/input-wrapper/input-wrapper.js"),r=require("../theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=o(e);u.default.div`
    position: relative;
`;const i=u.default(t.BasicInput)`
    height: calc(3rem - 2px); // exclude top and bottom borders
    cursor: inherit;
    ${t=>t.$disabled&&e.css`
            color: ${r.Colour["text-subtler"]};
            cursor: not-allowed;
        `}
`;exports.InputSelectorElement=i;
//# sourceMappingURL=timepicker.styles.js.map
