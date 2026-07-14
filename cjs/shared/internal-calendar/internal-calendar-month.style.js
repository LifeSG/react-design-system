"use strict";var e=require("styled-components"),o=require("../../theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=r(e);const d=t.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,l=t.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${o.Radius.md};
    margin: 0 0.5rem;
    transition: ${o.Motion["duration-150"]} ${o.Motion["ease-default"]};

    // default styles
    ${o.Font["body-md-regular"]}
    border-radius: ${o.Radius.md};
    border: ${o.Border["width-010"]} ${o.Border.solid} transparent;
    background-clip: border-box;
    color: ${o.Colour.text};
    cursor: default;

    // cursor style
    ${o=>o.$interactive?e.css`
                cursor: pointer;
            `:o.$disabledDisplay?e.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:r,$interactive:t,$disabledDisplay:d})=>"selected-month"===r?e.css`
                background: ${o.Colour["bg-selected"]};
                border-color: ${o.Colour["border-selected"]};
                color: ${o.Colour["text-selected"]};
                font-weight: ${o.Font.Spec["weight-semibold"]};

                ${t&&e.css`
                    &:hover {
                        background: ${o.Colour["bg-selected-hover"]};
                        border-color: ${o.Colour["border-selected-hover"]};
                        color: ${o.Colour["text-selected-hover"]};
                    }
                `}
            `:"current-month"===r?e.css`
                color: ${o.Colour["text-primary"]};
                font-weight: ${o.Font.Spec["weight-semibold"]};
            `:d?e.css`
                color: ${o.Colour["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:r,$interactive:t})=>{if(t)return"selected-month"===r?e.css`
                &:hover {
                    background: ${o.Colour["bg-selected-hover"]};
                    border-color: ${o.Colour["border-selected-hover"]};
                    color: ${o.Colour["text-selected-hover"]};
                    font-weight: ${o.Font.Spec["weight-semibold"]};
                }
            `:e.css`
            &:hover {
                background: ${o.Colour["bg-hover"]};
                color: ${o.Colour["text-hover"]};
                font-weight: ${o.Font.Spec["weight-semibold"]};
            }
        `}}
`;exports.MonthCell=l,exports.Wrapper=d;
//# sourceMappingURL=internal-calendar-month.style.js.map
