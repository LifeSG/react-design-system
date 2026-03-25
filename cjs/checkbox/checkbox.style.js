"use strict";var e=require("@lifesg/react-icons"),o=require("styled-components"),i=require("../v3_theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=t(o);const r=o.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,n=o.css`
    animation: ${i.V3_Motion["duration-150"]} ${i.V3_Motion["ease-default"]}
        ${r};
    width: 100%;
    height: 100%;
    transition: color ${i.V3_Motion["duration-150"]} ${i.V3_Motion["ease-default"]};
`,s=l.default(e.SquareIcon)`
    ${n}
    color: ${i.V3_Colour["icon-primary-subtlest"]};
`,d=l.default(e.SquareFillIcon)`
    ${n}
    color: ${i.V3_Colour["icon-disabled-subtle"]};
`,a=l.default(e.SquareTickFillIcon)`
    ${n}
    color: ${e=>e.$disabled?i.V3_Colour["icon-disabled-subtle"](e):i.V3_Colour["icon-selected"](e)};
`,c=l.default(e.MinusSquareFillIcon)`
    ${n}
    color: ${e=>e.$disabled?i.V3_Colour["icon-disabled-subtle"](e):i.V3_Colour["icon-selected"](e)};
`,u=l.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>o.css`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}

    // Show custom focus ring when input is focused
    input:focus-visible + svg {
        outline: 2px solid ${i.V3_Colour["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`,p=l.default.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${s},
        &:hover
        + ${a},
        &:hover
        + ${c} {
        @media (pointer: fine) {
            color: ${e=>!e.disabled&&i.V3_Colour["icon-hover"](e)};
        }
    }
`;exports.Container=u,exports.Input=p,exports.StyledCheckedIcon=a,exports.StyledInteremediateIcon=c,exports.StyledUncheckedDisabledIcon=d,exports.StyledUncheckedIcon=s;
//# sourceMappingURL=checkbox.style.js.map
