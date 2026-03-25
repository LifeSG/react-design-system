import e,{css as t}from"styled-components";import{V3_Spacing as r,V3_Motion as o,V3_Colour as i}from"../v3_theme/index.js";import{V3_ThemeButton as n}from"../v3_theme/components/theme-helper.js";const a=e.button`
    padding: ${r["spacing-8"]} ${r["spacing-16"]};
    transition: all ${o["duration-250"]} ${o["ease-default"]};
    border-radius: ${n["button-radius"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    ${e=>"red-filled"===e.$buttonStyle?t`
                background-color: #f4333d;
                border: none;

                &:hover,
                &:active {
                    @media (pointer: fine) {
                        background-color: #b0262d;
                    }
                }
            `:t`
            background-color: ${i.Primitive.white};
            border: 1px #c8c9cc solid;

            &:hover,
            &:active {
                @media (pointer: fine) {
                    background-color: #f5f5f7;
                }
            }
        `}

    ${e=>{switch(e.$buttonSizeStyle){case"small":return t`
                    height: 2.5rem;
                `;case"large":return t`
                    min-height: 4rem;
                `;default:return t`
                    min-height: 3rem;
                `}}}
`,c=e.span`
    img {
        height: 100%;
    }

    height: ${e=>"large"===e.$buttonSizeStyle?2.5:1.5}rem;
`;export{a as Main,c as SvgContainer};
//# sourceMappingURL=singpass-button.style.js.map
