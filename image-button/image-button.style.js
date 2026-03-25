import e,{css as r}from"styled-components";import{V3_Colour as o,V3_Border as d,V3_Radius as t,V3_Motion as i,V3_Font as l,V3_MediaQuery as n}from"../v3_theme/index.js";const s=e.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${o.bg};
    border: ${d["width-010"]} ${d.solid} transparent;
    border-radius: ${t.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${i["duration-250"]} ${i["ease-default"]};
    ${l["body-baseline-semibold"]}
    color: ${({$selected:e})=>e?o["text-primary"]:o.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${n.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${l["body-md-semibold"]}
    }

    ${e=>e.$error?r`
                background: ${o.bg};
                border: ${d["width-010"]} ${d.solid}
                    ${o["border-error"]};
            `:e.$selected?r`
                background: ${o["bg-selected"]};
                border: ${d["width-010"]} ${d.solid}
                    ${o["border-selected"]};

                &:hover {
                    background: ${o["bg-selected-hover"]};
                    border: ${d["width-010"]} ${d.solid}
                        ${o["border-selected-hover"]};
                }
            `:r`
                &:hover {
                    border: ${d["width-010"]} ${d.solid}
                        ${o["border-hover-strong"]};
                }
            `}

    ${e=>e.$disabled&&r`
            &:hover {
                border: ${d["width-010"]} ${d.solid} transparent;
            }
            box-shadow: none;
            img {
                filter: grayscale(100%);
            }
            color: ${o["text-disabled"]};
            cursor: not-allowed;
        `}
`;export{s as Main};
//# sourceMappingURL=image-button.style.js.map
