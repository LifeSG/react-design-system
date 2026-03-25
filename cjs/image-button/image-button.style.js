"use strict";var r=require("styled-components"),e=require("../v3_theme/index.js");function o(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}const d=o(r).default.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${e.V3_Colour.bg};
    border: ${e.V3_Border["width-010"]} ${e.V3_Border.solid} transparent;
    border-radius: ${e.V3_Radius.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${e.V3_Motion["duration-250"]} ${e.V3_Motion["ease-default"]};
    ${e.V3_Font["body-baseline-semibold"]}
    color: ${({$selected:r})=>r?e.V3_Colour["text-primary"]:e.V3_Colour.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${e.V3_MediaQuery.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${e.V3_Font["body-md-semibold"]}
    }

    ${o=>o.$error?r.css`
                background: ${e.V3_Colour.bg};
                border: ${e.V3_Border["width-010"]} ${e.V3_Border.solid}
                    ${e.V3_Colour["border-error"]};
            `:o.$selected?r.css`
                background: ${e.V3_Colour["bg-selected"]};
                border: ${e.V3_Border["width-010"]} ${e.V3_Border.solid}
                    ${e.V3_Colour["border-selected"]};

                &:hover {
                    background: ${e.V3_Colour["bg-selected-hover"]};
                    border: ${e.V3_Border["width-010"]} ${e.V3_Border.solid}
                        ${e.V3_Colour["border-selected-hover"]};
                }
            `:r.css`
                &:hover {
                    border: ${e.V3_Border["width-010"]} ${e.V3_Border.solid}
                        ${e.V3_Colour["border-hover-strong"]};
                }
            `}

    ${o=>o.$disabled&&r.css`
            &:hover {
                border: ${e.V3_Border["width-010"]} ${e.V3_Border.solid} transparent;
            }
            box-shadow: none;
            img {
                filter: grayscale(100%);
            }
            color: ${e.V3_Colour["text-disabled"]};
            cursor: not-allowed;
        `}
`;exports.Main=d;
//# sourceMappingURL=image-button.style.js.map
