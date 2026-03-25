"use strict";var r=require("styled-components"),e=require("../v3_theme/index.js");function o(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}const t=o(r).default.button`
    align-items: center;
    border-radius: ${e.V3_Radius.sm};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return r.css`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return r.css`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return r.css`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${o=>{switch(o.$styleType){case"secondary":case"light":return r.css`
                    background-color: ${e.V3_Colour.bg};
                    border: ${e.V3_Border["width-010"]} ${e.V3_Border.solid}
                        ${e.V3_Colour["border-primary"]};
                    color: ${e.V3_Colour["text-primary"]};

                    &:hover {
                        background-color: ${e.V3_Colour["bg-hover-neutral"]};
                    }
                `;case"disabled":return r.css`
                    background-color: ${e.V3_Colour["bg-disabled"]};
                    border: ${e.V3_Border["width-010"]} ${e.V3_Border.solid}
                        ${e.V3_Colour["border-disabled"]};
                    color: ${e.V3_Colour["text-disabled"]};
                    cursor: not-allowed;
                `;default:return r.css`
                    background-color: ${e.V3_Colour["bg-primary"]};
                    border: none;
                    color: ${e.V3_Colour["text-inverse"]};

                    &:hover {
                        background-color: ${e.V3_Colour["bg-primary-hover"]};
                    }
                `}}}
`;exports.Main=t;
//# sourceMappingURL=icon-button.style.js.map
