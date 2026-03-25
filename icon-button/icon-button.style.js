import r,{css as e}from"styled-components";import{V3_Radius as o,V3_Colour as t,V3_Border as i}from"../v3_theme/index.js";const d=r.button`
    align-items: center;
    border-radius: ${o.sm};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${r=>{switch(r.$sizeType){case"large":return e`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return e`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return e`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${r=>{switch(r.$styleType){case"secondary":case"light":return e`
                    background-color: ${t.bg};
                    border: ${i["width-010"]} ${i.solid}
                        ${t["border-primary"]};
                    color: ${t["text-primary"]};

                    &:hover {
                        background-color: ${t["bg-hover-neutral"]};
                    }
                `;case"disabled":return e`
                    background-color: ${t["bg-disabled"]};
                    border: ${i["width-010"]} ${i.solid}
                        ${t["border-disabled"]};
                    color: ${t["text-disabled"]};
                    cursor: not-allowed;
                `;default:return e`
                    background-color: ${t["bg-primary"]};
                    border: none;
                    color: ${t["text-inverse"]};

                    &:hover {
                        background-color: ${t["bg-primary-hover"]};
                    }
                `}}}
`;export{d as Main};
//# sourceMappingURL=icon-button.style.js.map
