import{CloudArrowUpFillIcon as i}from"@lifesg/react-icons/cloud-arrow-up-fill";import t,{css as r}from"styled-components";import{Spacing as e,MediaQuery as o,Border as d,Colour as n,Radius as s}from"../theme/index.js";import{Typography as a}from"../typography/typography.js";const l=t.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${i=>{if(i.$border)return r`
                ${d.Util["dashed-default"]({radius:s.sm,thickness:d["width-040"],colour:n.border})}
                padding: ${e["spacing-32"]};

                ${o.MaxWidth.md} {
                    padding: ${e["spacing-32"]} ${e["spacing-20"]};
                }
            `}}
`,p=t.input`
    display: none;
`,c=t.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${n["bg-primary-subtler"]};
    ${d.Util["dashed-default"]({radius:s.sm,thickness:d["width-040"],colour:n["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,m=t(a.BodyMD)`
    color: ${n["text-primary"]};
    text-align: center;
`,h=t(i)`
    color: ${n["icon-primary"]};
    height: 4rem;
    width: 4rem;
`;export{l as Container,c as DragOverlay,p as HiddenInput,h as OverlayIcon,m as OverlayText};
//# sourceMappingURL=dropzone.styles.js.map
