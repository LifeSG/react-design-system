"use strict";var e=require("styled-components"),o=require("../../v3_theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=r(e);const d=t.default.div`
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
    border-radius: ${o.V3_Radius.md};
    margin: 0 0.5rem;
    transition: ${o.V3_Motion["duration-150"]} ${o.V3_Motion["ease-default"]};

    // default styles
    ${o.V3_Font["body-md-regular"]}
    border-radius: ${o.V3_Radius.md};
    border: ${o.V3_Border["width-010"]} ${o.V3_Border.solid} transparent;
    background-clip: border-box;
    color: ${o.V3_Colour.text};
    cursor: default;

    // cursor style
    ${o=>o.$interactive?e.css`
                cursor: pointer;
            `:o.$disabledDisplay?e.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:r,$interactive:t,$disabledDisplay:d})=>"selected-month"===r?e.css`
                background: ${o.V3_Colour["bg-selected"]};
                border-color: ${o.V3_Colour["border-selected"]};
                color: ${o.V3_Colour["text-selected"]};
                font-weight: ${o.V3_Font.Spec["weight-semibold"]};

                ${t&&e.css`
                    &:hover {
                        background: ${o.V3_Colour["bg-selected-hover"]};
                        border-color: ${o.V3_Colour["border-selected-hover"]};
                        color: ${o.V3_Colour["text-selected-hover"]};
                    }
                `}
            `:"current-month"===r?e.css`
                color: ${o.V3_Colour["text-primary"]};
                font-weight: ${o.V3_Font.Spec["weight-semibold"]};
            `:d?e.css`
                color: ${o.V3_Colour["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:r,$interactive:t})=>{if(t)return"selected-month"===r?e.css`
                &:hover {
                    background: ${o.V3_Colour["bg-selected-hover"]};
                    border-color: ${o.V3_Colour["border-selected-hover"]};
                    color: ${o.V3_Colour["text-selected-hover"]};
                    font-weight: ${o.V3_Font.Spec["weight-semibold"]};
                }
            `:e.css`
            &:hover {
                background: ${o.V3_Colour["bg-hover"]};
                color: ${o.V3_Colour["text-hover"]};
                font-weight: ${o.V3_Font.Spec["weight-semibold"]};
            }
        `}}
`;exports.MonthCell=l,exports.Wrapper=d;
//# sourceMappingURL=internal-calendar-month.style.js.map
