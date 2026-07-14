"use strict";var r=require("styled-components"),e=require("../theme/index.js");function o(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}const d=o(r).default.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${e.Colour.bg};
    border: ${e.Border["width-010"]} ${e.Border.solid} transparent;
    border-radius: ${e.Radius.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${e.Motion["duration-250"]} ${e.Motion["ease-default"]};
    ${e.Font["body-baseline-semibold"]}
    color: ${({$selected:r})=>r?e.Colour["text-primary"]:e.Colour.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${e.MediaQuery.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${e.Font["body-md-semibold"]}
    }

    ${o=>o.$error?r.css`
                background: ${e.Colour.bg};
                border: ${e.Border["width-010"]} ${e.Border.solid}
                    ${e.Colour["border-error"]};
            `:o.$selected?r.css`
                background: ${e.Colour["bg-selected"]};
                border: ${e.Border["width-010"]} ${e.Border.solid}
                    ${e.Colour["border-selected"]};

                &:hover {
                    background: ${e.Colour["bg-selected-hover"]};
                    border: ${e.Border["width-010"]} ${e.Border.solid}
                        ${e.Colour["border-selected-hover"]};
                }
            `:r.css`
                &:hover {
                    border: ${e.Border["width-010"]} ${e.Border.solid}
                        ${e.Colour["border-hover-strong"]};
                }
            `}

    ${o=>o.$disabled&&r.css`
            &:hover {
                border: ${e.Border["width-010"]} ${e.Border.solid} transparent;
            }
            box-shadow: none;
            img {
                filter: grayscale(100%);
            }
            color: ${e.Colour["text-disabled"]};
            cursor: not-allowed;
        `}
`;exports.Main=d;
//# sourceMappingURL=image-button.style.js.map
