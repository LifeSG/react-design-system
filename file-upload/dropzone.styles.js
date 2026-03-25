import{CloudArrowUpFillIcon as e}from"@lifesg/react-icons/cloud-arrow-up-fill";import i,{css as o}from"styled-components";import{DashedBorder as t}from"../dashed-border/dashed-border.js";import{Typography as r}from"../typography/index.js";import{V3_Spacing as n,V3_MediaQuery as d,V3_Colour as p}from"../v3_theme/index.js";const s=i(t)`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$showDashedBorder)return o`
                padding: ${n["spacing-32"]};

                ${d.MaxWidth.md} {
                    padding: ${n["spacing-32"]}
                        ${n["spacing-20"]};
                }
            `}}
`,a=i.input`
    display: none;
`,l=i(t)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,m=i(r.BodyMD)`
    color: ${p["text-primary"]};
    text-align: center;
`,c=i(e)`
    color: ${p["icon-primary"]};
    height: 4rem;
    width: 4rem;
`;export{s as Container,l as DragOverlay,a as HiddenInput,c as OverlayIcon,m as OverlayText};
//# sourceMappingURL=dropzone.styles.js.map
