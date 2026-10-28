"use strict";var r=require("styled-components"),e=require("../theme/index.js");function o(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}const t=o(r).default.button`
    align-items: center;
    border-radius: ${e.Radius.sm};
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

    ${o=>{switch(o.$styleType){case"secondary":return r.css`
                    background-color: ${e.Colour.bg};
                    border: ${e.Border["width-010"]} ${e.Border.solid}
                        ${e.Colour["border-primary"]};
                    color: ${e.Colour["text-primary"]};

                    &:hover {
                        background-color: ${e.Colour["bg-hover-neutral"]};
                    }
                `;case"light":return r.css`
                    background-color: ${e.Colour.bg};
                    border: ${e.Border["width-010"]} ${e.Border.solid}
                        ${e.Colour.border};
                    color: ${e.Colour["text-primary"]};

                    &:hover {
                        background-color: ${e.Colour["bg-hover-neutral"]};
                    }
                `;case"disabled":return r.css`
                    background-color: ${e.Colour["bg-disabled"]};
                    border: ${e.Border["width-010"]} ${e.Border.solid}
                        ${e.Colour["border-disabled"]};
                    color: ${e.Colour["text-disabled"]};
                    cursor: not-allowed;
                `;default:return r.css`
                    background-color: ${e.Colour["bg-primary"]};
                    border: none;
                    color: ${e.Colour["text-inverse"]};

                    &:hover {
                        background-color: ${e.Colour["bg-primary-hover"]};
                    }
                `}}}
`;exports.Main=t;
//# sourceMappingURL=icon-button.style.js.map
