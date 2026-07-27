"use strict";var e=require("styled-components"),t=require("../theme/index.js"),r=require("../theme/components/theme-helper.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=i(e);const o=n.default.button`
    padding: ${t.Spacing["spacing-8"]} ${t.Spacing["spacing-16"]};
    transition: all ${t.Motion["duration-250"]} ${t.Motion["ease-default"]};
    border-radius: ${r.ThemeButton["button-radius"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    ${r=>"red-filled"===r.$buttonStyle?e.css`
                background-color: #f4333d;
                border: none;

                &:hover,
                &:active {
                    @media (pointer: fine) {
                        background-color: #b0262d;
                    }
                }
            `:e.css`
            background-color: ${t.Colour.Primitive.white};
            border: 1px #c8c9cc solid;

            &:hover,
            &:active {
                @media (pointer: fine) {
                    background-color: #f5f5f7;
                }
            }
        `}

    ${t=>{switch(t.$buttonSizeStyle){case"small":return e.css`
                    height: 2.5rem;
                `;case"large":return e.css`
                    min-height: 4rem;
                `;default:return e.css`
                    min-height: 3rem;
                `}}}
`,a=n.default.span`
    img {
        height: 100%;
    }

    height: ${e=>"large"===e.$buttonSizeStyle?2.5:1.5}rem;
`;exports.Main=o,exports.SvgContainer=a;
//# sourceMappingURL=singpass-button.style.js.map
