"use strict";var e=require("styled-components"),r=require("../theme/index.js"),t=require("../typography/typography.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e);const i=a.default.div`
    border-radius: 50%;
    background-color: ${r.Colour["bg-primary-subtler"]};
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
`,s=a.default(t.Typography.BodyBL)`
    color: ${r.Colour["text-primary"]};
`,l=a.default(t.Typography.BodySM)`
    color: ${r.Colour["text-primary"]};
`;exports.AvatarBaselineText=s,exports.AvatarBodySmallText=l,exports.AvatarDisplay=i;
//# sourceMappingURL=avatar.style.js.map
