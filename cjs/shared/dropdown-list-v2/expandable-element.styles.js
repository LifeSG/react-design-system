"use strict";var e=require("styled-components"),t=require("../../v3_theme/index.js"),i=require("../input-wrapper/input-wrapper.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e);const r=n.default(i.BasicButton)`
    display: flex;
    align-items: center;
    gap: ${t.V3_Spacing["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${t.V3_Spacing["spacing-16"]}`:t.V3_Spacing["spacing-16"]};

    ${i=>"small"===i.$variant?e.css`
                  ${t.V3_Font["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:e.css`
                  ${t.V3_Font["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${t.V3_Colour["focus-ring"]};
        outline-offset: -2px;
    }
`,a=n.default.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${t.V3_Motion["duration-250"]}
        ${t.V3_Motion["ease-default"]};

    svg {
        color: ${t.V3_Colour.icon};
        height: 1em;
        width: 1em;
    }
`;exports.IconContainer=a,exports.Selector=r;
//# sourceMappingURL=expandable-element.styles.js.map
