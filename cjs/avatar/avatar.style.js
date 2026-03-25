"use strict";var e=require("styled-components"),r=require("../typography/index.js"),t=require("../v3_theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e);const i=a.default.div`
    border-radius: 50%;
    background-color: ${t.V3_Colour["bg-primary-subtler"]};
    ${r=>"small"===r.$sizeType?e.css`
                  width: 1.5rem;
                  height: 1.5rem;
              `:e.css`
                  width: 2.5rem;
                  height: 2.5rem;
              `}

    align-items: center;
    justify-content: center;
    display: flex;
`,s=a.default(r.Typography.BodyBL)`
    color: ${t.V3_Colour["text-primary"]};
`,l=a.default(r.Typography.BodySM)`
    color: ${t.V3_Colour["text-primary"]};
`;exports.AvatarBaselineText=s,exports.AvatarBodySmallText=l,exports.AvatarDisplay=i;
//# sourceMappingURL=avatar.style.js.map
