"use strict";var e=require("styled-components"),r=require("../../theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=o(e);const l=t.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,d=t.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${r.Motion["duration-150"]} ${r.Motion["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${r.Font["body-md-regular"]}
    border-radius: ${r.Radius.md};
    border: ${r.Border["width-010"]} ${r.Border.solid} transparent;
    background-clip: border-box;
    color: ${r.Colour.text};
    cursor: default;

    // cursor style
    ${({$interactive:r,$disabledDisplay:o})=>r?e.css`
                cursor: pointer;
            `:o?e.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:o,$interactive:t,$disabledDisplay:l})=>"selected-year"===o?e.css`
                background: ${r.Colour["bg-selected"]};
                border-color: ${r.Colour["border-selected"]};
                color: ${r.Colour["text-selected"]};
                font-weight: ${r.Font.Spec["weight-semibold"]};

                ${t&&e.css`
                    &:hover {
                        background: ${r.Colour["bg-selected-hover"]};
                        border-color: ${r.Colour["border-selected-hover"]};
                        color: ${r.Colour["text-selected-hover"]};
                    }
                `}
            `:"current-year"===o?e.css`
                color: ${r.Colour["text-primary"]};
                font-weight: ${r.Font.Spec["weight-semibold"]};
            `:"other-decade"===o||l?e.css`
                color: ${r.Colour["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:o,$interactive:t})=>{if(t)return"selected-year"===o?e.css`
                &:hover {
                    background: ${r.Colour["bg-selected-hover"]};
                    border-color: ${r.Colour["border-selected-hover"]};
                    color: ${r.Colour["text-selected-hover"]};
                    font-weight: ${r.Font.Spec["weight-semibold"]};
                }
            `:e.css`
            &:hover {
                background: ${r.Colour["bg-hover"]};
                color: ${r.Colour["text-hover"]};
                font-weight: ${r.Font.Spec["weight-semibold"]};
            }
        `}}
`;exports.Wrapper=l,exports.YearCell=d;
//# sourceMappingURL=internal-calendar-year.style.js.map
