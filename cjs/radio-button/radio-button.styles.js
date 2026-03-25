"use strict";var e=require("@lifesg/react-icons"),o=require("styled-components"),t=require("../v3_theme/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=i(o);const r=n.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${e=>"small"===e.$displaySize?o.css`
                height: 1.5rem;
                width: 1.5rem;
            `:o.css`
                height: 2rem;
                width: 2rem;
            `}
    position: relative;
`,d=n.default(e.CircleIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?t.V3_Colour["icon-disabled-subtle"](e):t.V3_Colour["icon-subtle"](e)};
    transition: ${t.V3_Motion["duration-150"]} ${t.V3_Motion["ease-default"]};
`,l=n.default(e.CircleDotIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?t.V3_Colour["icon-selected-disabled"](e):t.V3_Colour["icon-selected"](e)};

    transition: ${t.V3_Motion["duration-150"]} ${t.V3_Motion["ease-default"]};
`,s=n.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${d}, &:hover + ${l} {
        @media (pointer: fine) {
            color: ${e=>!e.disabled&&t.V3_Colour["icon-hover"](e)};
        }
    }
`;exports.Container=r,exports.Input=s,exports.StyledCheckedIcon=l,exports.StyledUnCheckedIcon=d;
//# sourceMappingURL=radio-button.styles.js.map
