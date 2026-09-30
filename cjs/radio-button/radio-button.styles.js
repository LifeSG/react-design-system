"use strict";var e=require("styled-components"),o=require("../theme/index.js"),t=require("@lifesg/react-icons");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=i(e);const r=n.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${o=>"small"===o.$displaySize?e.css`
                height: 1.5rem;
                width: 1.5rem;
            `:e.css`
                height: 2rem;
                width: 2rem;
            `}
    position: relative;
`,l=n.default(t.CircleIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?o.Colour["icon-disabled-subtle"](e):o.Colour["icon-subtle"](e)};
    transition: ${o.Motion["duration-150"]} ${o.Motion["ease-default"]};
`,d=n.default(t.CircleDotIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?o.Colour["icon-selected-disabled"](e):o.Colour["icon-selected"](e)};

    transition: ${o.Motion["duration-150"]} ${o.Motion["ease-default"]};
`,s=n.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.$disabledVisual?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${l}, &:hover + ${d} {
        @media (pointer: fine) {
            color: ${e=>!e.$disabledVisual&&o.Colour["icon-hover"](e)};
        }
    }
`;exports.Container=r,exports.Input=s,exports.StyledCheckedIcon=d,exports.StyledUnCheckedIcon=l;
//# sourceMappingURL=radio-button.styles.js.map
