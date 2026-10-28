"use strict";var e=require("@lifesg/react-icons"),o=require("styled-components"),i=require("../theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=t(o);const r=o.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,s=o.css`
    animation: ${i.Motion["duration-150"]} ${i.Motion["ease-default"]} ${r};
    width: 100%;
    height: 100%;
    transition: color ${i.Motion["duration-150"]} ${i.Motion["ease-default"]};
`,n=l.default(e.SquareIcon)`
    ${s}
    color: ${i.Colour["icon-primary-subtlest"]};
`,a=l.default(e.SquareFillIcon)`
    ${s}
    color: ${i.Colour["icon-disabled-subtle"]};
`,d=l.default(e.SquareTickFillIcon)`
    ${s}
    color: ${e=>e.$disabled?i.Colour["icon-disabled-subtle"](e):i.Colour["icon-selected"](e)};
`,u=l.default(e.MinusSquareFillIcon)`
    ${s}
    color: ${e=>e.$disabled?i.Colour["icon-disabled-subtle"](e):i.Colour["icon-selected"](e)};
`,c=l.default.div`
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
        outline: 2px solid ${i.Colour["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`,$=l.default.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.$disabledVisual?"not-allowed":"pointer"};

    &:hover
        + ${n},
        &:hover
        + ${d},
        &:hover
        + ${u} {
        @media (pointer: fine) {
            color: ${e=>!e.$disabledVisual&&i.Colour["icon-hover"](e)};
        }
    }
`;exports.Container=c,exports.Input=$,exports.StyledCheckedIcon=d,exports.StyledInteremediateIcon=u,exports.StyledUncheckedDisabledIcon=a,exports.StyledUncheckedIcon=n;
//# sourceMappingURL=checkbox.style.js.map
